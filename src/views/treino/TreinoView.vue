<template>

    <NavBar></NavBar>
    <SideBar></SideBar>
    
    <div class="container">
    
    <div class="row text-start">
        <h2 class="col-md-10">Lista de Treino</h2>
        <router-link class="col-md-2 " to="/treino-Cadastrar">
            <button type="button" class="btn btn-success offset-md-5">Cadastrar</button>
        </router-link>  
    </div>
    
    <div class="border" style="border-radius: 20px;background-color: white;padding: 6px;">
    <table class="table">
    <thead>
      <tr >
        <th scope="col" class="p-2">ID</th>
        <th scope="col" class="p-2">Estado</th>
        <th scope="col" class="p-2 text-start">Nome do Treino</th>
        <th scope="col colspan-2" class="p-2">Opção</th>
      </tr>
    </thead>
    
      <tbody class="table-group-divider">
    
        <tr v-for="item in treinoList" :key="item.id" class="col-md-12">
          <th class="col-md-1">{{ item.id }}</th>
          <th class="col-md-1">
              <span v-if="item.ativo" class="badge bg-primary text-align-center col"> ATIVO</span> 
              <span v-if="!item.ativo" class="badge bg-danger text-align-center col"> INATIVO</span>
          </th>
          <th class="col-md-6 text-start">{{ item.codigoOrdem }}</th>
          <th class="col-md-2">
            <div class="btn-group" role="group">
              <RouterLink type="button" class="btn text-align-center col-md-2" 
                :to="{name: 'treino-cadastrar-editar-view', query: {id: item.id, form: 'editar'}}">
                <span class="badge bg-warning btn text-align-center col">EDITAR</span>
              </RouterLink>
              <RouterLink type="button" class="btn text-align-center col-md-2" 
                :to="{name: 'treino-cadastrar-excluir-view', query: {id: item.id, form: 'excluir'}}">
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
    
    <script lang="ts">
    import { defineComponent } from 'vue';
    import NavBar from '@/components/NavBar.vue';
    import { TreinoModel } from '@/models/TreinoModel';
    import TreinoClient from '@/client/TreinoClient';
    import SideBar from '@/components/SideBar.vue';
    
    
    export default defineComponent({
        name:"TreinoView",
        components: {
        NavBar,
        SideBar
        },
        data(){
            return{
    
                treinoList: new Array<TreinoModel>()
    
            };
        },
    
        mounted(){
    
            this.findAll();
        },
    
        methods:{
    
            findAll(){
                TreinoClient.listAll().then(sucess =>{
                    this.treinoList = sucess;
                })
                .catch(error =>{
                    console.log(error)
                })
            },
            
         }
    
    });
    
    </script>
    
    <style scoper lang="scss">
    
    </style>