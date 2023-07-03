<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary mb-3">
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

  .navbar-brand{
    margin-left: 5%;
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