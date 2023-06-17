import { GrupoMuscular } from '@/models/GrupoMuscular';
import axios, {AxiosInstance} from 'axios';

export class GrupoMuscularClient{

    private axiosClient : AxiosInstance;

    constructor(){
        this.axiosClient = axios.create({
            baseURL:"http://localhost:8080/api/grupo",
            headers: {'Content-type' : 'application/json'}
        });
    }

    public async findById(id : number) : Promise<GrupoMuscular>{
        try{
            return (await this.axiosClient.get<GrupoMuscular>(`/${id}`)).data
        }catch(error:any){
            return Promise.reject(error.response);
        }
    }

    public async listAll(): Promise<GrupoMuscular[]>{
        try{
            return (await this.axiosClient.get<GrupoMuscular[]>("/listar")).data
        }catch(error:any){
            return Promise.reject(error.response);
        }
    }

    public async cadastrar(grupoMuscular : GrupoMuscular) : Promise<void>{
        try{
            return (await this.axiosClient.post('/', grupoMuscular)).data
        }catch(error:any){
            return Promise.reject(error.response);
        }
    }

    public async editar( grupoMuscular : GrupoMuscular) : Promise<GrupoMuscular>{
        try{
            return (await this.axiosClient.put(`/${grupoMuscular.id}`, grupoMuscular)).data
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