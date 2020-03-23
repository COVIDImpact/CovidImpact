<template>
  <div>
    <CallToAction></CallToAction>
    <Navbar></Navbar>
    <div class="assessment">
      <div class="assessment__con">
        <h1 class="assessment__con--title text-center">
          <!-- How will COVID-19 affect your business? -->
          Assessment
        </h1>
        <div class="assessment__con--info text-center">
          Simulate how your business might fare in 3 different scenarios!
        </div>
      </div>
    </div>

    <Analytics></Analytics>
    <Footer></Footer>
  </div>
</template>

<script>
const CallToAction = () => import("@/components/CallToAction.vue");
const Navbar = () => import("@/components/Navbar.vue");
const Analytics = () => import("@/components/Analytics.vue");
const Footer = () => import("@/components/Footer.vue");

export default {
  name: "Assessment",
  components: {
    CallToAction,
    Navbar,
    Analytics,
    Footer
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.assessment {
  width: 100%;
}
.assessment__con {
  margin: 1em 1em;
}
.assessment__con--title {
  font-size: 2em;
  margin-top: 0em;
}

.assessment__con--values {
  font-weight: bold;
}
</style>
