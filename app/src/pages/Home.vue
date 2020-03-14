<template>
  <div class="home">
    <Navbar></Navbar>
  </div>
</template>

<script>
const Navbar = () => import("@/components/Navbar.vue");

export default {
  name: "HelloWorld",
  components: {
    Navbar
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
