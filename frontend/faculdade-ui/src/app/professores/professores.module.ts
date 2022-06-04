import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { CurrencyMaskModule } from 'ng2-currency-mask';
import { InputMaskModule } from 'primeng/inputmask';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { SelectButtonModule } from 'primeng/selectbutton';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { CardModule } from 'primeng/card';

import { SharedModule } from '../shared/shared.module';
import { MultiSelectModule } from 'primeng/multiselect';
import { RouterModule } from '@angular/router';
import { ProfessorPesquisaComponent } from './professor-pesquisa/professor-pesquisa.component';
import { ProfessorCadastroComponent } from './professor-cadastro/professor-cadastro.component';
import { ProfessorRoutingModule } from './professor.routing.module';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule,

    InputTextModule,
    ButtonModule,
    TableModule,
    TooltipModule,
    InputTextareaModule,
    CalendarModule,
    SelectButtonModule,
    DropdownModule,
    CardModule,
    
    MultiSelectModule,

    CurrencyMaskModule,
    InputMaskModule,

    SharedModule,
    ProfessorRoutingModule
  ],
  declarations: [
    ProfessorPesquisaComponent,
    ProfessorCadastroComponent
  ],
  
})
export class ProfessoresModule { }
