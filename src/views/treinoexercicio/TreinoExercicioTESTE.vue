<template>
    <NavBar></NavBar>
    <SideBar></SideBar>
  
    <div class="container">
  
      <div class="row text-start">
        <h2 class="col-md-10">Lista de Treino-Exercicio</h2>
        <router-link class="col-md-2 " to="/treinoexercicio-cadastrar">
          <button type="button" class="btn btn-success offset-md-5">Cadastrar</button>
        </router-link>
      </div>
  
      <!-- Header -->
      <div class="header d-flex align-content-start justify-content-between m-0">
        <p class="title-pages">Pesquisar</p>
        <div class="search-container">
          <input type="text" class="search-input" placeholder="Search By License Plate or names ..."
            v-model="searchQuery" />
          <i class="bi bi-search search-icon"></i>
        </div>
      </div>
  
      <div class="border" style="border-radius: 20px;background-color: white;padding: 6px;">
        <table class="table">
          <thead>
            <tr>
              <th scope="col" class="p-2">ID</th>
              <th scope="col" class="p-2">Estado</th>
              <th scope="col" class="p-2 text-start">Treino</th>
              <th scope="col" class="p-2 text-start">Cliente</th>
              <th scope="col" class="p-2 text-start">Exercicio</th>
              <th scope="col" class="p-2 text-start">Dificuldade</th>
              <th scope="col" class="p-2 text-start">Peso</th>
              <th scope="col" class="p-2 text-start">Serie</th>
              <th scope="col colspan-2" class="p-2">Opção</th>
            </tr>
          </thead>
  
          <tbody class="table-group-divider">
  
            <tr v-for="item in treinoFilter" :key="item.idTreino.id" class="col-md-12">
              <th class="col-md-1">{{ item.id }}</th>
              <th class="col-md-1">
                <span v-if="item.ativo" class="badge bg-primary text-align-center col"> ATIVO</span>
                <span v-if="!item.ativo" class="badge bg-danger text-align-center col"> INATIVO</span>
              </th>
              <th class="col-md-6 text-start">{{ item.idTreino.codigoOrdem }}</th>
              <th class="col-md-1"> {{ item.idTreino.idUsuario.nome }}</th>
              <th class="col-md-1"> {{ item.idExercicio.nome }}</th>
              <th class="col-md-1"> {{ item.dificuldade }}</th>
              <th class="col-md-1"> {{ item.peso }}</th>
              <th class="col-md-1"> {{ item.series }}</th>
              <th class="col-md-2">
                <div class="btn-group" role="group">
                  <RouterLink type="button" class="btn text-align-center col-md-2"
                    :to="{ name: 'treino-exercicio-cadastrar-editar-view', query: { id: item.id, form: 'editar' } }">
                    <span class="badge bg-warning btn text-align-center col">EDITAR</span>
                  </RouterLink>
                  <RouterLink type="button" class="btn text-align-center col-md-2"
                    :to="{ name: 'treino-exercicio-cadastrar-excluir-view', query: { id: item.id, form: 'excluir' } }">
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
    
  <style scoped></style>
    
  <script lang="ts">
  import { defineComponent } from 'vue';
  import NavBar from '@/components/NavBar.vue';
  import { TreinoExercicioModel } from '@/models/TreinoExercicio';
  import { TreinoExercicioClient } from '@/client/TreinoExercicioClient';
  import { PageResponse } from '@/models/page-response';
  import { PageRequest } from '@/models/page-request'
  import SideBar from '@/components/SideBar.vue';
  import { TreinoModel } from '@/models/TreinoModel';
  
  
  
  export default defineComponent({
    name: 'TreinoExercicioView',
    data() {
      return {
  
        // treinoExercicioList: new Array<TreinoExercicioModel>(),
        treinoExer: [] as TreinoExercicioModel[],
        treinoModal: [] as TreinoModel[],
        searchQuery: "",
        
              
      };
    },
    mounted() {
      this.fetchUser();
  
    },
    components: {
      NavBar,
      SideBar
    },
  
    computed:{

      id(){
          return this.$route.query.id
        },

      treinoFilter(): TreinoExercicioModel[]{
        if(
          !this.searchQuery
        ){
          console.log("treinoExercicio DEntro do IF");
          return this.treinoExer.filter((ids: TreinoExercicioModel) =>{

            const matchesQuerya = this.id
              console.log("FIM DO ELSE");
                return matchesQuerya;  
          }); 
        } else{
          console.log("DENTRO DO ELSE");
          const lowerCaseQuery = this.searchQuery.toLowerCase();
          
          return this.treinoExer.filter((user: TreinoExercicioModel) => {
              const registerDate = new Date(user.dataCadastro);
  
              const matchesQuery = this.id
              console.log("FIM DO ELSE");
                return matchesQuery;  
            });
  
        }
  
      },
  
      availableRoles(): string[] {
          console.log("DENTRO DO AVELIABLE ROLES");
          const roles = Object.values(TreinoExercicioModel);
          return roles.map((core) => core.toUpperCase());
        },
  
    },
  
    methods: {

  
      async fetchUser() {
        try {
          console.log("COMEÇO DO FETCH");
  
          const pageRequest = new PageRequest();
  
          console.log("DEPOIS DO PAGEREQUEST");
  
          const exerTreinoClient = new TreinoExercicioClient();
          const pageResponse: PageResponse<TreinoExercicioModel> = await exerTreinoClient.findByFiltrosPaginado(pageRequest);
          this.treinoExer = pageResponse.content;
        } catch (error) {
          console.error(error);
          console.log("DENTRO DO ERRO FETCH");
        }
        console.log("FORA DO FERCH");
      },
  
      // findAll() {
      //   TreinoExercicioClient.listAll().then(sucess => {
      //     console.log("OI")
      //     this.treinoExercicioList = sucess
      //   })
      //     .catch(error => {
      //       console.log(error)
      //     })
      // }
    }
  
  });
  
  
  
  </script>
    