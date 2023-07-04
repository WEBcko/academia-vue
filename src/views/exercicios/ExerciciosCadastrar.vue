<template>

    <NavBar></NavBar>
  
  <div class="container col-md-8 corTabela"> 

    <div class="row align-items-center"> 
      <h1 class="col mt-2">Cadastrar Exercicio</h1>
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
      <label for="recipient-name" class=" row m-auto col-form-label">Nome do Exercicio:</label>
      <input type="text" :disabled="this.form === 'excluir' ? '' : disabled" class="form-control" v-model="exercicio.nome">
    </div>
    
    <div class="nome col">
      <label for="recipient-name" class=" row m-auto col-form-label">Grupo Muscular:</label>
      <select type="text" class="row ms-1" v-model="exercicio.idGrupoMuscular">
        <option v-for="item in grupoMuscular" :disabled="this.form === 'excluir' ? '' : disabled" class="form-control"
        :value="item">{{ item.nome }}</option>
      </select>
    </div>

    <div class="col d-flex align-items-center justify-content-center">
    <router-link class="col col-md-1" to="/exercicio">
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
  
  import { GrupoMuscularModel } from '@/models/GrupoMuscularModel';
  import GrupoMuscularClient from '@/client/GrupoMuscularClient';

  import { ExercicioModel } from '@/models/ExercicioModel';
  import ExercicioCLient from '@/client/ExercicioCLient';
  
  export default defineComponent({
    name: 'ExercicioCadastrar',
    data() {
      return {
        exercicio: new ExercicioModel(),
        grupoMuscular: new Array<GrupoMuscularModel>(),
        
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

    this.findAllGrupoMuscular();   
 },
 methods:{
    //FIND BY ID
    //
    findById(id: number){
        ExercicioCLient.findById(id).then(sucess =>{
        this.exercicio = sucess
          
    })
    .catch(error =>{
        console.log(error)

        this.mensagem.ativo = true;
        this.mensagem.mensagem = error;
        this.mensagem.titulo = "Erro, nao foi possivel buscar pelo ID ";
        this.mensagem.css = "alert alert-danger alert-dismissible fade show";
    })
    },

    findAllGrupoMuscular(){
      GrupoMuscularClient.listAll().then(sucess =>{
        this.grupoMuscular = sucess;
        console.log(sucess);
      })
      .catch(error =>{
          console.log(error)

        })
    },

    //CADASTRAR
    //
    async onClickCadastrar(){

          ExercicioCLient.cadastrar(this.exercicio).then(sucess =>{
          this.exercicio = new ExercicioModel();
          console.log(sucess);
          console.log(this.exercicio);
          

          this.mensagem.ativo = true;
          this.mensagem.mensagem = sucess;
          this.mensagem.titulo = "Exercicio cadastrado com sucesso ";
          this.mensagem.css = "alert alert-success alert-dismissible fade show";
        })
        
        .catch(error =>{
          console.log(error)
          console.log(this.exercicio);
          

          this.mensagem.ativo = true;
          this.mensagem.mensagem = error;
          this.mensagem.titulo = "Erro, não foi possivel Cadastrar o Exercicio ";
          this.mensagem.css = "alert alert-danger alert-dismissible fade show";
        })
          
    },

    onClickEditar(){
      console.log("Antes do metodo");
      ExercicioCLient.editar(this.exercicio.id, this.exercicio)
        .then(sucess => {
          console.log("Depois");
          this.exercicio = new ExercicioModel()
          console.log(sucess);

          this.mensagem.ativo = true;
          this.mensagem.mensagem = sucess;
          this.mensagem.titulo = "Exercicio Editado com sucesso!";
          this.mensagem.css = "alert alert-success alert-dismissible fade show";
         
        })
        .catch(error => {
          console.log(error)
          this.mensagem.ativo = true;
          this.mensagem.mensagem = error;
          this.mensagem.titulo = "Erro, não foi possivel editar o Exercicio ";
          this.mensagem.css = "alert alert-danger alert-dismissible fade show";
        });
    },

    //EXCLUIR
    //
    onClickExcluir(){
      ExercicioCLient.deletar(this.exercicio.id).then(sucess =>{
            this.exercicio = new ExercicioModel();

            this.mensagem.ativo = true;
            this.mensagem.mensagem = sucess;
            this.mensagem.titulo = "Exercicio Excluido com sucesso!";
            this.mensagem.css = "alert alert-success alert-dismissible fade show";

            //this.$router.push({name: 'marca-lista-view'})
        })
        .catch(error =>{
          console.log(error)

          this.mensagem.ativo = true;
          this.mensagem.mensagem = error;
          this.mensagem.titulo = "Erro, Não foi possivel excluir o Exercicio";
          this.mensagem.css = "alert alert-danger alert-dismissible fade show";
        })
    },

    

 }
  
  
  });
  
  </script>
  