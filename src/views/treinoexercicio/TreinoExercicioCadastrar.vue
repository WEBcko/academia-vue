<template>

    <NavBar></NavBar>
  
  <div class="container col-md-8 corTabela"> 

    <div class="row align-items-center"> 
      <h1 class="col mt-2">Cadastrar Treino-Exercicio</h1>
    </div>

    <div v-if="mensagem.ativo" class="row">
      <div class="col-md-12 text-start">
        <div :class="mensagem.css" role="alert">
          <strong>{{ mensagem.titulo }}</strong> {{ mensagem.mensagem }}
          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
      </div>
    </div>
    
    <div class="nome col">
      <label for="recipient-name" class=" row m-auto col-form-label">Treino:</label>
      <select type="text" class="row ms-1" v-model="treinoExercicio.idTreino">
        <option v-for="item in treino" :disabled="this.form === 'excluir' ? '' : disabled" class="form-control"
        :value="item.id">{{ item.codigoOrdem }}</option>
      </select>
    </div>

    <div class="nome col">
      <label for="recipient-name" class=" row m-auto col-form-label">Exercicio:</label>
      <select type="text" class="row ms-1" v-model="treinoExercicio.idExercicio">
        <option v-for="item in exercicio" :disabled="this.form === 'excluir' ? '' : disabled" class="form-control"
        :value="item.id">{{ item.nome }}</option>
      </select>
    </div>

    <div class="nome col">
      <label for="recipient-name" class=" row m-auto col-form-label">dificuldade:</label>
      <input type="text" :disabled="this.form === 'excluir' ? '' : disabled" class="form-control" v-model="treinoExercicio.dificuldade">
    </div>

    <div class="nome col">
      <label for="recipient-name" class=" row m-auto col-form-label">peso:</label>
      <input type="text" :disabled="this.form === 'excluir' ? '' : disabled" class="form-control" v-model="treinoExercicio.peso">
    </div>

    <div class="nome col">
      <label for="recipient-name" class=" row m-auto col-form-label">series:</label>
      <input type="text" :disabled="this.form === 'excluir' ? '' : disabled" class="form-control" v-model="treinoExercicio.series">
    </div>

    <div class="col d-flex align-items-center justify-content-center">
    <router-link class="col col-md-1" to="/treinoexercicio">
        <button type="button" class="btn btn-success">Voltar</button>
    </router-link>

    <button type="button" v-if="this.form === undefined" class="btn btn-success mt-2 mb-2" @click="onClickCadastrar()"> Cadastrar</button>
    <button type="button" v-if="this.form === 'editar'" class="btn btn-warning mt-2 mb-2" @click="onClickEditar()"> Editar</button>
    <button type="button" v-if="this.form === 'excluir'" class="btn btn-danger mt-2 mb-2" @click="onClickExcluir()"> Excluir</button>
  </div>


  </div>
  
  </template>
  
  
  <style scoped>
  
  .corTabela{
    background-color: #ffffff;
    border-radius: 10px;
  }
  
  </style>
  
  
  <script lang="ts">
  
  import { defineComponent } from 'vue';
  import NavBar from '@/components/NavBar.vue'; // @ is an alias to /src

  import { ExercicioModel } from '@/models/ExercicioModel';
  import ExercicioCLient from '@/client/ExercicioCLient';

  import { TreinoModel } from '@/models/TreinoModel';
  import TreinoClient from '@/client/TreinoClient';

  import { TreinoExercicioModel } from '@/models/TreinoExercicio';
  import TreinoExercicioClient from '@/client/TreinoExercicioClient';
  
  export default defineComponent({
    name: 'ModeloCadastrar',
    data() {
      return {
        treinoExercicio: new TreinoExercicioModel(),
        exercicio: new Array<ExercicioModel>(),
        treino: new Array<TreinoModel>(),
        
        mensagem: {
        ativo: false as boolean,
        titulo: "" as string,
        mensagem: "" as string,
        css: "" as string
      }
      };
    },
    components: {
      NavBar,
    },
    computed: {
    id(){
      return this.$route.query.id
    },
    form(){
      return this.$route.query.form
    }
  },
  mounted() {
    
    if(this.id !== undefined){
     this.findById(Number(this.id));
    }

    this.findAllTreino();
    this.findAllExercicio();     
 },
 methods:{
    //FIND BY ID
    //
    findById(id: number){
        TreinoExercicioClient.findById(id).then(sucess =>{
        this.treinoExercicio = sucess
          
    })
    .catch(error =>{
        console.log(error)

        this.mensagem.ativo = true;
        this.mensagem.mensagem = error;
        this.mensagem.titulo = "Erro, nao foi possivel buscar pelo ID ";
        this.mensagem.css = "alert alert-danger alert-dismissible fade show";
    })
    },

    findAllTreino(){
      TreinoClient.listAll().then(sucess =>{
        this.treino = sucess;
        console.log(sucess);
      })
      .catch(error =>{
          console.log(error)

        })

    },

    findAllExercicio(){
      ExercicioCLient.listAll().then(sucess =>{
        this.exercicio = sucess;
        console.log(sucess);
      })
      .catch(error =>{
          console.log(error)

        })

    },

    //CADASTRAR
    //
    async onClickCadastrar(){
      try{
        const response = await TreinoExercicioClient.cadastrar(this.treinoExercicio);
        const data = response;

          this.mensagem.ativo = true;
          this.mensagem.mensagem = "sucess";
          this.mensagem.titulo = "Treino-Exercicio cadastrado com sucesso ";
          this.mensagem.css = "alert alert-success alert-dismissible fade show";
      
        }
        catch(error : any){
          console.log(error)
          console.log(typeof(this.treinoExercicio.idExercicio.id));
          console.log(typeof(this.treinoExercicio.idTreino.id));

          this.mensagem.ativo = true;
          this.mensagem.mensagem = error;
          this.mensagem.titulo = "Erro, não foi possivel Cadastrar o Exercicio ";
          this.mensagem.css = "alert alert-danger alert-dismissible fade show";
        }
    },

    onClickEditar(){
      console.log("Antes do metodo");
      TreinoExercicioClient.editar(this.treinoExercicio.id, this.treinoExercicio)
        .then(sucess => {
          console.log("Depois");
          this.treinoExercicio = new TreinoExercicioModel()
          console.log(sucess);

          this.mensagem.ativo = true;
          this.mensagem.mensagem = sucess;
          this.mensagem.titulo = "Treino-Exercicio Editado com sucesso!";
          this.mensagem.css = "alert alert-success alert-dismissible fade show";
         
        })
        .catch(error => {
          console.log(error)
          this.mensagem.ativo = true;
          this.mensagem.mensagem = error;
          this.mensagem.titulo = "Erro, não foi possivel editar o Treino-Exercicio ";
          this.mensagem.css = "alert alert-danger alert-dismissible fade show";
        });
    },

    //EXCLUIR
    //
    onClickExcluir(){
      TreinoExercicioClient.deletar(this.treinoExercicio.id).then(sucess =>{
            this.treinoExercicio = new TreinoExercicioModel();

            this.mensagem.ativo = true;
            this.mensagem.mensagem = sucess;
            this.mensagem.titulo = "Treino-Exercicio Excluido com sucesso!";
            this.mensagem.css = "alert alert-success alert-dismissible fade show";

            //this.$router.push({name: 'marca-lista-view'})
        })
        .catch(error =>{
          console.log(error)

          this.mensagem.ativo = true;
          this.mensagem.mensagem = error;
          this.mensagem.titulo = "Erro, Não foi possivel excluir o Treino-Exercicio";
          this.mensagem.css = "alert alert-danger alert-dismissible fade show";
        })
    },

 }
  
  
  });
  
  </script>
  