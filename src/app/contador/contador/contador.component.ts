import { Component } from "@angular/core";

@Component({
    selector: 'app-contador',
    template: 
    `
    <h1>Hola mundo 1</h1>
    <h1>{{ base }}</h1>
    
    <button (click)="acumular(+base)">+{{base}}</button>
    <h1>{{ numero }}</h1>
    <button (click)="acumular(-base)">-{{base}}</button>

    `
})
export class ContadorComponent{

    title = 'bases';
    numero : number = 10;
    base: number = 5;

    acumular(valor:number)
    {
        this.numero += valor;
    }

}