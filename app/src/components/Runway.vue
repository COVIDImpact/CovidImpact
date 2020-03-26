<template>
  <div>
    <br />
    <div class="text-center">
      <h3 class="text-secondary">Your expected runway is</h3>
      <h1 class="font-weight-bold">{{`${runway} months`}}</h1>
      <br />
      <h4 class="text-warning">You have a 75% chance to outlast the coronavirus</h4>
    </div>
    <br />
    <br />
  </div>
</template>

<script>
export default {
  props: {
    runway: {
      type: Number,
      required: true,
      default: 0
    }
  }
};
</script>

<style></style>
