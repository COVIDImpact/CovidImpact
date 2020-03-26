<template>
  <div>
    <CallToAction></CallToAction>
    <Navbar></Navbar>
    <div class="news">
      <h1 class="news--title text-center">
        <!-- How will COVID-19 affect your business? -->
        News
      </h1>
      <div class="news--info text-center">Relevant events for your business</div>
    </div>

    <div class="news__con">
      <div class="news__con--content">
        <div class="text-muted text-left">
          <small>March 25, 2020</small>
        </div>

        <b>Canada</b>Shopify has compiled resources, information and tools to
        support Canadian businesses and help them navigate through the COVID-19
        crisis, including $200 million in small business funding. Click here to
        learn more.
        <span>
          <a
            href="https://www.shopify.com/covid19?fbclid=IwAR2FdEkXufDTxKXMTUf080jBjV8U1IGWDQDRRPhsoByoDMa8mS2HIl_x7LA"
          >[Source]</a>
        </span>
      </div>

      <div class="news__con--content">
        <div class="text-muted text-left">
          <small>March 25, 2020</small>
        </div>

        <b>OTTAWA—Canada</b>Federal government is looking for organizations
        that can supply emergency products and innovative solutions to support
        the fight against COVID-19.
        <span>
          <a
            href="https://buyandsell.gc.ca/calling-all-suppliers-help-canada-combat-covid-19"
          >[Source]</a>
        </span>
      </div>

      <div class="news__con--content">
        <div class="text-muted text-left">
          <small>March 25, 2020</small>
        </div>

        <b>OTTAWA—Canada</b>Federal government is looking for organizations
        that can supply emergency products and innovative solutions to support
        the fight against COVID-19.
        <span>
          <a
            href="https://buyandsell.gc.ca/calling-all-suppliers-help-canada-combat-covid-19"
          >[Source]</a>
        </span>
      </div>

      <div class="news__con--content">
        <div class="text-muted text-left">
          <small>March 25, 2020</small>
        </div>

        <b>OTTAWA—Canada</b>60+ Leading Canadian Business Organizations Call on
        Government to Protect Jobs and Postpone Non-essential New Measures.
        <span>
          <a
            href="https://chamber.us1.list-manage.com/track/click?u=7ff6d535f16100c2e37d2ef8b&id=00bfecda41&e=5ac17939a9"
          >[Source]</a>
        </span>
      </div>

      <div class="news__con--content">
        <div class="text-muted text-left">
          <small>March 24, 2020</small>
        </div>

        <b>Canada</b> CFIB releases guide to determine if your small business
        is non-essential or needs to be shut down according to the government.
        <span>
          <a
            href="https://www.cfib-fcei.ca/en/tools-resources/covid-19-business-essential-service"
          >[Source]</a>
        </span>
      </div>

      <div class="news__con--content">
        <div class="text-muted text-left">
          <small>March 24, 2020</small>
        </div>

        <b>TORONTO—Canada</b> Ontario Providing Electricity Relief to support
        Small Businesses and Farms During COVID-19
        <span>
          <a
            href="https://news.ontario.ca/opo/en/2020/3/ontario-providing-electricity-relief-to-families-small-businesses-and-farms-during-covid-19.html"
          >[Source]</a>
        </span>
      </div>

      <div class="news__con--content">
        <div class="text-muted text-left">
          <small>March 18, 2020</small>
        </div>

        <b>OTTAWA—Canada</b>announced a fiscal-stimulus and tax-deferral
        package amounting to nearly 4% of its gross domestic product, marking an
        aggressive effort to contain economic damage caused by the coronavirus
        pandemic and lower oil prices.
        <span>
          <a
            href="https://www.wsj.com/articles/canada-rolls-out-fiscal-boost-and-tax-deferrals-for-coronavirus-relief-11584547026"
          >[Source]</a>
        </span>
      </div>
      <div class="news__con--content">
        <div class="text-muted text-left">
          <small>March 18, 2020</small>
        </div>
        <b>OTTAWA—Canada</b> announced a fiscal-stimulus and tax-deferral
        package amounting to nearly 4% of its gross domestic product.
        <span>
          <a
            href="https://www.wsj.com/articles/canada-rolls-out-fiscal-boost-and-tax-deferrals-for-coronavirus-relief-11584547026"
          >[Source]</a>
        </span>
      </div>
      <div class="news__con--content">
        <div class="text-muted text-left">
          <small>March 18, 2020</small>
        </div>
        <b>OTTAWA—Canada</b>announced a fiscal-stimulus and tax-deferral
        package .
        <span>
          <a
            href="https://www.wsj.com/articles/canada-rolls-out-fiscal-boost-and-tax-deferrals-for-coronavirus-relief-11584547026"
          >[Source]</a>
        </span>
      </div>
      <div class="news__con--content">
        <div class="text-muted text-left">
          <small>March 18, 2020</small>
        </div>
        <b>OTTAWA—Canada</b> announced a fiscal-stimulus and tax-deferral
        package amounting to nearly 4% of its gross domestic product.
        <span>
          <a
            href="https://www.wsj.com/articles/canada-rolls-out-fiscal-boost-and-tax-deferrals-for-coronavirus-relief-11584547026"
          >[Source]</a>
        </span>
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
.news--title {
  font-size: 3em;
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

.news__con--time-stamp {
  position: relative;
  right: 0px;
  top: 0px;
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
    height: 130vh;
  }
}
</style>
