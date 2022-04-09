import { Component, OnInit } from '@angular/core';
import { ListData } from '../list';
import { SabrinaDisciplinasService } from '../sabrina-disciplinas.service';

@Component({
  selector: 'app-sabrina-lista',
  templateUrl: './sabrina-lista.component.html',
  styleUrls: ['./sabrina-lista.component.css']
})
export class SabrinaListaComponent implements OnInit {
list = ListData;

codigo:number;
nome:string;
horario:number;
semana:string;
  constructor(public sabrinaDisciplinas: SabrinaDisciplinasService) { 
    this.codigo= 0;
   this.nome = '';
   this.semana = '';
   this.horario= 0;
  }
    
  ngOnInit() {
  }

}