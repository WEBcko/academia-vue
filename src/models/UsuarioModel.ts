import { AbstractEntity } from "./AbstractEntity"
import { UsuarioRole } from "./UsuarioRoleModel"

export class UsuarioModel extends AbstractEntity{
    nome! : string
    peso! : number
    altura! : number
    cep! : string
    numeroCasa! : number
    dataNascimento! : Date
    telefone! : string
    cpf! : string
    email! : string
    senha! : string
    role! : UsuarioRole

    constructor(){
        super();
        this.ativo=true;
    }

}