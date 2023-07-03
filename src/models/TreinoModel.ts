import { AbstractEntity } from "./AbstractEntity";


export class TreinoModel extends AbstractEntity{

    codigoOrdem! : string

    constructor(){
        super();
        this.ativo=true;
    }
    
}