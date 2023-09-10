<template xmlns="http://www.w3.org/1999/html">
  <nav-bar />
  <div>

    <router-view></router-view>
  </div>
  <Footer></Footer>

</template>

<script setup>
import NavBar from "@/components/navBar.vue";
import Footer from "@/components/footer.vue";
</script>

<style scoped>

</style>
