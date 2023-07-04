<template>

    <div class="access-content d-flex flex-column align-items-start justify-content-start">
      <!-- Header -->
        <div class="header d-flex align-content-start justify-content-between m-0">
                <p class="title-pages">Access : Vehicles</p>
                <div class="search-container">
                <input type="text" class="search-input" placeholder="Search By License Plate or names ..."
                    v-model="searchQuery" />
                <i class="bi bi-search search-icon"></i>
                </div>
        </div>
  
      <!-- Filters -->  
        <div class="filter-container d-flex align-items-center gap-2">
          <label for="user-filter">Role</label>
          <select id="user-filter" v-model="selectedRole" class="form-select">
            <option value="">All</option>
            <option v-for="roles in availableRoles" :value="roles">{{ roles }}</option>
          </select>
        </div>
        <router-link to="/register-vehicle" class="router"><i class="bi bi-plus-square"></i></router-link>
      </div>
  
      <!-- Vehicle List -->
      <table class="table table-sm table-bordered w-100">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Ativo</th>
            <th scope="col">Nome</th>
            <th scope="col">Role</th>
            <th scope="col">Opcao</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="role in roleFilter" :key="role.id">
            <td>{{ role.id }}</td>
            <td>{{ role.ativo }}</td>
            <td>{{ role.nome }}</td>
            <td>{{ role.role }}</td>
            <td>
                <span>a</span>
                <!-- <div class="btn-group" role="group">
                    <RouterLink type="button" class="btn text-align-center col-md-2" 
                        :to="{name: 'usuario-cadastrar-editar-view', query: {id: role.id, form: 'editar'}}">
                        <span class="badge bg-warning btn text-align-center col">EDITAR</span>
                    </RouterLink>
                    <RouterLink type="button" class="btn text-align-center col-md-2" 
                        :to="{name: 'usuario-cadastrar-excluir-view', query: {id: role.id, form: 'excluir'}}">
                        <span class="badge bg-danger btn text-align-center col">EXCLUIR</span>
                    </RouterLink>
                </div> -->
            </td>
          </tr>
        </tbody>
      </table>
  
  </template>
  
  <script lang="ts">
  import { computed, defineComponent } from "vue";
  import axios from "axios";
  import NavBar from '@/components/NavBar.vue';
  import { UsuarioModel } from '@/models/UsuarioModel';
  import  UsuarioClient  from '@/client/UsuarioClient';
  import { UsuarioRole } from '@/models/UsuarioRoleModel';
  import { PageResponse } from '@/models/page-response';
  import { PageRequest } from '@/models/page-request'


  export default defineComponent({

    name: "teste-vue",
    data() {
      return {

        testeRole: [] as UsuarioModel[],
        searchQuery: "",
        selectedRole: null as UsuarioRole | null,

      };
    },
    computed: {
      roleFilter(): UsuarioModel[] {
        if (
          !this.searchQuery &&
          !this.selectedRole
        ) {
            console.log("DENTRO DO RETURN ROLE FILTRO");
          return this.testeRole;
        } else {
            console.log("DENTRO DO ELSE");
          const lowerCaseQuery = this.searchQuery.toLowerCase();


          return this.testeRole.filter((user: UsuarioModel) => {
            const registerDate = new Date(user.dataCadastro);

            const matchesQuery =
              user.id.toString().trim().toLowerCase().includes(lowerCaseQuery) ||
              user.nome.toLowerCase().includes(lowerCaseQuery);
  
            const matchesRole = !this.selectedRole || user.role === this.selectedRole;
  
            // if (this.selectedYear && this.selectedMonth) {
            //   return (
            //     matchesQuery &&
            //     registerYear === this.selectedYear &&
            //     registerMonth === this.selectedMonth &&
            //     matchesTipo &&
            //     matchesCarro
            //   );
            console.log("FIM DO ELSE");
              return matchesQuery && matchesRole;
          });
        }
      },
    
      availableRoles(): string[] {
        console.log("DENTRO DO AVELIABLE ROLES");
        const roles = Object.values(UsuarioRole);
        return roles.map((core) => core.toUpperCase());
      },
    },
  
    mounted() {
      this.fetchUser();
    },
  
    methods: {
      // Fetches car data from the API
      async fetchUser() {
        try {
            console.log("COMEÇO DO FETCH");
            
          const pageRequest = new PageRequest();


          console.log("DEPOIS DO PAGEREQUEST");
            
          const usuarioClient = new UsuarioClient();
          const pageResponse: PageResponse<UsuarioModel> = await usuarioClient.findByFiltrosPaginado(pageRequest);
          this.testeRole = pageResponse.content;
        } catch (error) {
          console.error(error);
          console.log("DENTRO DO ERRO FETCH");
        }
        console.log("FORA DO FERCH");
      },

    },
  });
  </script>
  
  <style scoped>
  .header {
    margin-left: 30px;
    width: 100%;
  }
  
  /* .filter {
    margin-left: 30px;
  } */
  
  .filter-container {
    display: flex;
    align-items: center;
  }
  
  .search-container {
    position: relative;
  }
  
  .search-icon {
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    color: #6c757d;
    font-size: 1.2rem;
    cursor: pointer;
  }
  
  .search-input {
    width: 300px;
    padding: 0.375rem 2.375rem 0.375rem 0.75rem;
  }
  
  .pagination-container {
    margin-top: 20px;
    margin-right: 30px;
  }
  
  .router {
    text-decoration: none;
    color: #000;
  }
  </style>