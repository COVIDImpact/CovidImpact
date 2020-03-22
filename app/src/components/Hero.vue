<template>
  <div class="hero">
    <div class="hero__con">
      <div class="hero__con--row">
        <h1 class="hero__con--title">
          <!-- How will COVID-19 affect your business? -->
          Covid-19 Small Business Care Bundle
        </h1>

        <b-img
          class="heart1"
          :src="require('../assets/logos/heart.png')"
          alt="Heart Icon"
          fluid
          width="200%"
          height="100%"
        />
      </div>
      <div class="hero__con--info">
        <!-- We created an app to help Canadian’s find out how COVID-19 will affect
        their business. Here’s what you need to know: -->
        Welcome to your Small Business Care Bundle put together by the
        <b-link href="http://www.fostrum.com">Fostrum</b-link>
        Team. CovidImpact immunizes your business during the pandemic with an
        updated list of financial programs and an assessment tool to simulate
        the impact of Coronavirus on your business!
      </div>
      <!-- <ul class="hero__con--ul">
        <li>You’ll receive the results in 30 seconds</li>
        <li>
          Our algorithm needs you to provide:
          <b>Current-Balance</b>, <b>Burn Rate</b> and
          <b>Monthly Revenue</b>(we’ll take over the rest)
        </li>
      </ul> -->
      <div class="column1">
        <b-link to="financialaid">
          <b-img
            class="hero_con--icon1"
            fluid
            :src="require('../assets/icons/smb.svg')"
          />
          <b-card class="hero__con--btn">Financial Aid</b-card>
        </b-link>
        <b-link to="assessment">
          <b-img
            class="hero_con--icon2"
            fluid
            :src="require('../assets/icons/analytics.svg')"
          />
          <b-card class="hero__con--btn">Business Assessment Tool</b-card>
        </b-link>
      </div>
    </div>
  </div>
</template>

<script>
import { BCard, BImg, BLink } from "bootstrap-vue";

export default {
  components: {
    BCard,
    BImg,
    BLink
  }
};
</script>

<style>
.hero {
  width: 100%;
}

.hero__con {
  margin: 1em 1em;
}
.hero__con--title {
  font-size: 2em;
  margin-top: 0em;
}
.hero__con--info {
  margin-top: 1em;
}
.hero__con--ul {
  margin: 1em 1em;
}
.hero__con--row {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.hero__con--heart {
  display: flex;
  margin: 0 auto;
  margin-top: 2em;
  float: right;
  fill: #f958ff;
}
.hero_con--icon1 {
  width: 35em;
  display: flex;
  margin: 0 auto;
  margin-top: 2em;
  text-align: center;
}
.hero_con--icon2 {
  width: 40em;
  display: flex;
  margin: 0 auto;
  margin-top: 2em;
  text-align: center;
}
a {
  color: inherit;
}
.hero__con--btn {
  text-align: center;
  background: #f958ff;
  display: flex;
  color: white;
  font-weight: bolder;
  width: 40%;
  margin: auto;
  margin-top: 1em;
  border-radius: 40px;
}
@media screen and (min-width: 375px) {
  .hero__con--info {
    margin-top: 2em;
  }
}
@media screen and (min-width: 425px) {
  .hero__con--title {
    margin-top: 1em;
    font-size: 3em;
  }
}
@media screen and (min-width: 768px) {
  .hero__con {
    margin: 1em auto;
    width: 768px;
  }
  .hero__con--info {
    margin: 0em 6em;
    margin-top: 4em;
  }
  .hero__con--ul {
    margin: 0em 7em;
    margin-top: 1em;
  }
}
</style>
