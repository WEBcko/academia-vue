import axios, {AxiosInstance} from 'axios';
import { UsuarioModel } from '@/models/UsuarioModel';

class LoginClient{
    private axiosClient : AxiosInstance;

    constructor(){
        this.axiosClient = axios.create({
            baseURL:"http://localhost:8080/api/login",
            headers: {'Content-type' : 'application/json'}
        });
    }

    public async cadastrar(usuarioModel : UsuarioModel) : Promise<string>{
        try{
            return (await this.axiosClient.post<string>('', usuarioModel)).data
        }catch(error:any){
            return Promise.reject(error.response);
        }
    }

}

export default new LoginClient()