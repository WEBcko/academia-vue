import { ConfiguracaoModel } from '@/models/ConfiguracaoModel';
import axios, {AxiosInstance} from 'axios';

class ConfiguracaoCLient{

    private axiosClient : AxiosInstance;

    constructor(){
        this.axiosClient = axios.create({
            baseURL:"http://localhost:8080/api/configuracao",
            headers: {'Content-type' : 'application/json'}
        });
    }

    
    public async findById(id : number) : Promise<ConfiguracaoModel>{
        try{
            return (await this.axiosClient.get<ConfiguracaoModel>(`/${id}`)).data
        }catch(error:any){
            return Promise.reject(error.response)
        }
    }


    public async listAll(): Promise<ConfiguracaoModel[]>{
        try{
            return (await this.axiosClient.get<ConfiguracaoModel[]>("/lista")).data
        }catch(error:any){
            return Promise.reject(error.response);
        }
    }

    public async cadastrar(configuracaoModel : ConfiguracaoModel) : Promise<string>{
        try{
            return (await this.axiosClient.post('', configuracaoModel)).data
        }catch(error:any){
            return Promise.reject(error.response);
        }
    }

    public async editar(configuracaoModel : ConfiguracaoModel) : Promise<string>{
        try{
            return (await this.axiosClient.put(`/${configuracaoModel.id}`, configuracaoModel)).data
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

export default new ConfiguracaoCLient()