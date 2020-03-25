<template>
  <div>
    <CallToAction></CallToAction>
    <Navbar></Navbar>
    <div class="news">
      <h1 class="news--title text-center">
        <!-- How will COVID-19 affect your business? -->
        News
      </h1>
      <div class="news--info text-center">
        Relevant events for your business
      </div>
    </div>
    <div class="news__con">
      <div class="news__con--content">
        <b>OTTAWA—Canada </b>announced a fiscal-stimulus and tax-deferral
        package amounting to nearly 4% of its gross domestic product, marking an
        aggressive effort to contain economic damage caused by the coronavirus
        pandemic and lower oil prices.
        <span
          ><a
            href="https://www.wsj.com/articles/canada-rolls-out-fiscal-boost-and-tax-deferrals-for-coronavirus-relief-11584547026"
            >[Source]</a
          ></span
        >
      </div>
      <div class="news__con--content">
        <b> VANCOUVER—Canada</b> announced a fiscal-stimulus and tax-deferral
        package amounting to nearly 4% of its gross domestic product.
        <span
          ><a
            href="https://www.wsj.com/articles/canada-rolls-out-fiscal-boost-and-tax-deferrals-for-coronavirus-relief-11584547026"
            >[Source]</a
          ></span
        >
      </div>
      <div class="news__con--content">
        <b>MONTREAL—Canada </b>announced a fiscal-stimulus and tax-deferral
        package .
        <span
          ><a
            href="https://www.wsj.com/articles/canada-rolls-out-fiscal-boost-and-tax-deferrals-for-coronavirus-relief-11584547026"
            >[Source]</a
          ></span
        >
      </div>
      <div class="news__con--content">
        <b>VANCOUVER—Canada</b> announced a fiscal-stimulus and tax-deferral
        package amounting to nearly 4% of its gross domestic product.
        <span
          ><a
            href="https://www.wsj.com/articles/canada-rolls-out-fiscal-boost-and-tax-deferrals-for-coronavirus-relief-11584547026"
            >[Source]</a
          ></span
        >
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
const CallToAction = () => import("@/components/CallToAction.vue");
const Navbar = () => import("@/components/Navbar.vue");
const Footer = () => import("@/components/Footer.vue");

export default {
  name: "financialaid",
  components: {
    CallToAction,
    Navbar,
    Footer
  }
};
</script>
<style scoped>
.news {
  width: 100%;
}
.news__con {
  padding: 1em 1em;
}
.news--info {
  margin-bottom: 2em;
}
.news__con--title {
  font-size: 2em;
  margin-top: 0em;
}
.news__con--content {
  width: 100%;
  margin-bottom: 1em;
}
.news__con--content a {
  color: #f958ff;
  font-size: 0.85em;
}

.news__con--values {
  font-weight: bold;
}

@media screen and (min-width: 768px) {
  .news__con--content {
    width: 768px;
    margin: 0 auto;
    margin-bottom: 2em;
  }
}
@media screen and (min-width: 768px) {
  .news__con {
    height: 100vh;
  }
}
</style>
