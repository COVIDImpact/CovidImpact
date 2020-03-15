<template>
  <div class="home">
    <CallToAction></CallToAction>
    <Navbar></Navbar>
    <Hero></Hero>
    <div class="text-center">
      <div class="row1">
        <div class="column1">
          <Runway></Runway>
        </div>
        <div class="column1">
          <RiskLevel></RiskLevel>
        </div>
      </div>
    </div>
    <Analytics></Analytics>
    <Scenarios></Scenarios>
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
const Analytics = () => import("@/components/Analytics.vue");
const Runway = () => import("@/components/Runway.vue");
const RiskLevel = () => import("@/components/RiskLevel.vue");
const Scenarios = () => import("@/components/Scenarios.vue");

export default {
  name: "Home",
  components: {
    CallToAction,
    Navbar,
    Hero,
    Form,
    Timeline,
    Analytics,
    Runway,
    RiskLevel,
    Scenarios
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
  width: 100%;
}
.row1 {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.column1 {
  display: flex;
  flex-direction: column;
}
</style>
