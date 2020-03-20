<template>
  <div class="footer">
    <div class="footer__con">
      <div class="footer__con--title">
        <b>#CovidImpact</b>
      </div>
      <div class="footer__con__lang">
        <div class="footer__con__lang--option">Footer</div>
        <div class="footer__con__lang--option">Dislcaimer</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.footer {
  width: 100%;
  background-color: #edf2f7;
}
.footer__con {
  margin-top: 1em;
  height: 6em;
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.footer__con--title {
  margin-left: 1em;
  border-bottom: 2px solid #f958ff;
  padding-bottom: 3px;
}
.footer__con__lang {
  margin-right: 1em;
}

@media screen and (min-width: 375px) {
  .footer__con {
    margin-top: 0em;
    align-items: center;
    height: 4em;
  }
  .footer__con__lang {
    display: flex;
  }
  .footer__con__lang--option {
    margin-left: 0.5em;
  }
}
@media screen and (min-width: 768px) {
  .footer__con {
    width: 768px;
    margin: 0 auto;
  }
  .footer__con--title {
    margin-left: 0em;
  }
  .footer__con__lang {
    margin-right: 0em;
  }
}
</style>