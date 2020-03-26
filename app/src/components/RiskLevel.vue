<template>
  <div>
    <br />
    <div class="text-center">
      <h3 class="text-secondary font-weight-bold">Risk Level</h3>
      <h1 class="text-danger font-weight-bold">{{riskLevel}}</h1>
      <br />
    </div>
    <br />
    <br />
  </div>
</template>

<script>
export default {
  props: {
    riskLevel: {
      type: String,
      required: true,
      default: "low"
    }
  }
};
</script>

<style></style>
