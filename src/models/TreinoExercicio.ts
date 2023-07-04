import { AbstractEntity } from "./AbstractEntity";
import { ExercicioModel } from "./ExercicioModel";
import { TreinoModel } from "./TreinoModel";

export class TreinoExercicioModel extends AbstractEntity{
    idTreino! : TreinoModel
    idExercicio! : ExercicioModel
    dificuldade! : string
    peso! : number
    series! : number

}