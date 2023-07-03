<template>
  <NavBar></NavBar>

  <div class="container">

    <div class="row text-start">
      <h2 class="col-md-10">Lista de Clientes</h2>
      <router-link class="col-md-2 " to="/usuario-cadastrar">
        <button type="button" class="btn btn-success offset-md-5">Cadastrar</button>
      </router-link>
    </div>

    <div class="header d-flex align-content-start justify-content-between m-0">
      <p class="title-pages">Pesquisar Usuario</p>
      <div class="search-container">
        <input type="text" class="search-input" placeholder="Pesquisar por Nome ..." v-model="searchQuery" />
        <i class="bi bi-search search-icon"></i>
      </div>
    </div>

    <div class="filter-container d-flex align-items-center gap-2">

      <label for="user-filter">Role</label>
      <select id="user-filter" v-model="selectedRole" class="form-select">
        <option value="">All</option>
        <option v-for="roles in availableRoles" :value="roles">{{ roles }}</option>
      </select>

    </div>

    <div class="border" style="border-radius: 20px;background-color: white;padding: 6px;">

      <table class="table">
        <thead>
          <tr>
            <th scope="col" class="p-2">ID</th>
            <th scope="col" class="p-2">Estado</th>
            <th scope="col" class="p-2 text-start">Nome do Usuario</th>
            <th scope="col" class="p-2 text-start">Role</th>
            <th scope="col colspan-2" class="p-2">Opção</th>
          </tr>
        </thead>

        <tbody class="table-group-divider">

          <tr v-for="role in roleFilter" :key="role.id" class="col-md-12">
            <td class="col-md-1">{{ role.id }}</td>
            <th class="col-md-1">
              <span v-if="role.ativo" class="badge bg-primary text-align-center col"> ATIVO</span>
              <span v-if="!role.ativo" class="badge bg-danger text-align-center col"> INATIVO</span>
            </th>
            <th class="col-md-1">{{ role.nome }}</th>
            <th class="col-md-1">{{ role.role }}</th>
            <th class="col-md-2">
              <div class="btn-group" role="group">
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
  
<style scoped></style>
  
<script lang="ts">
import { computed, defineComponent } from "vue";
import axios from "axios";
import NavBar from '@/components/NavBar.vue';
import { UsuarioModel } from '@/models/UsuarioModel';
import { UsuarioClient } from '@/client/UsuarioClient';
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
  components: {
    NavBar,
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
  