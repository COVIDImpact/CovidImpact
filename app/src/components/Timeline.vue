
<template>
  <div class="time">
    <div class="time__con">
      <h1 class="time__con--title">Timeline of Events: Canadian Businesses</h1>
      <div
        class="time__con--info"
      >Here’s a timeline of events every business owner in Canada should be aware of:</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.time {
  width: 100%;
}
.time__con {
  margin: 1em 1em;
}
.time__con--title {
  font-size: 2em;
  margin-top: 0em;
}
.time__con--info {
  margin-top: 1em;
}

@media screen and (min-width: 375px) {
  .time__con--info {
    margin-top: 2em;
  }
}
@media screen and (min-width: 425px) {
  .time__con--title {
    margin-top: 1em;
    font-size: 3em;
  }
}
@media screen and (min-width: 768px) {
  .time__con {
    margin: 1em auto;
    width: 768px;
  }
  .time__con--info {
    margin: 0em 6em;
    margin-top: 4em;
  }
}
</style>