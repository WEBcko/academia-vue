import axios, {AxiosInstance} from 'axios';
import { LoginRequest } from '@/models/LoginRequestModel';


class AuthClient {
    private axiosClient : AxiosInstance;

    constructor(){
        this.axiosClient = axios.create({
            baseURL:"http://localhost:8080/api",
            headers: {'Content-type' : 'application/json'}
        });
    }


    public async login(loginRequest : LoginRequest) : Promise<string>{
        try{
            return (await this.axiosClient.post<string>('/login', loginRequest)).data
        }catch(error : any){
            return Promise.reject(error.response);
        }
    }
}

export default new AuthClient();