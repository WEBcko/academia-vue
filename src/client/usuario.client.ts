import { UsuarioModel } from '@/models/UsuarioModel';
import axios, {AxiosInstance} from 'axios';

export class UsuarioClient{
    private axiosClient : AxiosInstance;

    constructor(){
        this.axiosClient = axios.create({
            baseURL:"http://localhost:8080/api/exercicio",
            headers: {'Content-type' : 'application/json'}
        });
    }

    public async findById(id : number) : Promise<UsuarioModel>{
        try{
            return (await this.axiosClient.get<UsuarioModel>(`/${id}`)).data
        }catch(error:any){
            return Promise.reject(error.response)
        }
    }

    public async listAll(): Promise<UsuarioModel[]>{
        try{
            return (await this.axiosClient.get<UsuarioModel[]>("/listar")).data
        }catch(error:any){
            return Promise.reject(error.response);
        }
    }

    public async cadastrar(usuarioModel : UsuarioModel) : Promise<string>{
        try{
            return (await this.axiosClient.post('/', usuarioModel)).data
        }catch(error:any){
            return Promise.reject(error.response);
        }
    }


    public async editar(usuarioModel : UsuarioModel) : Promise<string>{
        try{
            return (await this.axiosClient.put(`/${usuarioModel.id}`, UsuarioModel)).data
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