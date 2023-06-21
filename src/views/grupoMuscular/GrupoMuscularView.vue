<template>


    <button type="button" class="btn btn-success" @click="testar()">Success</button>


</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { GrupoMuscularClient } from '@/client/grupomuscular.client';

const grupoMuscularClient: GrupoMuscularClient = new GrupoMuscularClient;

export default defineComponent({
    name:"GrupoMuscularView",
    methods:{
        testar(){
            console.log(grupoMuscularClient.listAll());
            // erro de CORS nao sei resolver 
        }
    }

});

</script>

<style scoper lang="scss">

</style>