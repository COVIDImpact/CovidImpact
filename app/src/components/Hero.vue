<template>
  <div class="hero">
    <div class="hero__con">
      <h1 class="hero__con--title">COVID-19 Business Survival Guide</h1>
      <div class="hero__con--info">
        <b>#CovidImpact</b> was created to help Canadian companies survive the COVID-19 pandemic.
        <br />
        <br />SARS-CoV-2 is a highly infectious and potentially deadly virus that causes a respiratory disease called COVID-19 or just simply coronavirus.
      </div>
      <!-- <svg
        class="hero__con--heart"
        xmlns="http://www.w3.org/2000/svg"
        width="209.295"
        height="199.384"
        viewBox="0 0 209.295 199.384"
      >
        <path
          id="Path_204"
          data-name="Path 204"
          d="M677.54,110.05h-.5a57.381,57.381,0,0,0-47.8,25.92,57.381,57.381,0,0,0-47.8-25.92h-.5c-31.2.295-56.334,25.423-56.351,56.329,0,18.44,8.153,44.606,24.049,66.136,30.287,41.025,80.6,76.918,80.6,76.918s50.314-35.886,80.595-76.918c15.9-21.53,24.049-47.7,24.049-66.136-.017-30.9-25.151-56.031-56.345-56.329Zm-7.182,125.622a11.276,11.276,0,0,1-10.488-7.175H647.928a3.772,3.772,0,0,1-3.554-2.546L640.706,215,629.1,255.18a3.75,3.75,0,0,1-3.6,2.685h-.234a3.7,3.7,0,0,1-3.481-3.077L609.823,183.52l-8.742,42.172a3.722,3.722,0,0,1-3.621,2.8H580.64a3.75,3.75,0,0,1-3.372-1.8,3.677,3.677,0,0,1,0-3.8,3.75,3.75,0,0,1,3.372-1.8h13.875l12.383-56.7a3.762,3.762,0,0,1,7.363.305l12.215,72.7,10.4-35.946a3.676,3.676,0,0,1,3.5-2.652h.074A3.732,3.732,0,0,1,644,201.344l6.633,19.767h9.09A11.2,11.2,0,1,1,670.378,235.7Z"
          transform="translate(-524.59 -110.05)"
          fill="#f958ff"
        />
      </svg>-->
    </div>
  </div>
</template>

<script>
export default {};
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
  font-weight: bold;
}
.hero__con--info {
  margin-top: 1em;
}
.hero__con--ul {
  margin: 1em 1em;
}
.hero__con--heart {
  width: 10em;
  display: flex;
  margin: 0 auto;
  margin-top: 2em;
  fill: #f958ff;
}
@media screen and (min-width: 375px) {
  .hero__con--info {
    margin-top: 2em;
  }
}
@media screen and (min-width: 425px) {
  .hero__con--title {
    font-size: 3em;
  }
}
@media screen and (min-width: 450px) {
  .hero__con--info {
    font-size: 1.5em;
  }
}
@media screen and (min-width: 768px) {
  .hero__con--title {
    margin-top: 1em;
    font-size: 3em;
  }
  .hero__con--info {
    margin: 0em 0em;
    margin-top: 2em;
    font-size: 1.5em;
  }
  .hero__con--ul {
    margin: 0em 7em;
    margin-top: 1em;
  }
}
@media screen and (min-width: 800px) {
  .hero__con {
    margin: 1em auto;
    width: 768px;
  }
}
</style>