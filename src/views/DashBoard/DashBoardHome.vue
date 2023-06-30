<template>
<nav class="navbar navbar-expand-lg  navBar-Dash">
  <div class="container-fluid fs-5 navBar-Dash">
    <span class="col-md-10 text-start" > Olá, admin</span>
    <span class="text-end">Quinta-feira, 20 de Outubro</span>
  </div>
</nav>

<div class="tela">
  <div class="conteudo-Dash row mt-5 ms-5">

    <div class="col-md-9">
      <full-calendar v-if="calendarioAtivar" class="calendario "></full-calendar>
      <formulario v-if="formularioAtivar"> </formulario>
    </div>
    
    <div class="botoes col-md-3">
      <div class="offset-md-2 col-md-12">
        <router-link to="" class="col col-md-1 me-2">
          <button type="button" class="btn btn-success" @click="onclickCalendario()">Calendario</button>
        </router-link>
        <router-link to="" class="col col-md-1 me-2">
          <button type="button" class="btn btn-success">Notificação</button>
        </router-link>
        <router-link to="" class="col col-md-1">
          <button type="button" class="btn btn-success" @click="onclickFormulario()">Formulario</button>
        </router-link>
      </div>
    </div>

  </div>

</div>
  
</template>

<style scoped>

.row{
  --bs-gutter-x: 0;
}

.navBar-Dash{
  margin-bottom: 0px;
  text-align: center;
  background-color: #004777;
  color: #cedde7;
}

.tela{
  
}

.calendario{
  height: 50%;
}

.botoes{
  margin: 0 auto;
  margin-bottom: 2%;
}

</style>


<script lang="ts">

import { defineComponent } from 'vue';
import NavBar from '@/components/NavBar.vue'; // @ is an alias to /src
import FullCalendar from '@/views/DashBoard/Calendario.vue'
import Formulario from '@/components/DashBoardComponents/Formulario.vue'


export default defineComponent({
  name: 'DashBoardView',
  data() {
    return {
      calendarioAtivar: false as boolean,
      formularioAtivar: false as boolean
    };
  },
  components: {
    NavBar,
    FullCalendar,
    Formulario,
},

  methods:{
    onclickCalendario(){
      this.formularioAtivar = false
      this.calendarioAtivar = true;
      console.log(this.calendarioAtivar)
    },

    onclickFormulario(){
      this.calendarioAtivar = false;
      this.formularioAtivar = true;
      
    },

  }

});



</script>
