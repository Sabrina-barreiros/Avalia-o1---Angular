import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListData } from '../list';

@Component({
  selector: 'app-sabrina-detalhes',
  templateUrl: './sabrina-detalhes.component.html',
  styleUrls: ['./sabrina-detalhes.component.css']
})
export class SabrinaDetalhesComponent implements OnInit {item;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params =>{this.item = ListData[params.get("index")] })
  }

}