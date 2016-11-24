import {Component, Input, OnInit} from '@angular/core';

@Component({
    moduleId:module.id,
    selector:'painel',
    templateUrl:'./painel.component.html'
})
export class PainelComponent  implements OnInit{

    @Input() titulo:string;

    constructor(){
        //tipagem de dados, não permite algo como abaixo
        //this.titulo=10;
        //this.titulo = 
        //this.titulo.length>7 ? 
        //this.titulo.substr(0,7)+"..." : 
        //this.titulo;

    }

    ngOnInit(){
        this.titulo = 
        this.titulo.length>7 ? 
        this.titulo.substr(0,7)+" ..." : 
        this.titulo;
    }

}