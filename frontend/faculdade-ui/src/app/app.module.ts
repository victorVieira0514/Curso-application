import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { CursosModule } from './cursos/cursos.module';
import { ProfessoresModule } from './professores/professores.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,

    CoreModule,
    CursosModule,
    ProfessoresModule,

    AppRoutingModule
  ],
  providers: [  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
