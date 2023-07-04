<template>


    <button type="button" class="btn btn-success" @click="testar()">Success</button>


</template>

<script lang="ts">
import { defineComponent } from 'vue';
import  GrupoMuscularClient  from '@/client/GrupoMuscularClient';
import setAuthorizationHeader from '@/configs-axios/axios-config';

export default defineComponent({
    name:"GrupoMuscularView",
    methods:{
        teste(){

            // const tokenLocal = localStorage.getItem('userToken')
            // setAuthorizationHeader(tokenLocal);
            GrupoMuscularClient.findById(1).then(success =>{
              
                console.log(success);
            }).catch(error =>{
                console.log(error)
            })
        }
    },
    mounted(){
        this.teste();
    }

});

</script>

<style scoper lang="scss">

</style>