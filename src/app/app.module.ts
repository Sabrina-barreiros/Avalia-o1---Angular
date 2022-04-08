import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { RouterModule } from '@angular/router';
import { SabrinaComponent } from './sabrina/sabrina.component';
import { SabrinaDisciplinasService } from './sabrina-disciplinas.service';
import { SabrinaListaComponent } from './sabrina-lista/sabrina-lista.component';
import { SabrinaDetalhesComponent } from './sabrina-detalhes/sabrina-detalhes.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot([
    {path:"", component: SabrinaComponent},
    {path:"disciplinas", component: SabrinaDisciplinasService},
    {path:"lista", component: SabrinaListaComponent},
    {path:"detalhes", component: SabrinaDetalhesComponent},
  ]) ],
  declarations: [ AppComponent, HelloComponent, SabrinaComponent, SabrinaListaComponent, SabrinaDetalhesComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
