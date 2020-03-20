
<template>
  <div class="form">
    <div class="form__con">
      <h1 class="form__con--title">Preparation</h1>
      <div class="form__con--info">
        Here's what you need to run your impact assessment:
        <br />
        <ul>
          <li>
            <b>Cash-at-Hand:</b> Current balance or current net profit up until the most recent month.
          </li>
          <li>
            <b>Monthly Revenue:</b> Aproxiamte monthly revenue for your firm.
          </li>
          <li>
            <b>Monthly Costs:</b> Aproximate monthly company expenses.
          </li>
        </ul>
      </div>
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
  color: #718096;
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
@media screen and (min-width: 450px) {
  .form__con--info {
    font-size: 1.5em;
  }
}
@media screen and (min-width: 768px) {
  .form__con--info {
    margin: 0em 4em;
    margin-top: 2em;
  }
}
@media screen and (min-width: 800px) {
  .form__con {
    margin: 1em auto;
    width: 768px;
  }
}
</style>