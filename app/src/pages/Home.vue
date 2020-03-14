<template>
  <div class="home">
    <CallToAction></CallToAction>
    <Navbar></Navbar>
  </div>
</template>

<script>
const CallToAction = () => import("@/components/CallToAction.vue");
const Navbar = () => import("@/components/Navbar.vue");

export default {
  name: "HelloWorld",
  components: {
    CallToAction,
    Navbar
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
  width: 100%;
}
</style>
