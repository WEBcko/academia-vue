import { GrupoMuscularModel } from '@/models/GrupoMuscularModel';
import axios, {AxiosInstance} from 'axios';

class GrupoMuscularClient{

    private axiosClient : AxiosInstance;

    constructor(){
        this.axiosClient = axios.create({
            baseURL:"http://localhost:8080/api/grupo",
            headers: {'Content-type' : 'application/json'}
        });
    }

    public async findById(id : number) : Promise<GrupoMuscularModel>{
        try{
            return (await this.axiosClient.get<GrupoMuscularModel>(`/${id}`)).data
        }catch(error:any){
            return Promise.reject(error.response);
        }
    }

    public async listAll(): Promise<GrupoMuscularModel[]>{
        try{
            return (await this.axiosClient.get<GrupoMuscularModel[]>("/listar")).data
        }catch(error:any){
            return Promise.reject(error.response);
        }
    }

    public async cadastrar(grupoMuscularModel : GrupoMuscularModel) : Promise<string>{
        try{
            return (await this.axiosClient.post('/', grupoMuscularModel)).data
        }catch(error:any){
            return Promise.reject(error.response);
        }
    }

    public async editar(id: number, grupoMuscular : GrupoMuscularModel) : Promise<string>{
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

export default new GrupoMuscularClient()