import { UsuarioRequest } from './../models/UsuarioRequestModel';
import axios, {AxiosInstance} from 'axios';

class CadastrarClient{
    private axiosClient : AxiosInstance;

    constructor(){
        this.axiosClient = axios.create({
            baseURL:"http://localhost:8080/api/usuario",
            headers: {'Content-type' : 'application/json'}
        });
    }

    public async cadastrar(usuarioRequest : UsuarioRequest) : Promise<string>{
        try{
            return (await this.axiosClient.post<string>(``,usuarioRequest)).data
        }catch(error : any){
            return Promise.reject(error.response)
        }
    }
}

export default new CadastrarClient();