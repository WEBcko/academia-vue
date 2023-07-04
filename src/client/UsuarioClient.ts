import { UsuarioModel } from '@/models/UsuarioModel';
// import { PageRequest } from "@/model/page-request";
// import { PageResponse } from "@/model/page-response";
import { PageRequest } from '@/models/page-request';
import { PageResponse } from '@/models/page-response';

import axios, {AxiosInstance} from 'axios';

class UsuarioClient{
    public token = localStorage.getItem('userToken');

    private axiosClient : AxiosInstance;

    constructor(){
        this.axiosClient = axios.create({
            baseURL:"http://localhost:8080/api/usuario",
            headers: {'Content-type' : 'application/json', 'Authorization' : `Bearer ${localStorage.getItem('userToken')}`},
        
            //axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
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
            return (await this.axiosClient.get<UsuarioModel[]>("/lista")).data
        }catch(error:any){
            return Promise.reject(error.response);
        }
    }

    public async cadastrar(usuarioModel : UsuarioModel) : Promise<string>{
        try{
            return (await this.axiosClient.post<string>('', usuarioModel)).data
        }catch(error:any){
            return Promise.reject(error.response);
        }
    }



    public async editar(id : number, usuarioModel : UsuarioModel) : Promise<string>{
        try{
            return (await this.axiosClient.put<string>(`/${id}`, usuarioModel)).data
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

    public async findByFiltrosPaginado(pageRequest: PageRequest): Promise<PageResponse<UsuarioModel>> {
		try {

			return (await this.axiosClient.get<PageResponse<UsuarioModel>>(`/role`)).data
		} catch (error:any) { 
			return Promise.reject(error.response) 
		}
	}
}

export default new UsuarioClient();