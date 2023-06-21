
import { TreinoExercicioModel } from '@/models/TreinoExercicio';
import axios, {AxiosInstance} from 'axios';

export class TreinoExercicio{

    private axiosClient : AxiosInstance;

    constructor(){
        this.axiosClient = axios.create({
            baseURL:"http://localhost:8080/api/treinoexercicios",
            headers: {'Content-type' : 'application/json'}
        });
    }


    public async findById(id : number) : Promise<TreinoExercicioModel>{
        try{
            return (await this.axiosClient.get<TreinoExercicioModel>(`/${id}`)).data
        }catch(error:any){
            return Promise.reject(error.response)
        }
    }

    public async listAll(): Promise<TreinoExercicioModel[]>{
        try{
            return (await this.axiosClient.get<TreinoExercicioModel[]>("/listar")).data
        }catch(error:any){
            return Promise.reject(error.response);
        }
    }

    public async cadastrar(treinoExercicioModel : TreinoExercicioModel) : Promise<string>{
        try{
            return (await this.axiosClient.post('/', treinoExercicioModel)).data
        }catch(error:any){
            return Promise.reject(error.response);
        }
    }


    public async editar(treinoExercicioModel : TreinoExercicioModel) : Promise<string>{
        try{
            return (await this.axiosClient.put(`/${treinoExercicioModel.id}`, treinoExercicioModel)).data
        }catch(error:any){
            return Promise.reject(error.response);
        }
    }

    public async deletar(id : number) : Promise<string>{
        try{
            return (await this.axiosClient.delete<string>(`/${id}`)).data
        }catch(error:any){
            return Promise.reject(error.response)
        }
    }


}