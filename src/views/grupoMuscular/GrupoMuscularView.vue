<template>


    <button type="button" class="btn btn-success" @click="testar()">Success</button>


</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { GrupoMuscularClient } from '@/client/grupomuscular.client';

const grupoMuscularClientt: GrupoMuscularClient = new GrupoMuscularClient;

export default defineComponent({
    name:"GrupoMuscularView",
    methods:{
        testar(){
            console.log(grupoMuscularClientt.listAll());
        }
    }

});

</script>

<style scoper lang="scss">

</style>