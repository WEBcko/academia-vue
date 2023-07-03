<template>
  <NavBar></NavBar>

  <div class="container">

    <div class="row text-start">
      <h2 class="col-md-10">Lista de Grupos Musculares</h2>
      <router-link class="col-md-2 " to="/Grupo-Muscular-Cadastrar">
        <button type="button" class="btn btn-success offset-md-5">Cadastrar</button>
      </router-link>
    </div>

    <div class="header d-flex align-content-start justify-content-between m-0">
      <p class="title-pages">Grupo Muscular</p>
      <div class="search-container">
        <input type="text" class="search-input" placeholder="Pesquise por nome ..." v-model="searchQuery" />
        <i class="bi bi-search search-icon"></i>
      </div>
    </div>

  </div>

  <div class="border" style="border-radius: 20px;background-color: white;padding: 6px;">
    <table class="table">
      <thead>
        <tr>
          <th scope="col" class="p-2">ID</th>
          <th scope="col" class="p-2">Estado</th>
          <th scope="col" class="p-2 text-start">Nome da Marca</th>
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
          <th class="col-md-6 text-start">{{ item.nome }}</th>
          <th class="col-md-2">
            <div class="btn-group" role="group">

              <button type="button" class="btn text-align-center col-md-2" @click="editItem(grupoMuscularM)">
                <span class="badge bg-warning btn text-align-center col">EDITAR2</span>
              </button>
              <RouterLink type="button" class="btn text-align-center col-md-2"
                :to="{ name: 'grupo-muscular-cadastrar-editar-view', query: { id: item.id, form: 'editar' } }">
                <span class="badge bg-warning btn text-align-center col">EDITAR</span>
              </RouterLink>
              <!-- <RouterLink type="button" class="btn text-align-center col-md-2"
                :to="{ name: 'grupo-muscular-cadastrar-excluir-view', query: { id: item.id, form: 'excluir' } }">
                <span class="badge bg-danger btn text-align-center col">EXCLUIR</span>
              </RouterLink> -->
            </div>
          </th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { GrupoMuscularModel } from '@/models/GrupoMuscularModel';
import { GrupoMuscularClient } from '@/client/GrupoMuscularClient';
import NavBar from '@/components/NavBar.vue';
import { PageResponse } from '@/models/page-response';
import { PageRequest } from '@/models/page-request'


export default defineComponent({
  name: "GrupoMuscularView",
  components: {
    NavBar
  },
  data() {
    return {

      grupoMuscularM: [] as GrupoMuscularModel[],
      searchQuery: "",

    };
  },

  mounted() {

    this.fetchUser();
  },

  computed: {

    roleFilter(): GrupoMuscularModel[] {
      if (
        !this.searchQuery
      ) {
        console.log("DENTRO DO RETURN ROLE FILTRO");
        return this.grupoMuscularM;
      } else {
        console.log("DENTRO DO ELSE");
        const lowerCaseQuery = this.searchQuery.toLowerCase();


        return this.grupoMuscularM.filter((user: GrupoMuscularModel) => {
          const registerDate = new Date(user.dataCadastro);

          const matchesQuery =
            user.id.toString().trim().toLowerCase().includes(lowerCaseQuery) ||
            user.nome.toLowerCase().includes(lowerCaseQuery);

          console.log("FIM DO ELSE");
          return matchesQuery;
        });
      }
    },

    availableRoles(): string[] {
        console.log("DENTRO DO AVELIABLE ROLES");
        const roles = Object.values(GrupoMuscularModel);
        return roles.map((core) => core.toUpperCase());
      },


  },

  methods: {

    async fetchUser() {
      try {
        console.log("COMEÇO DO FETCH");

        const pageRequest = new PageRequest();

        console.log("DEPOIS DO PAGEREQUEST");

        const grupoClient = new GrupoMuscularClient();
        const pageResponse: PageResponse<GrupoMuscularModel> = await grupoClient.findByFiltrosPaginado(pageRequest);
        this.grupoMuscularM = pageResponse.content;
      } catch (error) {
        console.error(error);
        console.log("DENTRO DO ERRO FETCH");
      }
      console.log("FORA DO FERCH");
    },
  
    async editItem(grupoMuscularM: GrupoMuscularModel) {
      // Redirects to the edit page for a specific vehicle brand
      try {
        const grupoClient = new GrupoMuscularClient();
        const editGrupoIds = grupoMuscularM.id;
        await this.$router.push({ name: "edit-grupoMuscular", params: { editGrupoId: editGrupoIds } });
      } catch (error) {
        console.error(error);
      }
    },

  }

});

</script>

<style scoper lang="scss"></style>