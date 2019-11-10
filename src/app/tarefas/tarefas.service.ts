import { Injectable } from '@angular/core';
import { Tarefa } from './tarefa.model';

@Injectable({
  providedIn: 'root'
})
export class TarefasService {
  
  private tarefas: Tarefa[];

  constructor() {
    this.tarefas = [ 
      new Tarefa('Tarefa 1'),
      new Tarefa('Tarefa 2')
    ];
  }

  getTarefas() {
    return this.tarefas;
  }

  salvar(tarefa: Tarefa) {
    this.tarefas.push(tarefa);
  }

  concluir(tarefa: Tarefa) {
    let tarefaEncontrada = this.tarefas.find(t => t.id === tarefa.id);
    tarefaEncontrada.concluida = true;
  }
 

}
