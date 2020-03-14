
<template>
  <div class="form">
    <div class="form__con">
      <h1 class="form__con--title">Government aid is on the way...</h1>
      <div
        class="form__con--info"
      >We created an app to help Canadian’s find out how COVID-19 will affect their business. Here’s what you need to know:</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.form {
  width: 100%;
}
.form__con {
  margin: 1em 1em;
}
.form__con--title {
  font-size: 2em;
  margin-top: 0em;
}
.form__con--info {
  margin-top: 1em;
}

@media screen and (min-width: 375px) {
  .form__con--info {
    margin-top: 2em;
  }
}
@media screen and (min-width: 425px) {
  .form__con--title {
    margin-top: 1em;
    font-size: 3em;
  }
}
@media screen and (min-width: 768px) {
  .form__con {
    margin: 1em auto;
    width: 768px;
  }
  .form__con--info {
    margin: 0em 6em;
    margin-top: 4em;
  }
}
</style>