import { AbstractEntity } from "./AbstractEntity";
import { UsuarioModel } from "./UsuarioModel";


export class EntradaSaidaModel extends AbstractEntity{
    idCliente! : UsuarioModel
    idPersonal! : UsuarioModel
    horaEntrada! : Date
    horaSaida! : Date
}