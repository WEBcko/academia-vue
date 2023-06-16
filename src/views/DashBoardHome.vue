<template>

<NavBar></NavBar>

</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavBar from '@/components/NavBar.vue'; // @ is an alias to /src
import SideBar from '@/components/SideBar.vue';

export default defineComponent({
  name: 'DashBoardHome',
  components: {
    NavBar,
    SideBar
},
});
</script>

<style scoped>
    .dashboard{
        display: grid;
        grid-template-columns: 1fr 5fr;
        background-color: aquamarine;
        height: 100vh;
        width: 100%;
    }
    .content{
        background-color: azure;
        border-radius: 18px;
        margin: 1% 1% 1% 0%;
    }

</style>