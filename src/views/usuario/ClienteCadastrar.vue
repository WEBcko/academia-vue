<template>

    <NavBar></NavBar>
  
  <div class="container col-md-8 corTabela"> 

    <div class="row align-items-center"> 
      <h1 class="col mt-2">Cadastrar Usuario</h1>
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
      <label for="recipient-name" class=" row m-auto col-form-label">Nome do Usuario:</label>
      <input type="text" :disabled="this.form === 'excluir' ? '' : disabled" class="form-control" v-model="usuario.nome">
    </div>

    <div class="nome col">
      <label for="recipient-name" class=" row m-auto col-form-label">CPF:</label>
      <input type="text" :disabled="this.form === 'excluir' ? '' : disabled" class="form-control" v-model="usuario.cpf">
    </div>

    <div class="nome col">
      <label for="recipient-name" class=" row m-auto col-form-label">NUMERO:</label>
      <input type="text" :disabled="this.form === 'excluir' ? '' : disabled" class="form-control" v-model="usuario.telefone">
    </div>

    <div class="nome col">
      <label for="recipient-name" class=" row m-auto col-form-label">email:</label>
      <input type="text" :disabled="this.form === 'excluir' ? '' : disabled" class="form-control" v-model="usuario.email">
    </div>

    <div class="nome col">
      <label for="recipient-name" class=" row m-auto col-form-label">senha:</label>
      <input type="text" :disabled="this.form === 'excluir' ? '' : disabled" class="form-control" v-model="usuario.senha">
    </div>
    
    <div class="nome col">
      <label for="recipient-name" class=" row m-auto col-form-label">Role:</label>
      <select type="text" class="row ms-1" v-model="usuario.role">
        <option v-for="item in availableRoles" :disabled="this.form === 'excluir' ? '' : disabled" class="form-control"
        :value="item">{{ item }}</option>
      </select>
    </div>

    <div class="col d-flex align-items-center justify-content-center">
    <router-link class="col col-md-1" to="/usuario">
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

  import  UsuarioClient  from '@/client/UsuarioClient';
  import { UsuarioModel } from '@/models/UsuarioModel';
  import { UsuarioRole } from '@/models/UsuarioRoleModel';

  
  export default defineComponent({
    name: 'UsuarioCadastrar',
    data() {
      return {

        usuario: new UsuarioModel(),
        selectedRole: null as UsuarioRole | null,

        // usuarioRole: new 
                
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
    },

    availableRoles(): string[] {
      console.log("DENTRO DO AVELIABLE ROLES");
      const roles = Object.values(UsuarioRole);
      return roles.map((core) => core.toUpperCase());
    },
  },
  mounted() {
    
    if(this.id !== undefined){
     this.findById(Number(this.id));
    }
 
 },

 methods:{
    //FIND BY ID
    //
    findById(id: number){
        UsuarioClient.findById(id).then(sucess =>{
        this.usuario = sucess
          
    })
    .catch(error =>{
        console.log(error)

        this.mensagem.ativo = true;
        this.mensagem.mensagem = error;
        this.mensagem.titulo = "Erro, nao foi possivel buscar pelo ID ";
        this.mensagem.css = "alert alert-danger alert-dismissible fade show";
    })
    },

    //CADASTRAR
    //
    onClickCadastrar(){
      UsuarioClient.cadastrar(this.usuario).then(sucess =>{
            this.usuario = new UsuarioModel();
            console.log("TA VINDOO");
            console.log(sucess);

          this.mensagem.ativo = true;
          this.mensagem.mensagem = sucess;
          this.mensagem.titulo = "Usuario cadastrado com sucesso ";
          this.mensagem.css = "alert alert-success alert-dismissible fade show";
      
        })
        .catch(error =>{
          console.log(error)

          this.mensagem.ativo = true;
          this.mensagem.mensagem = error;
          this.mensagem.titulo = "Erro, não foi possivel Cadastrar o Usuario ";
          this.mensagem.css = "alert alert-danger alert-dismissible fade show";
        })
    },

    onClickEditar(){
      console.log("Antes do metodo");
      UsuarioClient.editar(this.usuario.id, this.usuario)
        .then(sucess => {
          console.log("Depois");
          this.usuario = new UsuarioModel()
          console.log(sucess);

          this.mensagem.ativo = true;
          this.mensagem.mensagem = sucess;
          this.mensagem.titulo = "Usuario Editado com sucesso!";
          this.mensagem.css = "alert alert-success alert-dismissible fade show";
         
        })
        .catch(error => {
          console.log(error)
          this.mensagem.ativo = true;
          this.mensagem.mensagem = error;
          this.mensagem.titulo = "Erro, não foi possivel editar o Usuario ";
          this.mensagem.css = "alert alert-danger alert-dismissible fade show";
        });
    },

    //EXCLUIR
    //
    onClickExcluir(){

    },

 }
  
  
  });
  
  </script>
  