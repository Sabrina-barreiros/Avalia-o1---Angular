import { Injectable } from '@angular/core';
interface Data{
  codigo: number;
  nome:string
  semana:string;
  horario:number;
}

@Injectable()
export class SabrinaDisciplinasService {
  list: Array<Data> =[];
  constructor() { }

  getList(){
    return this.list;
  }

  add(codigo:number, nome:string, semana:string, horario:number){
    this.list.push({codigo,nome,semana,horario});
  }

  remove(index: number){
    this.list.splice(index,1);
  }
}