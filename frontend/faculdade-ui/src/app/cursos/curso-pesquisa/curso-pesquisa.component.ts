import { Component, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { Curso } from 'src/app/core/model';
import { CursoService } from '../curso.service';

@Component({
  selector: 'app-curso-pesquisa',
  templateUrl: './curso-pesquisa.component.html',
  styleUrls: ['./curso-pesquisa.component.css']
})
export class CursoPesquisaComponent implements OnInit {
  
  cursos: Curso[] = [];
  @ViewChild('tabela') grid!: Table;
  constructor(
    private cursoService: CursoService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private title: Title
  ) { }

  ngOnInit(): void {
    this.title.setTitle('Pesquisa de Cursos');
    this.pesquisar();
  }

  pesquisar(): void {  
    this.cursoService.read().subscribe(cursos => {
      this.cursos = cursos;
    });
  }

  confirmarExclusao(curso: Curso): void {
    this.confirmationService.confirm({
      message: 'Tem certeza que deseja excluir?',
      accept: () => {
          this.excluir(curso);
      }
    });
  }
  
  excluir(curso: any) {
    this.cursoService.excluir(curso.codigo)
      .then(() => {
        if (this.grid.first === 0) {
          this.pesquisar();
        } else {
          this.pesquisar();
          this.grid.reset();
        }

        this.messageService.add({ severity: 'success', detail: 'Curso excluído com sucesso!' })
      })
  }

}
