<template>
  
  <SideBar/>

</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SideBar from '@/components/SideBar.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    SideBar
  },
  methods: {

  }
});
</script>
