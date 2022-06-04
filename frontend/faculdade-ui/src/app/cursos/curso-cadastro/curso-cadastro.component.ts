import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { CategoriaService } from 'src/app/categorias/categoria.service';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { Categoria, Curso, Professor } from 'src/app/core/model';
import { ProfessorService } from 'src/app/professores/professor.service';
import { CursoService } from '../curso.service';

@Component({
  selector: 'app-curso-cadastro',
  templateUrl: './curso-cadastro.component.html',
  styleUrls: ['./curso-cadastro.component.css']
})
export class CursoCadastroComponent implements OnInit {

  curso: Curso = new Curso();
  categorias: Categoria[] = [];
  professor: Professor[] = [];

  constructor(
    private categoriaService: CategoriaService,
    private professorService: ProfessorService,
    private cursoService: CursoService,
    private errorHandler: ErrorHandlerService,
    private route: ActivatedRoute,
    private router: Router,
    private messageService: MessageService,
    private title: Title
  ) { }

  ngOnInit(): void {
    this.title.setTitle('Novo Curso');
    const codigoCurso = this.route.snapshot.params['codigo'];

    this.carregarCategorias()
    this.carregarProfessores()
    if (codigoCurso) {
      this.carregarCurso(codigoCurso)
    }
  }

  get editando() {
    return Boolean(this.curso.codigo)
  }
  
  carregarCurso(codigo: number) {
    this.cursoService.buscarPorCodigo(codigo)
      .then(curso => {
        this.curso = curso;
      },
      erro => this.errorHandler.handle(erro));
  }

  carregarCategorias() {
    return this.categoriaService.listarTodas()
      .then(categorias => {
        debugger
        this.categorias = categorias
          .map((c:any) => ({ label: c.nome, value: c.codigo }));
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  carregarProfessores() {
    return this.professorService.listarTodos()
    .then(professor => {
      this.professor = professor
          .map((p:any) => ({ label: p.nome, value: p.codigo }));
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  salvar(form: NgForm) {
    if (this.editando) {
      this.atualizarCurso(form)
    } else {
      this.adicionarCurso(form)
    }
  }

  atualizarCurso(form: NgForm) {
    this.cursoService.atualizar(this.curso)
      .then((curso: Curso) => {
          this.curso = curso;
          this.messageService.add({ severity: 'success', detail: 'Curso alterado com sucesso!' });
          this.atualizarTituloEdicao();
        }).catch(error => this.messageService.add({ severity: 'error', detail: error.error.message }))
  }

  adicionarCurso(form: NgForm) {
    this.cursoService.create(this.curso).subscribe(
      (cursoAdicionado) => {
        this.messageService.add({ severity: 'success', detail: 'Curso adicionado com sucesso!' });
        this.router.navigate(['/cursos', cursoAdicionado.codigo]);
      }, 
      (error) => {
        this.messageService.add({ severity: 'error', detail: error.error.message });
      });
  }

  novo(cursoForm: NgForm) {
    cursoForm.reset(new Curso);

    this.router.navigate(['cursos/novo']);
  }

  private atualizarTituloEdicao() {
    this.title.setTitle(`Edição de cursos: ${this.curso.nomeCurso}`);
  }

}
