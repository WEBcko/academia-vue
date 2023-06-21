import { AbstractEntity } from "./AbstractEntity";



export class ConfiguracaoModel extends AbstractEntity{

    horaAbrir! : Date
    horaFechar! : Date
    ocupacao! : number

    constructor(){
        super();
        this.ativo=true
    }

}