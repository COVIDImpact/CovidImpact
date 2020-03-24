<template>
  <div class="aid-con">
    <br />

    <div class="bcard aid-card">
      <!-- <b-card-group> -->
      <b-card footer-bg-variant="white" title="Income tax deferement">
        <b-card-body>
          A program designed to ….Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Duis vitae dictum elit. Nulla viverra quam quis odio
          imperdiet.
        </b-card-body>

        <template v-slot:footer>
          <b-button href="#" variant="primary" class="aid-btn">Source</b-button>
        </template>
      </b-card>
      <br />
      <b-card
        bg-variant="dark"
        text-variant="white"
        title="Wage subsidy program"
      >
        <b-card-body>
          A program designed to ….Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Duis vitae dictum elit. Nulla viverra quam quis odio
          imperdiet.
        </b-card-body>
        <template v-slot:footer>
          <b-button href="#" variant="primary" class="aid-btn">Source</b-button>
        </template>
      </b-card>
      <br />
      <b-card bg-variant="dark" text-variant="white" title="Work-share program">
        <b-card-body>
          A program designed to ….Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Duis vitae dictum elit. Nulla viverra quam quis odio
          imperdiet.
        </b-card-body>
        <template v-slot:footer>
          <b-button href="#" variant="primary" class="aid-btn">Source</b-button>
        </template>
      </b-card>
      <br />
      <b-card bg-variant="dark" text-variant="white" title="Work-share program">
        <b-card-body>
          A program designed to ….Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Duis vitae dictum elit. Nulla viverra quam quis odio
          imperdiet.
        </b-card-body>
        <template v-slot:footer>
          <b-button href="#" variant="primary" class="aid-btn">Source</b-button>
        </template>
      </b-card>
      <!-- </b-card-group> -->
    </div>

    <br />
    <br />
  </div>
</template>

<script>
import { BCard } from "bootstrap-vue";
export default {
  components: {
    BCard
  }
};
</script>

<style scoped>
.bcard {
  width: 50%;
  margin: 0 auto; /* Added */
  float: none; /* Added */
  margin-bottom: 10px; /* Added */
}

.aid-con {
  padding: 0em 1em;
}

.aid-card {
  width: 100%;
}

.aid-btn {
  background-color: #f958ff;
  outline: none;
  border: none;
}

@media screen and (min-width: 768px) {
  .aid-con {
    width: 768px;
    margin: 0 auto;
    height: 100vh;
  }
}
</style>
