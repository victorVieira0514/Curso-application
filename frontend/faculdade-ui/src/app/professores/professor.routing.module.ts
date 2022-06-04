import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfessorCadastroComponent } from './professor-cadastro/professor-cadastro.component';
import { ProfessorPesquisaComponent } from './professor-pesquisa/professor-pesquisa.component';

const routes: Routes = [
    { path: 'professores', component: ProfessorPesquisaComponent },
    { path: 'professores/novo', component: ProfessorCadastroComponent },
    { path: 'professores/:codigo', component: ProfessorCadastroComponent }
  ];
  
  @NgModule({
    imports: [
      RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
  })
  export class ProfessorRoutingModule { }