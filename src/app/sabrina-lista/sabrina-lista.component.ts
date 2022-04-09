import { Component, OnInit } from '@angular/core';
import { ListData } from '../list';

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
  constructor() { }

  ngOnInit() {
  }

}