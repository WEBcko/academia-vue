<template>
    <SideBar></SideBar>
    <NavBar></NavBar>
  
  <div class="container">
  
    <div class="row text-start align-items-center">
        <h2 class="col-md-7">Lista de Entradas e Saidas</h2>

        <div class="header col-md-2">
            <div class="search-container d-flex">
              <input type="text" class="search-input" placeholder="Procurar pelo Nome ..." v-model="searchQuery" />
              <i class="bi bi-search search-icon ms-3"></i>
            </div>
        </div>
        <router-link class="col-md-2 " to="/entradasaidaCadastrar">
            <button type="button" class="btn btn-success offset-md-4">Cadastrar</button>
        </router-link>  
    </div>

    

    <div class="border mt-4" style="border-radius: 20px;background-color: white;padding: 6px;">
    <table class="table">
    <thead>
      <tr >
        <th scope="col" class="p-2">ID</th>
        <th scope="col" class="p-2">Estado</th>
        <th scope="col" class="p-2 text-start">Entrada</th>
        <th scope="col" class="p-2 text-start">Cliente</th>
        <th scope="col" class="p-2 text-start">Personal</th>
        <th scope="col" class="p-2 text-start">Saida</th>
        <th scope="col colspan-2" class="p-2">Opção</th>
      </tr>
    </thead>
  
      <tbody class="table-group-divider">
  
        <tr v-for="item in roleFilter" :key="item.id" class="col-md-12">
          <th class="col-md-1">{{ item.id }}</th>
          <th class="col-md-1">
              <span v-if="item.ativo" class="badge bg-primary text-align-center col"> ATIVO</span> 
              <span v-if="!item.ativo" class="badge bg-danger text-align-center col"> INATIVO</span>
          </th>
          <th class="col-md-6 text-start">{{ item.horaEntrada }}</th>
          <th class="col-md-1"> {{ item.idCliente }}</th>
          <th class="col-md-1"> {{ item.idPersonal }}</th>
          <th class="col-md-1"> {{ item.horaSaida }}</th>
          <th class="col-md-2">
            <div class="btn-group" role="group">
              <RouterLink type="button" class="btn text-align-center col-md-2" 
                :to="{name: 'entrada-cadastrar-editar-view', query: {id: item.id, form: 'editar'}}">
                <span class="badge bg-warning btn text-align-center col">EDITAR</span>
              </RouterLink>
              <RouterLink type="button" class="btn text-align-center col-md-2" 
                :to="{name: 'entrada-cadastrar-excluir-view', query: {id: item.id, form: 'excluir'}}">
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

  import { EntradaSaidaClient } from '@/client/EntradaSaidaCLient';
  import { EntradaSaidaModel } from '@/models/EntradaSaidaModel';
  import { PageResponse } from '@/models/page-response';
  import { PageRequest } from '@/models/page-request';
  import NavBar from '@/components/NavBar.vue';
  import SideBar from '@/components/SideBar.vue';

  
  export default defineComponent({
    name: 'entradasaidaView',
    data() {
      return {

        entradas: [] as EntradaSaidaModel[],
        searchQuery: "",
      };
    },
    mounted(){
      this.fetchUser();
    },
    components: {
      NavBar,
      SideBar,
    },
    computed:{
      roleFilter(): EntradaSaidaModel[] {
      if (
        !this.searchQuery
      ) {
        console.log("DENTRO DO RETURN ROLE FILTRO");
        return this.entradas;
      } else {
        console.log("DENTRO DO ELSE");
        const lowerCaseQuery = this.searchQuery.toLowerCase();

        return this.entradas.filter((user: EntradaSaidaModel) => {
          const registerDate = new Date(user.dataCadastro);

          const matchesQuery =
            user.id.toString().trim().toLowerCase().includes(lowerCaseQuery) ||
            user.idCliente.nome.toLowerCase().includes(lowerCaseQuery);

          console.log("FIM DO ELSE");
          return matchesQuery;
        });
      }
    },

    availableRoles(): string[] {
        console.log("DENTRO DO AVELIABLE ROLES");
        const roles = Object.values(EntradaSaidaModel);
        return roles.map((core) => core.toUpperCase());
      },

    },
  
    methods:{
  
      async fetchUser() {
      try {
        console.log("COMEÇO DO FETCH");

        const pageRequest = new PageRequest();

        console.log("DEPOIS DO PAGEREQUEST");

        const entradaClient = new EntradaSaidaClient();
        const pageResponse: PageResponse<EntradaSaidaModel> = await entradaClient.findByFiltrosPaginado(pageRequest);
        this.entradas = pageResponse.content;
      } catch (error) {
        console.error(error);
        console.log("DENTRO DO ERRO FETCH");
      }
      console.log("FORA DO FERCH");
    },
    

    }
  });
  
  
  
  </script>
  