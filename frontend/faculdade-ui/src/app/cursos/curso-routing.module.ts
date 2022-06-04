import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CursoCadastroComponent } from './curso-cadastro/curso-cadastro.component';
import { CursoPesquisaComponent } from './curso-pesquisa/curso-pesquisa.component';

const routes: Routes = [
    { path: 'cursos', component: CursoPesquisaComponent },
    { path: 'cursos/novo', component: CursoCadastroComponent },
    { path: 'cursos/:codigo', component: CursoCadastroComponent }
  ];
  
  @NgModule({
    imports: [
      RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
  })
  export class CursoRoutingModule { }