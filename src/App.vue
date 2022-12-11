<template>
  <NavBar />
   <div class="container mt-3 border text-center">
     <RouterView />

   </div>
</template>

<script>
import { RouterView } from 'vue-router';
import NavBar from './components/NavBar.vue';

export default {
  components: { RouterView, NavBar }
};
</script>

<style scoped>
div {
  border-radius: 13px;
  box-shadow: 3px 3px 7px #ccc;
  padding: 0.7rem;
}
</style>
