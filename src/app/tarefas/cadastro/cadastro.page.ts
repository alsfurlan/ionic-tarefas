import { Component, OnInit } from '@angular/core';
import { Tarefa } from '../tarefa.model';
import { TarefasService } from '../tarefas.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  private tarefa: Tarefa;
  
  constructor(
    private service : TarefasService,
    private nav : NavController
  ) { 
    this.tarefa = new Tarefa();
  }

  ngOnInit() {
  }

  salvar() {
    this.service.salvar(this.tarefa);    
    this.tarefa = new Tarefa();
    this.nav.navigateForward('/tarefas');
  }
}
