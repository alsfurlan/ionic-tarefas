import { Component, OnInit } from '@angular/core';
import { TarefasService } from './tarefas.service';
import { Tarefa } from './tarefa.model';

@Component({
  selector: 'app-tarefas',
  templateUrl: './tarefas.page.html',
  styleUrls: ['./tarefas.page.scss'],
})
export class TarefasPage implements OnInit {

  private tarefas: Tarefa[];

  constructor(
    private tarefaService: TarefasService
  ) { 
    this.tarefas = tarefaService.getTarefas();
  }

  ngOnInit() {
  }
  
  concluir(tarefa: Tarefa) {
    this.tarefaService.concluir(tarefa);
  }

}
