<template>

    <NavBar></NavBar>
    <SideBar></SideBar>
  
  <div class="container col-md-8 corTabela"> 

    <div class="row align-items-center"> 
      <h1 class="col mt-2">Cadastrar Entrada e Saida</h1>
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
      <label for="recipient-name" class=" row m-auto col-form-label">Entrada:</label>
      <input type="text" :disabled="this.form === 'excluir' ? '' : disabled" class="form-control" v-model="entrada.horaEntrada">
    </div>

    <div class="nome col">
      <label for="recipient-name" class=" row m-auto col-form-label">Saida:</label>
      <input type="text" :disabled="this.form === 'excluir' ? '' : disabled" class="form-control" v-model="entrada.horaSaida">
    </div>
    
    <div class="nome col">
      <label for="recipient-name" class=" row m-auto col-form-label">Cliente:</label>
      <select type="text" class="row ms-1" v-model="entrada.idCliente">
        <option v-for="item in usuario" :disabled="this.form === 'excluir' ? '' : disabled" class="form-control"
        :value="item.role === 'CLIENTE'">{{ item.nome }}</option>
      </select>
    </div>

    <div class="nome col">
      <label for="recipient-name" class=" row m-auto col-form-label">Cliente:</label>
      <select type="text" class="row ms-1" v-model="entrada.idPersonal">
        <option v-for="item in usuario" :disabled="this.form === 'excluir' ? '' : disabled" class="form-control"
        :value="item.role === 'PERSONAL'">{{ item.nome }}</option>
      </select>
    </div>

    <div class="col d-flex align-items-center justify-content-center">
    <router-link class="col col-md-1" to="/entradasaida">
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
  import SideBar from '@/components/SideBar.vue';
  
  import { UsuarioModel } from '@/models/UsuarioModel';
  import  UsuarioClient  from '@/client/UsuarioClient';

  import { EntradaSaidaModel } from '@/models/EntradaSaidaModel';
  import EntradaSaidaCLient from '@/client/EntradaSaidaCLient';
  
  export default defineComponent({
    name: 'entradasaidaCadastrar',
    data() {
      return {

        entrada: new EntradaSaidaModel(),
        usuario: new Array<UsuarioModel>(),
        
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
      SideBar
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

    this.findAllUsuario();   
 },
 methods:{
    //FIND BY ID
    //
    findById(id: number){
        EntradaSaidaCLient.findById(id).then(sucess =>{
        this.entrada = sucess
          
    })
    .catch(error =>{
        console.log(error)

        this.mensagem.ativo = true;
        this.mensagem.mensagem = error;
        this.mensagem.titulo = "Erro, nao foi possivel buscar pelo ID ";
        this.mensagem.css = "alert alert-danger alert-dismissible fade show";
    })
    },

    findAllUsuario(){
      UsuarioClient.listAll().then(sucess =>{
        this.usuario = sucess;
        console.log(sucess);
      })
      .catch(error =>{
          console.log(error)

        })
    },

    //CADASTRAR
    //
    async onClickCadastrar(){

          EntradaSaidaCLient.cadastrar(this.entrada).then(sucess =>{
          this.entrada = new EntradaSaidaModel();
          console.log(sucess);
          console.log(this.entrada);
          

          this.mensagem.ativo = true;
          this.mensagem.mensagem = sucess;
          this.mensagem.titulo = "entrada cadastrado com sucesso ";
          this.mensagem.css = "alert alert-success alert-dismissible fade show";
        })
        
        .catch(error =>{
          console.log(error)
          console.log(this.entrada);
          

          this.mensagem.ativo = true;
          this.mensagem.mensagem = error;
          this.mensagem.titulo = "Erro, não foi possivel Cadastrar o entrada ";
          this.mensagem.css = "alert alert-danger alert-dismissible fade show";
        })
          
    },

    onClickEditar(){
      console.log("Antes do metodo");
      EntradaSaidaCLient.editar(this.entrada.id, this.entrada)
        .then(sucess => {
          console.log("Depois");
          this.entrada = new EntradaSaidaModel()
          console.log(sucess);

          this.mensagem.ativo = true;
          this.mensagem.mensagem = sucess;
          this.mensagem.titulo = "Entrada Editado com sucesso!";
          this.mensagem.css = "alert alert-success alert-dismissible fade show";
         
        })
        .catch(error => {
          console.log(error)
          this.mensagem.ativo = true;
          this.mensagem.mensagem = error;
          this.mensagem.titulo = "Erro, não foi possivel editar o Entrada ";
          this.mensagem.css = "alert alert-danger alert-dismissible fade show";
        });
    },

    //EXCLUIR
    //
    onClickExcluir(){
      EntradaSaidaCLient.deletar(this.entrada.id).then(sucess =>{
            this.entrada = new EntradaSaidaModel();

            this.mensagem.ativo = true;
            this.mensagem.mensagem = sucess;
            this.mensagem.titulo = "Entrada Excluido com sucesso!";
            this.mensagem.css = "alert alert-success alert-dismissible fade show";

            //this.$router.push({name: 'marca-lista-view'})
        })
        .catch(error =>{
          console.log(error)

          this.mensagem.ativo = true;
          this.mensagem.mensagem = error;
          this.mensagem.titulo = "Erro, Não foi possivel excluir o Entrada";
          this.mensagem.css = "alert alert-danger alert-dismissible fade show";
        })
    },

    

 }
  
  
  });
  
  </script>
  