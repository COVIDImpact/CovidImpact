<template>
  <div>
    <br />
    <div class="text-center">
      <h3 class="text-secondary">Your expected runway is</h3>
      <div v-if="parseInt(runway) === 1">
        <h1 class="font-weight-bold">
          {{ `${parseInt(runway)} month or less` }}
        </h1>
      </div>
      <div v-else-if="parseInt(runway) >= 12">
        <h1 class="font-weight-bold">{{ `12 months +` }}</h1>
      </div>
      <div v-else>
        <h1 class="font-weight-bold">{{ `${parseInt(runway)} months` }}</h1>
      </div>
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
