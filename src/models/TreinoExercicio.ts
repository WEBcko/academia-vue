import { AbstractEntity } from "./AbstractEntity";
import { ExercicioModel } from "./ExercicioModel";
import { TreinoModel } from "./TreinoModel";

export class TreinoExercicioModel extends AbstractEntity{
    idTreino! : TreinoModel
    idExercicios! : ExercicioModel
    dificuldade! : string
    peso! : number
    series! : number

}