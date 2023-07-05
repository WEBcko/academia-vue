<template>
  <nav class="navbar navbar-expand-lg  mb-3">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">Academia</a>
  </div>
</nav>
</template>

<style lang="scss">

  #NAVBAR{
    background-color: aqua;
  }
  li{
    margin-left: 5%;
  }

  .navbar{
    background-color: #004777;
    
  }

  .navbar-brand{
    margin-left: 5%;
    color: #FFFFFF;
  }

  .navbar-brand:hover{
    color: #061d2c;
  }
</style>



<script lang="ts">

import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NavBar',
  props: {
    msg: String,
  },
});
</script>