import { AbstractEntity } from "./AbstractEntity";
import { UsuarioRole } from "./UsuarioRoleModel";

export class UsuarioRequest extends AbstractEntity{
    nome! : string
    email! : string
    telefone! : string 
    senha! : string
    role! : UsuarioRole
}