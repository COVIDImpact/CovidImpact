<template>
  <div class="home">
    <CallToAction></CallToAction>
    <Navbar></Navbar>
    <Hero></Hero>
    <Form></Form>
    <Timeline></Timeline>
  </div>
</template>

<script>
const CallToAction = () => import("@/components/CallToAction.vue");
const Navbar = () => import("@/components/Navbar.vue");
const Hero = () => import("@/components/Hero.vue");
const Form = () => import("@/components/Form.vue");
const Timeline = () => import("@/components/Timeline.vue");

export default {
  name: "Home",
  components: {
    CallToAction,
    Navbar,
    Hero,
    Form,
    Timeline
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
  width: 100%;
}
</style>
