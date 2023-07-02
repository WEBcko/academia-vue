import { TreinoModel } from '@/models/TreinoModel';
import axios, {AxiosInstance} from 'axios';

class TreinoClient{

    private axiosClient : AxiosInstance;

    constructor(){
        this.axiosClient = axios.create({
            baseURL:"http://localhost:8080/api/treino",
            headers: {'Content-type' : 'application/json'}
        });
    }


    public async findById(id : number) : Promise<TreinoModel>{
        try{
            return (await this.axiosClient.get<TreinoModel>(`/${id}`)).data
        }catch(error:any){
            return Promise.reject(error.response)
        }
    }

    public async listAll(): Promise<TreinoModel[]>{
        try{
            return (await this.axiosClient.get<TreinoModel[]>("/lista")).data
        }catch(error:any){
            return Promise.reject(error.response);
        }
    }

    public async cadastrar(treinoModel : TreinoModel) : Promise<string>{
        try{
            return (await this.axiosClient.post('', treinoModel)).data
        }catch(error:any){
            return Promise.reject(error.response);
        }
    }


    public async editar(id: number, treinoModel: TreinoModel) : Promise<string>{
        try{
            return (await this.axiosClient.put(`/${treinoModel.id}`, treinoModel)).data
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

export default new TreinoClient()