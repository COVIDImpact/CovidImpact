<template>
  <div class="hero">
    <div class="hero__con">
      <div class="hero__con--row">
        <h1 class="hero__con--title">COVID-19 Business Care Package</h1>
      </div>
      <div class="hero__con--info">
        Welcome to your Small Business Care Bundle put together by the
        <b-link href="http://www.fostrum.com">
          <b>Fostrum</b>
<<<<<<< HEAD
        </b-link>Team.
=======
        </b-link>
        Team.
>>>>>>> 3cf10343e6194c49bddd29f9ec1a67a053448501
        <br />
        <br />CovidImpact immunizes your business during the pandemic with an
        updated list of financial programs and an assessment tool to simulate
        the impact of Coronavirus on your business!
      </div>
      <div class="hero__con--row">
        <div class="hero__con-row--col colone">
          <b-link to="financial-aid">
            <b-img
              class="hero_con--icon1"
              fluid
              :src="require('../assets/icons/bus.svg')"
            />
            <b-card class="hero__con--btn">Financial Aid</b-card>
          </b-link>
        </div>
        <div class="hero__con-row--col coltwo">
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
      <div class="hero__con--row">
        <div class="hero__con-row--col">
          <b-link to="news">
            <b-img
              class="hero_con--icon2"
              fluid
              :src="require('../assets/icons/news.svg')"
            />
            <b-card class="hero__con--btn">COVID-19 News for Business</b-card>
          </b-link>
        </div>
        <div class="hero__con-row--col"></div>
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
  width: 100%;
  transition: transform 0.2s; /* Animation */
}
.hero_con--icon2 {
  width: 100%;
  transition: transform 0.2s; /* Animation */
}

.hero_con--icon1:hover {
  transform: scale(
    1.1
  ); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
}
.hero_con--icon2:hover {
  transform: scale(
    1.1
  ); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
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
  width: 100%;
  margin: auto;
  margin-top: 1em;
  border-radius: 40px;
  text-decoration: none;
  border-bottom: none;
  border: none;
  text-decoration: underline;
  text-decoration-color: #f958ff;
}

.hero__con--btn:hover {
  background: #f52dfc;
  text-decoration-color: #f52dfc;
}

.hero__con--link {
  text-decoration: none;
}

.hero__con--row {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.hero__con-row--col {
  width: 100%;
  margin-top: 2em;
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
    margin-top: 2em;
    font-size: 1.25em;
  }
  .hero__con--ul {
    margin: 0em 7em;
    margin-top: 1em;
  }
  .hero__con--row {
    flex-direction: row;
  }
  .hero__con-row--col {
    margin-top: 4em;
  }
  .colone {
    margin-right: 1em;
  }
  .coltwo {
    margin-left: 1em;
  }
}
</style>
