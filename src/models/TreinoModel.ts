import { AbstractEntity } from "./AbstractEntity";


export class TreinoModel extends AbstractEntity{

    codigOrdem! : string

    constructor(){
        super();
        this.ativo=true;
    }
    
}