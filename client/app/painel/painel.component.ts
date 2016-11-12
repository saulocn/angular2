import {Component, Input} from '@angular/core';

@Component({
    moduleId:module.id,
    selector:'painel',
    templateUrl:'./painel.component.html'
})
export class PainelComponent {
    @Input() titulo:string;

    constructor(){
        //tipagem de dados, não permite algo como abaixo
        
        //this.titulo=10;

    }

}