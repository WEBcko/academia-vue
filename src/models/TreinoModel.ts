import { AbstractEntity } from "./AbstractEntity";
import { UsuarioModel } from "./UsuarioModel";


export class TreinoModel extends AbstractEntity{

    codigoOrdem! : string
    idUsuario!: UsuarioModel

    constructor(){
        super();
        this.ativo=true;
    }
    
}