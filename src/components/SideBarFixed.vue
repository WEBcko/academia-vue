<template>

<div class="sidebarFixed">
    <div class="sidebar-Conteudos">
        <div class="sidebar-Home">
            <router-link to="/dashboard" class="corLink">
                <i class="bi bi-house-fill"></i>
            </router-link>
        </div>
        <div class="sidebar-Meio">
            <div>
                <router-link to="/alunos" class="corLink">
                    <i class="bi bi-people-fill"></i>
                </router-link>
            </div>
            <div>
                <router-link to="/personais" class="corLink">
                    <i class="bi bi-person-lines-fill"></i>
                </router-link>
           </div>
            <div>
                <router-link to="/financeiro" class="corLink">
                    <i class="bi bi-currency-dollar"></i>
                </router-link>
           </div>
            <div>
                <router-link to="/treinos" class="corLink">
                    <i class="bi bi-whatsapp"></i>
                </router-link>
            </div>
        </div>
        <div class="sidebar-Config">
            <router-link to="/configuracao" class="corLink">
                <i class="bi bi-gear-fill"></i>
            </router-link>
        </div>

    </div>
</div>
  
</template>
    
<style scoped >

    .corLink{
        color: rgb(255, 255, 255);
    }

    .corLink:hover{
        color: #c5c5c5;
    }
    
    .sidebar-Home{
        margin-top: 2vh;
    }

    .sidebar-Config{
        margin-bottom: 4vh;
        align-self: flex-end;
    }

    .sidebar-Meio{
        justify-content: space-between;
        display: flex;
        flex-direction: column;
    }
    .sidebarFixed{
        float: left;
        width: 4%;
        height: 100vh;
        z-index: -1;
        background-color: #236F5C;
    }

    .sidebar-Conteudos{
        display: grid;
        width: 100%;
        height: 100%;
        font-size: 30px;
    }
</style>
    
<script lang="ts">
    
    import { defineComponent } from 'vue';
    
    export default defineComponent({
      name: 'SideBarFixed',
      props: {
        msg: String,
      },
    });
</script>