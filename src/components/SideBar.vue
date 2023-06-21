<template>

<button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop">
  sideBar
</button>

<div class="offcanvas offcanvas-start" data-bs-backdrop="static" tabindex="-1" id="staticBackdrop" aria-labelledby="staticBackdropLabel" style="width:15vw;">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="staticBackdropLabel">ACADEMIA</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>

  <div class="blocoSideBar mt-5">
    <div class="offcanvas-md" style="">
    <i class="bi bi-speedometer2 iconSideBar"></i>
    <router-link to="/dashboard" data-bs-dismiss="offcanvas">DashBoard</router-link>
  </div>
  <div class="offcanvas-md mt-4">
    <i class="bi bi-people-fill iconSideBar"></i>
    <router-link to="/alunos" data-bs-dismiss="offcanvas">Alunos</router-link>
  </div>
  <div class="offcanvas-md mt-4">
    <i class="bi bi-person-lines-fill iconSideBar"></i>
    <router-link to="/personais" data-bs-dismiss="offcanvas">Personais</router-link>
  </div>
  <div class="offcanvas-md mt-4">
    <i class="bi bi-currency-dollar iconSideBar"></i>
    <router-link to="/financeiro" data-bs-dismiss="offcanvas">Financeiro</router-link>
  </div>
  <div class="offcanvas-md mt-4">
    <i class="bi bi-gear-fill iconSideBar"></i>
    <router-link to="/configuracao" data-bs-dismiss="offcanvas">
    <button data-bs-dismiss="offcanvas"> Condiguração</button>  
    </router-link>
  </div>
  </div>
  

</div>

</template>

<style scoped>

.blocoSideBar{
  display: flex;
  flex-direction: column;
  width: 60%;
  align-self: center;
  text-align: start;
  font-size: 20px;
}

.iconSideBar{
  margin-right: 2vh;
}

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