import { ExercicioModel } from '@/models/ExercicioModel';
import axios, {AxiosInstance} from 'axios';

 class ExercicioClient{

    private axiosClient : AxiosInstance;

    constructor(){
        this.axiosClient = axios.create({
            baseURL:"http://localhost:8080/api/exercicio",
            headers: {'Content-type' : 'application/json'}
        });
    }

    public async findById(id : number) : Promise<ExercicioModel>{
        try{
            return (await this.axiosClient.get<ExercicioModel>(`/${id}`)).data
        }catch(error:any){
            return Promise.reject(error.response)
        }
    }

    public async listAll(): Promise<ExercicioModel[]>{
        try{
            return (await this.axiosClient.get<ExercicioModel[]>("/listar")).data
        }catch(error:any){
            return Promise.reject(error.response);
        }
    }

    public async cadastrar(exercicioModel : ExercicioModel) : Promise<string>{
        try{
            return (await this.axiosClient.post('/', exercicioModel)).data
        }catch(error:any){
            return Promise.reject(error.response);
        }
    }


    public async editar(id: number, exercicioModel : ExercicioModel) : Promise<string>{
        try{
            return (await this.axiosClient.put(`/${exercicioModel.id}`, exercicioModel)).data
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

export default new ExercicioClient()