import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  heroeBorrado: string  = '';
  heroes : string[] = ['spiderman', 'ironman', 'hulk'];

  constructor() { }

  ngOnInit(): void {
  }

  borrarItem(){
    this.heroeBorrado = this.heroes.pop() || '';
  }
}
