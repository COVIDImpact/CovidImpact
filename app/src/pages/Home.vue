<template>
  <div class="home">
    <CallToAction></CallToAction>
    <Navbar></Navbar>
    <Hero></Hero>
  </div>
</template>

<script>
const CallToAction = () => import("@/components/CallToAction.vue");
const Navbar = () => import("@/components/Navbar.vue");
const Hero = () => import("@/components/Hero.vue");

export default {
  name: "Home",
  components: {
    CallToAction,
    Navbar,
    Hero
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
  width: 100%;
}
</style>
