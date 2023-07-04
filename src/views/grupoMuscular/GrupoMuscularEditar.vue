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
      <input type="text" :disabled="this.form === 'excluir' ? '' : disabled" class="form-control" v-model="grupoNome">
    </div>
  
    <div class="col d-flex align-items-center justify-content-center">
      <router-link class="col col-md-1" to="/grupo-muscular">
          <button type="button" class="btn btn-success">Voltar</button>
      </router-link>
        <button type="button" v-if="this.form === 'editar'" class="btn btn-warning mt-2 mb-2" @click="onClickEditar()"> Editar</button>
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
  
      //CADASTRAR
      //        
      async onClickEditar(){
        if(!this.grupoMuscular.nome){
          this.mensagem.titulo = "Erro, não foi possivel cadastrar o Grupo Muscular ";
          return;
        }

        this.grupoMuscular.nome = this.grupoNome;

        try{
          this.grupoMuscular.id = Number(this.$route.params.grupoMuscularId);
          await GrupoMuscularClient.editar(this.grupoMuscular.id,this.grupoMuscular);

          this.mensagem.mensagem = "sucess";
          this.mensagem.titulo = "Grupo Muscular editado com sucesso!";
          this.mensagem.css = "alert alert-success alert-dismissible fade show";
        } catch(error : any){
          this.mensagem.ativo = true;
            this.mensagem.mensagem = error;
            this.mensagem.titulo = "Erro, não foi possivel editar o Grupo Muscular ";
            this.mensagem.css = "alert alert-danger alert-dismissible fade show";
        }
        
      },
  
      // //EXCLUIR
      // //
      // onClickExcluir(){
      //   GrupoMuscularClient.deletar(this.grupoMuscular.id).then(sucess =>{
      //         this.grupoMuscular = new GrupoMuscularModel();
  
      //         this.mensagem.ativo = true;
      //         this.mensagem.mensagem = sucess;
      //         this.mensagem.titulo = "Grupo Muscular Excluido com sucesso!";
      //         this.mensagem.css = "alert alert-success alert-dismissible fade show";
  
      //     })
      //     .catch(error =>{
      //       console.log(error)
  
      //       this.mensagem.ativo = true;
      //       this.mensagem.mensagem = error;
      //       this.mensagem.titulo = "Erro, Não foi possivel excluir o Grupo Muscular";
      //       this.mensagem.css = "alert alert-danger alert-dismissible fade show";
      //     })
      // },
  
      //FIND BY ID
      //


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