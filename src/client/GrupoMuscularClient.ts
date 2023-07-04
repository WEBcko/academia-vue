import { GrupoMuscularModel } from '@/models/GrupoMuscularModel';
import axios, {AxiosInstance} from 'axios';
import setAuthorizationHeader from '@/configs-axios/axios-config';

class GrupoMuscularClient{
    public token = localStorage.getItem('userToken');

    private axiosClient : AxiosInstance;

    constructor(){
        this.axiosClient = axios.create({
            baseURL:"http://localhost:8080/api/grupo",
            headers: {'Content-type' : 'application/json','Authorization' : `Bearer ${localStorage.getItem('userToken')}`,
            "Access-Control-Allow-Origin": "http://localhost:8080","Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE" ,},
            
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
            //  const token = localStorage.getItem('userToken')
            //  setAuthorizationHeader(String(token));
            return (await this.axiosClient.get<GrupoMuscularModel[]>("/lista")).data
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

    public async editar( grupoMuscular : GrupoMuscularModel) : Promise<GrupoMuscularModel>{
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