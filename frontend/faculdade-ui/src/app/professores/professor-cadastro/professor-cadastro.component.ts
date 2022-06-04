import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { Professor } from 'src/app/core/model';
import { ProfessorService } from '../professor.service';

@Component({
  selector: 'app-professor-cadastro',
  templateUrl: './professor-cadastro.component.html',
  styleUrls: ['./professor-cadastro.component.css']
})
export class ProfessorCadastroComponent implements OnInit {

  profObject: Professor = new Professor();

  constructor(
    private professorService: ProfessorService,
    private errorHandler: ErrorHandlerService,
    private route: ActivatedRoute,
    private router: Router,
    private messageService: MessageService,
    private title: Title
  ) { }

  ngOnInit(): void {
    this.title.setTitle('Novo Professor');
    const codigoProfessor = this.route.snapshot.params['codigo'];

    if (codigoProfessor) {
      this.carregarProfessor(codigoProfessor)
    }
  }

  get editando() {
    return Boolean(this.profObject.codigo)
  }
  
  carregarProfessor(codigo: number) {
    this.professorService.buscarPorCodigo(codigo)
      .then(professor => {
        this.profObject = professor;
      },
      erro => this.errorHandler.handle(erro));
  }

  salvar(form: NgForm) {
    if (this.editando) {
      this.atualizarProfessor(form)
    } else {
      this.adicionarProfessor(form)
    }
  }

  atualizarProfessor(form: NgForm) {
    this.professorService.atualizar(this.profObject)
      .then((professor: Professor) => {
          this.profObject = professor;
          this.messageService.add({ severity: 'success', detail: 'Professor alterado com sucesso!' });
          this.atualizarTituloEdicao();
        }).catch(error => this.messageService.add({ severity: 'error', detail: error.error.message }))
  }

  adicionarProfessor(form: NgForm) {
    this.professorService.create(this.profObject).subscribe(
      (professorAdicionado) => {
        this.messageService.add({ severity: 'success', detail: 'Professor adicionado com sucesso!' });
        this.router.navigate(['/professores', professorAdicionado.codigo]);
      }, 
      (error) => {
        this.messageService.add({ severity: 'error', detail: error.error.message });
      });
  }

  novo(professorForm: NgForm) {
    professorForm.reset(new Professor);

    this.router.navigate(['professores/novo']);
  }

  private atualizarTituloEdicao() {
    this.title.setTitle(`Edição de professores: ${this.profObject.nome}`);
  }

}
