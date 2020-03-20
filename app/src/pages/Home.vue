<template>
  <div class="home">
    <CallToAction></CallToAction>
    <Navbar></Navbar>
    <Hero></Hero>
    <Prepare></Prepare>
    <!-- <div class="text-center con-graph">
      <div class="row1">
        <div class="column1">
          <Runway></Runway>
        </div>
        <div class="column1">
          <RiskLevel></RiskLevel>
        </div>
      </div>
    </div>-->
    <Analytics></Analytics>
    <Scenarios></Scenarios>
    <!-- <Timeline></Timeline> -->
    <Footer></Footer>
  </div>
</template>

<script>
const CallToAction = () => import("@/components/CallToAction.vue");
const Navbar = () => import("@/components/Navbar.vue");
const Hero = () => import("@/components/Hero.vue");
const Prepare = () => import("@/components/Prepare.vue");
// const Timeline = () => import("@/components/Timeline.vue");
const Analytics = () => import("@/components/Analytics.vue");
// const Runway = () => import("@/components/Runway.vue");
// const RiskLevel = () => import("@/components/RiskLevel.vue");
const Scenarios = () => import("@/components/Scenarios.vue");
const Footer = () => import("@/components/Footer.vue");

export default {
  name: "Home",
  components: {
    CallToAction,
    Navbar,
    Hero,
    Prepare,
    // Timeline,
    Analytics,
    // Runway,
    // RiskLevel,
    Scenarios,
    Footer
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
  width: 100%;
}
/* .row1 {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.column1 {
  display: flex;
  flex-direction: column;
}
.con-graph {
  max-width: 768px;
  margin: 0 auto;
} */
</style>
