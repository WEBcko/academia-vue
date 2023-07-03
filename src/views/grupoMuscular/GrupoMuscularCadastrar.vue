<template>

    <NavBar></NavBar>
  
  <div class="container col-md-8 corTabela"> 
  
    <div class="row align-items-center"> 
        <h1 class="col mt-2">Cadastrar Grupo Muscular</h1>
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
      <label for="recipient-name" class=" row m-auto col-form-label">Nome do Grupo Muscular:</label>
      <input type="text" :disabled="this.form === 'excluir' ? '' : disabled" class="form-control" v-model="grupoMuscular.nome" v-if="this.form === undefined">
      <input type="text" :disabled="this.form === 'excluir' ? '' : disabled" class="form-control" v-model="grupoMuscular.nome" v-if="this.form === 'editar'">

    </div>
  
    <div class="col d-flex align-items-center justify-content-center">
      <router-link class="col col-md-1" to="/grupo-muscular">
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
  import  GrupoMuscularClient  from '@/client/GrupoMuscularClient';

  export default defineComponent({
    name: 'GrupoMuscularCadastrar',
    data() {
      return {
        grupoMuscular: new GrupoMuscularModel(),
        grupoNome: "",
        mensagem: {
          ativo: false as boolean,
          titulo: "" as string,
          mensagem: "" as string,
          css: "" as string
        }
      };
    },
    computed: {
      id(){
        return this.$route.query.id
      },
      form(){
        return this.$route.query.form
      },
      // grupo(){
      //   return new GrupoMuscularClient();
      // }

    },
    mounted() {
      
       if(this.id !== undefined){
        this.findById(Number(this.id));
       }   
    },
    components: {
      NavBar,
    },
    methods:{
      async onClickCadastrar(){
        try{
          const response = await GrupoMuscularClient.cadastrar(this.grupoMuscular);
          const data = response;

          this.mensagem.ativo = true;
            this.mensagem.mensagem = "sucess";
            this.mensagem.titulo = "Grupo Muscular Cadastrado com sucesso!";
            this.mensagem.css = "alert alert-success alert-dismissible fade show";
        } 
        catch (error: any) {
          console.log(error)
            this.mensagem.ativo = true;
            this.mensagem.mensagem = error;
            this.mensagem.titulo = "Erro, não foi possivel cadastrar o Grupo Muscular ";
            this.mensagem.css = "alert alert-danger alert-dismissible fade show";
        }
      },
  
         
      async onClickEditar(){
      console.log("Antes do metodo");
      
      GrupoMuscularClient.editar(this.grupoMuscular.id, this.grupoMuscular)
        .then(sucess => {
          console.log("Depois");
          this.grupoMuscular = new GrupoMuscularModel()
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

      findById(id: number){
          GrupoMuscularClient.findById(id).then(sucess =>{
          this.grupoMuscular = sucess
            
      })
      .catch(error =>{
          console.log(error)
  
          this.mensagem.ativo = true;
          this.mensagem.mensagem = error;
          this.mensagem.titulo = "Erro, nao foi possivel buscar pelo ID ";
          this.mensagem.css = "alert alert-danger alert-dismissible fade show";
      })
  
      },
    }
  
  });
  
  </script>