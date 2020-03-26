<template>
  <div>
    <br />
    <div class="text-center">
      <h3 class="text-secondary">Your expected runway is</h3>
      <h1 class="font-weight-bold">{{`${runway} months`}}</h1>
      <br />
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
