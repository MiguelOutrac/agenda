import { Tipo } from "./tipo"

export class Contato{
  nome: string 
  telefone: number 
  email: string 
  aniversario: Date
  tipo: string
  constructor(nm:string,tf:number,em:string,an:Date,tp:string){
    this.nome = nm
    this.telefone = tf
    this.email = em
    this.aniversario = an
    this.tipo = tp 
  }
 
  obterContato(){
    return this.nome
    return this.telefone
    return this.email
    return this.aniversario
    return this.tipo

  }
}