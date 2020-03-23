<template>
  <div>
    <br />

    <div class="bcard">
      <!-- <b-card-group> -->
      <b-card footer-bg-variant="white" title="Income tax deferement">
        <b-card-body>
          A program designed to ….Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Duis vitae dictum elit. Nulla viverra quam quis odio
          imperdiet.
        </b-card-body>

        <template v-slot:footer>
          <b-button href="#" variant="primary">Learn More</b-button>
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
          <b-button href="#" variant="primary">Learn More</b-button>
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
          <b-button href="#" variant="primary">Learn More</b-button>
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
</style>
