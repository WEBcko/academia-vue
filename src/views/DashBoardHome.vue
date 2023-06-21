<template>
  <SideBarFixed></SideBarFixed>
  <!-- <NavBar></NavBar> -->

<nav class="navbar navbar-expand-lg bg-body-tertiary navBar-Dash">
  <div class="container-fluid fs-5">
    <span class="col-md-10 text-start"> Olá, admin</span>
    <span class="text-end">Quinta-feira, 20 de Outubro</span>
  </div>
</nav>

<div class="tela">
  <div class="conteudo-Dash row">

    <div class="botoes col-md-4">
      <router-link to="" class="col col-md-1 ">
        <button type="button" class="btn btn-success">Calendario</button>
      </router-link>
      <router-link to="" class="col col-md-1">
        <button type="button" class="btn btn-success">Notificação</button>
      </router-link>
      <router-link to="" class="col col-md-1">
        <button type="button" class="btn btn-success">Formulario</button>
      </router-link>
    </div>

    <div class="listaAlunosPequena col-md-2 ">
      <span>Lista de Alunos</span>
      <table>
        <tbody>
          <tr>
            <th>Joao Carlos</th>
          </tr>
        </tbody>
      </table>

    </div>



  </div>
</div>
  
</template>

<style scoped>

.listaAlunosPequena{
  margin-right: 0;
  padding-right: 0;
}

.navBar-Dash{
  margin-bottom: 0px;
  padding-bottom: 0px;
}

.tela{
  width: 96vw;
  margin-left: 4%;
  background-color: aqua;
  height: 95.9vh;
}

</style>

<script lang="ts">

import { defineComponent } from 'vue';
import NavBar from '@/components/NavBar.vue'; // @ is an alias to /src
import SideBarFixed from '@/components/SideBarFixed.vue';
//import { MarcaClient } from '@/client/marca.client';
//import { Marca } from '@/model/marca';

import { onMounted, reactive, toRefs } from 'vue';

export default defineComponent({
  name: 'VeiculoListaView',
  data() {
    return {
      abreAModal: false,
    };
  },
  components: {
    NavBar,
    SideBarFixed,
},

  methods:{

    abreModal(){
      this.abreAModal = true;
    },
    fechaModal(){
      this.abreAModal = false;
    },
    adicionarMarca(){

    },
    editarMarca(){

    },
    deletarMarca(){

    }
  }

});



</script>
