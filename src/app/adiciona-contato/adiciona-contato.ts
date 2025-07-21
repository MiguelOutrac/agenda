import { Component } from '@angular/core';
import { Contato } from './contato';
import { Tipo } from './tipo';
import { consumerAfterComputation } from '@angular/core/primitives/signals';
@Component({
  selector: 'app-adiciona-contato',
  imports: [],
  templateUrl: './adiciona-contato.html',
  styleUrl: './adiciona-contato.css'
})
export class AdicionaContato {
  contatos: Contato[]
  constructor(){
    this.contatos = []
  }
 AdicionarContato(nm:string,tf:number,em:string,an:string,tp:string){
  let aniversario = new Date(an)
  const c = new Contato(nm,tf,em, aniversario,tp)
  
  }
}
