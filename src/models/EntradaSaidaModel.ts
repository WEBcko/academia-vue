import { AbstractEntity } from "./AbstractEntity";
import { UsuarioModel } from "./UsuarioModel";


export class EntradaSaidaModel extends AbstractEntity{
    cliente! : UsuarioModel
    personal! : UsuarioModel
    horaEntrada! : Date
    horaSaida! : Date
}