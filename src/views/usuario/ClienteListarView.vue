<template>
  <NavBar></NavBar>
  <SideBar></SideBar>

  <div class="container">

    <div class="row text-start align-items-center">
      <h2 class="col-md-8">Lista de Clientes</h2>

      <div class="header col-md-2">
        <div class="search-container d-flex">
          <input type="text" class="search-input btn" placeholder="Pesquisar por Nome/id ..." v-model="searchQuery" /> 
          <i class="bi bi-search search-icon ms-3"></i>
        </div>
      </div>

      <router-link class="col-md-2 " to="/usuario-cadastrar" >
        <button type="button" class="btn btn-success offset-md-5">Cadastrar</button>
      </router-link>
    </div>

    <div class="filter-container col-md-2">
        <label for="user-filter">Role</label>
        <select id="user-filter" v-model="selectedRole" class="form-select">
          <option value="">All</option>
          <option v-for="roles in availableRoles" :value="roles">{{ roles }}</option>
        </select>
      </div>

    

    <div class="border mt-4" style="border-radius: 20px;background-color: white;padding: 6px;">
      <table class="table">
        <thead>
          <tr>
            <th scope="col" class="p-2">ID</th>
            <th scope="col" class="p-2">Estado</th>
            <th scope="col" class="p-2 text-start">Nome do Usuario</th>
            <th scope="col" class="p-2 ">Role</th>
            <th scope="col" class="p-2 text-center">Opção</th>
          </tr>
        </thead>

        <tbody class="table-group-divider">

          <tr v-for="role in roleFilter" :key="role.id" class="col-md-12">
            <td class="col-md-1" style="width: 4%;">{{ role.id }}</td>
            <th class="col-md-1">
              <span v-if="role.ativo" class="badge bg-primary text-align-center col"> ATIVO</span>
              <span v-if="!role.ativo" class="badge bg-danger text-align-center col"> INATIVO</span>
            </th>
            <th class="col-md-2 text-start">{{ role.nome }}</th>
            <th class="col-md-1">{{ role.role }}</th>
            <th class="col-md-3">
              <div class="d-flex justify-content-center align-items-center" role="group">
                <RouterLink type="button" class="btn text-align-center col-md-2 " v-if="role.role === 'CLIENTE'"
                  :to="{ name: 'usuario-treinoexercicio-view', query: { id: role.id, form: 'treinos' } }">
                  <span class="badge bg-success btn text-align-center col">TREINOS</span>
                </RouterLink>
                <RouterLink type="button" class="btn text-align-center col-md-2"
                  :to="{ name: 'usuario-cadastrar-editar-view', query: { id: role.id, form: 'editar' } }">
                  <span class="badge bg-warning btn text-align-center col">EDITAR</span>
                </RouterLink>
                <RouterLink type="button" class="btn text-align-center col-md-2"
                  :to="{ name: 'usuario-cadastrar-excluir-view', query: { id: role.id, form: 'excluir' } }">
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

.search-input{
  background-color: rgb(247, 247, 247);
}

</style>


<script lang="ts">
import { computed, defineComponent } from "vue";
import axios from "axios";
import NavBar from '@/components/NavBar.vue';
import { UsuarioModel } from '@/models/UsuarioModel';
import { UsuarioClient }   from '@/client/UsuarioClient';
import { UsuarioRole } from '@/models/UsuarioRoleModel';
import { PageResponse } from '@/models/page-response';
import { PageRequest } from '@/models/page-request'
import SideBar from "@/components/SideBar.vue";
//import UsuarioClient from "@/client/UsuarioClient";

export default defineComponent({

  name: "teste-vue",
  data() {
    return {

      testeRole: [] as UsuarioModel[],
      searchQuery: "",
      selectedRole: null as UsuarioRole | null,

    };
  },
  components: {
    NavBar,
    SideBar
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
  