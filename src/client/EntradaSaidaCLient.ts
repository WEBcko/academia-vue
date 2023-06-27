import { EntradaSaidaModel } from '@/models/EntradaSaidaModel';
import axios, {AxiosInstance} from 'axios';

class EntradaSaidaClient{
    private axiosClient : AxiosInstance;

    constructor(){
        this.axiosClient = axios.create({
            baseURL:"http://localhost:8080/api/entradasaida",
            headers: {'Content-type' : 'application/json'}
        });
    }


    public async findById(id : number) : Promise<EntradaSaidaModel>{
        try{
            return (await this.axiosClient.get<EntradaSaidaModel>(`/${id}`)).data
        }catch(error:any){
            return Promise.reject(error.response)
        }
    }

    public async listAll(): Promise<EntradaSaidaModel[]>{
        try{
            return (await this.axiosClient.get<EntradaSaidaModel[]>("/listar")).data
        }catch(error:any){
            return Promise.reject(error.response);
        }
    }

    public async cadastrar(exercicioModel : EntradaSaidaModel) : Promise<string>{
        try{
            return (await this.axiosClient.post('/', exercicioModel)).data
        }catch(error:any){
            return Promise.reject(error.response);
        }
    }


    public async editar(entradaSaidaModel: EntradaSaidaModel) : Promise<string>{
        try{
            return (await this.axiosClient.put(`/${entradaSaidaModel.id}`, entradaSaidaModel)).data
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

export default new EntradaSaidaClient()