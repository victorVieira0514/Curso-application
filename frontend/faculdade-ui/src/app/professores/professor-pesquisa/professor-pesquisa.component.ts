import { Component, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { Professor } from 'src/app/core/model';
import { ProfessorService } from '../professor.service';

@Component({
  selector: 'app-professor-pesquisa',
  templateUrl: './professor-pesquisa.component.html',
  styleUrls: ['./professor-pesquisa.component.css']
})
export class ProfessorPesquisaComponent implements OnInit {

  professor: Professor[] = [];
  @ViewChild('tabela') grid!: Table;
  
  constructor(
    private professorService: ProfessorService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private title: Title
  ) { }

  ngOnInit(): void {
    this.title.setTitle('Pesquisa de Professores');
    this.pesquisar();
  }

  pesquisar(): void {  
    this.professorService.read().subscribe(prof => {
      this.professor = prof;
    });
  }
  
  confirmarExclusao(professor: Professor): void {
    this.confirmationService.confirm({
      message: 'Tem certeza que deseja excluir?',
      accept: () => {
          this.excluir(professor);
      }
    });
  }
  
  excluir(professor: any) {
    this.professorService.excluir(professor.codigo)
      .then(() => {
        if (this.grid.first === 0) {
          this.pesquisar();
        } else {
          this.pesquisar();
          this.grid.reset();
        }

        this.messageService.add({ severity: 'success', detail: 'Professor excluído com sucesso!' })
      })
  }

}
