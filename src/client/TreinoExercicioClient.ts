import { TreinoExercicioModel } from '@/models/TreinoExercicio';
import axios, {AxiosInstance} from 'axios';
import { PageRequest } from '@/models/page-request';
import { PageResponse } from '@/models/page-response';

export class TreinoExercicioClient{

    private axiosClient : AxiosInstance;

    constructor(){
        this.axiosClient = axios.create({
            baseURL:"http://localhost:8080/api/treinoexercicios",
            headers: {'Content-type' : 'application/json'}
        });
    }


    public async findById(id : number) : Promise<TreinoExercicioModel>{
        try{
            return (await this.axiosClient.get<TreinoExercicioModel>(`/${id}`)).data
        }catch(error:any){
            return Promise.reject(error.response)
        }
    }

    public async listAll(): Promise<TreinoExercicioModel[]>{
        try{
            return (await this.axiosClient.get<TreinoExercicioModel[]>("/lista")).data
        }catch(error:any){
            return Promise.reject(error.response);
        }
    }

    public async cadastrar(treinoExercicioModel : TreinoExercicioModel) : Promise<string>{
        try{
            return (await this.axiosClient.post('', treinoExercicioModel)).data
        }catch(error:any){
            return Promise.reject(error.response);
        }
    }


    public async editar(id: number, treinoExercicioModel : TreinoExercicioModel) : Promise<string>{
        try{
            return (await this.axiosClient.put<string>(`/${id}`, treinoExercicioModel)).data
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

    public async findByFiltrosPaginado(pageRequest: PageRequest): Promise<PageResponse<TreinoExercicioModel>> {
		try {

			return (await this.axiosClient.get<PageResponse<TreinoExercicioModel>>(`/role`)).data
		} catch (error:any) { 
			return Promise.reject(error.response) 
		}
	}


}

export default new TreinoExercicioClient()