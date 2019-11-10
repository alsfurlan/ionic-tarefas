export class Tarefa {

    static contador = 1;

    public id: number;
    public descricao: string;
    public concluida: boolean;

    constructor(descricao:string = '') {
        this.id = Tarefa.contador++;
        this.descricao = descricao;
        this.concluida = false;
    }
}