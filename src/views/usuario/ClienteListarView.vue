<template>

    <NavBar></NavBar>
  
  <div class="container">

    <div class="header d-flex align-content-start justify-content-between m-0">
      <p class="title-pages">Pesquisar Usuario</p>
      <div class="search-container">
        <input type="text" class="search-input" placeholder="Pesquisar por Nome ..."
          v-model="searchQuery" />
        <i class="bi bi-search search-icon"></i>
      </div>
    </div>

    <div class="filter-container d-flex align-items-center gap-2">
        <label for="carro-filter">Role</label>
        <select id="carro-filter" v-model="roleSelecionada" class="form-select">
          <option value="">All</option>
          <option v-for="roles in availableRoles" :value="roles">{{ roles }}</option>
        </select>
      </div>
  
    <div class="row text-start">
        <h2 class="col-md-10">Lista de Clientes</h2>
        <router-link class="col-md-2 " to="/Cliente-Cadastrar">
            <button type="button" class="btn btn-success offset-md-5">Cadastrar</button>
        </router-link>  
    </div>
  
    <div class="border" style="border-radius: 20px;background-color: white;padding: 6px;">
    <table class="table">
    <thead>
      <tr >
        <th scope="col" class="p-2">ID</th>
        <th scope="col" class="p-2">Estado</th>
        <th scope="col" class="p-2 text-start">Nome do Usuario</th>
        <th scope="col" class="p-2 text-start">Role</th>
        <th scope="col colspan-2" class="p-2">Opção</th>
      </tr>
    </thead>
  
      <tbody class="table-group-divider">
  
        <tr  v-for="item in usuarioClienteList" :key="item.id" class="col-md-12">
          <th class="col-md-1">{{ item.nome }}</th>
          <th class="col-md-1">{{ item.role }}</th>
          <th class="col-md-1">
              <span v-if="item.ativo" class="badge bg-primary text-align-center col"> ATIVO</span> 
              <span v-if="!item.ativo" class="badge bg-danger text-align-center col"> INATIVO</span>
          </th>
          <th class="col-md-1"> 
            
            <button type="button" class="btn"></button>

          </th>
          <th class="col-md-1"> </th>
          <th class="col-md-2">
            <div class="btn-group" role="group">
              <RouterLink type="button" class="btn text-align-center col-md-2" 
                :to="{name: 'usuario-cadastrar-editar-view', query: {id: item.id, form: 'editar'}}">
                <span class="badge bg-warning btn text-align-center col">EDITAR</span>
              </RouterLink>
              <RouterLink type="button" class="btn text-align-center col-md-2" 
                :to="{name: 'usuario-cadastrar-excluir-view', query: {id: item.id, form: 'excluir'}}">
                <span class="badge bg-danger btn text-align-center col">EXCLUIR</span>
              </RouterLink>
            </div>
          </th>
        </tr>
      </tbody>
    </table>
  </div>
  
  </div>
  </template>
  
  <style scoped>
  
  </style>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import NavBar from '@/components/NavBar.vue';
  import axios from "axios";
  import { UsuarioModel } from '@/models/UsuarioModel';
  import UsuarioClient from '@/client/UsuarioClient';
  import { UsuarioRole } from '@/models/UsuarioRoleModel'


  
  export default defineComponent({
    name: 'UsuarioClienteListaView',
    data() {
      return {
        usuarios: [] as  UsuarioModel[],

        usuarioClienteList: new Array<UsuarioModel>(),

        roleSelecionada: null as UsuarioRole | null,
        searchQuery: "",
      };
    },
    mounted(){
      this.findAll();
    },
    components: {
      NavBar,
    },

    computed:{
      usuarioFiltro(): UsuarioModel[]{
        if(
          !this.searchQuery &&
          !this.availableRoles
          ){
            console.log("RETURN IF");
          return this.usuarios;
        } else{
          console.log("ENTROU ELSE");
          const lowerCaseQuery = this.searchQuery.toLowerCase();
          return this.usuarios;
        }
      },


      availableRoles(): string[] {
        const roles = Object.values(UsuarioRole);
        return roles.map((role) => role.toUpperCase());
      },
      
    },
  
    methods:{
  
      findAll(){
        UsuarioClient.listAll().then(sucess =>{
              console.log("OI")
              this.usuarioClienteList =sucess
          })
          .catch(error =>{
            console.log(error)
          })
      },



      
    }
  
  });
  
  
  
  </script>
  