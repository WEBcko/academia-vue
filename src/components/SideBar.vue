<template>

<button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop">
  sideBar
</button>

<div class="offcanvas offcanvas-start" data-bs-backdrop="static" tabindex="-1" id="staticBackdrop" aria-labelledby="staticBackdropLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="staticBackdropLabel">ACADEMIA</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-md">
    <router-link to="/dashboard">DashBoard</router-link>
  </div>
  <div class="offcanvas-md">
    <router-link to="/alunos">Alunos</router-link>
  </div>
  <div class="offcanvas-md">
    <router-link to="/personais">Personais</router-link>
  </div>
  <div class="offcanvas-md">
    <router-link to="/financeiro">Financeiro</router-link>
  </div>
  <div class="offcanvas-md">
    <router-link to="/configuracao">Configuração</router-link>
  </div>
</div>

</template>

<style scoped>

</style>

<script lang="ts">

import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SideBar',
  props: {
    msg: String,
  },
});
</script>