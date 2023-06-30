<template>


    <!-- <button type="button" class="btn btn-success" @click="testar()">Success</button> -->


</template>

<script lang="ts">
import { defineComponent } from 'vue';
//import { GrupoMuscularClient } from '@/client/GrupoMuscularClient;

import  GrupoMuscularClient  from '@/client/GrupoMuscularClient';

//const grupoMuscularClient: GrupoMuscularClient = new GrupoMuscularClient;

export default defineComponent({
    name:"GrupoMuscularView",
    methods:{
    //     testar(){
    //         console.log(grupoMuscularClient.listAll());
    //         // erro de CORS nao sei resolver 
    //     }
     }

});

</script>

<style scoper lang="scss">

</style>