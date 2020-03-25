<template>
  <div>
    <CallToAction></CallToAction>
    <Navbar></Navbar>
    <div class="financialaid">
      <div class="financialaid__con">
        <h1 class="financialaid__con--title text-center">
          <!-- How will COVID-19 affect your business? -->
          Financial Aid
        </h1>
        <div class="financialaid__con--info text-center">
          A current list of financial aid from the government.
        </div>
      </div>
    </div>
    <aid-item></aid-item>
    <Footer></Footer>
  </div>
</template>

<script>
const CallToAction = () => import("@/components/CallToAction.vue");
const Navbar = () => import("@/components/Navbar.vue");
const AidItem = () => import("@/components/AidItem.vue");
const Footer = () => import("@/components/Footer.vue");

export default {
  name: "financialaid",
  components: {
    CallToAction,
    Navbar,

    AidItem,
    Footer
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.financialaid {
  width: 100%;
}
.financialaid__con {
  margin: 1em 1em;
}
.financialaid__con--title {
  font-size: 2em;
  margin-top: 0em;
}

.financialaid__con--values {
  font-weight: bold;
}
</style>
