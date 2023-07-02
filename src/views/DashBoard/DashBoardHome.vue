<template>
<nav class="navbar navbar-expand-lg  navBar-Dash">
  <div class="container-fluid fs-5 navBar-Dash">
    <span class="col-md-10 text-start" > Olá, admin</span>
    <span class="text-end">Quinta-feira, 20 de Outubro</span>
  </div>
</nav>

<div class="tela">
  <div class="conteudo-Dash row mt-5 ms-5">

    <div class="col-md-9 conteudo">
      <full-calendar  class="calendario" v-show="calendarioAtivar"></full-calendar>
      <formulario  v-show="formularioAtivar"> </formulario>
      

    </div>
    <!-- v-if="calendarioAtivar" -->
    <!-- v-if="formularioAtivar" -->
   
    
    <div class="botoes col-md-2 offset-md-3">

      <div class="headerNotificacao d-flex ">
        <div class="offset-md-2 col-md-10">
          <router-link to="" class="col col-md-1 me-2">
            <button type="button" class="btn btn-success" @click="onclickCalendario()">Calendario</button>
          </router-link>
          <router-link to="" class="col col-md-1">
            <button type="button" class="btn btn-success" @click="onclickFormulario()">Formulario</button>
          </router-link>
        </div>
      </div>

      <div class="bodyNotificacao col">
          
          <div class="notificacao1">
            <header class="tituloNotificacao">Notificacao</header>
            <span class="bodyNotificacao">Aluno novo cadastrado</span>
          </div>

        </div>

    </div>
  </div>

</div>
  
</template>

<style scoped>

.row{
  --bs-gutter-x: 0;
}

.conteudo{

  display: flex;
  justify-content: center;
}

.navBar-Dash{
  margin-bottom: 0px;
  text-align: center;
  background-color: #004777;
  color: #cedde7;
}

.notificacao1{
  padding: 2%;
}

.tituloNotificacao{
  background-color: #f1f1f1;
  border-color: rgb(201, 201, 201);
  border-style: none;
  border-bottom-style: solid;
}

.bodyNotificacao{
  background-color: #e2e2e2;
  
}

.headerNotificacao{
  margin-top: 2%;
}

.calendario{
  height: 50%;
}

.botoes{
  margin: 0 auto;
  margin-bottom: 2%;
  /* border-style: solid; */
  border-color: #004777;
  border-radius: 10px;
  border-width: 3px;
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
