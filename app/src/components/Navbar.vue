<template>
  <div class="navbar">
    <div class="navbar__con">
      <div class="navbar__con--title">
        <b>#CovidImpact</b>
      </div>
      <div class="navbar__con__lang">
        <div class="navbar__con__lang--option">English</div>
        <div class="navbar__con__lang--option">Español</div>
        <div class="navbar__con__lang--option">简体中文</div>
        <div class="navbar__con__lang--option">فارسی</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.navbar {
  width: 100%;
}
.navbar__con {
  margin-top: 1em;
  height: 6em;
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.navbar__con--title {
  margin-left: 1em;
}
.navbar__con__lang {
  margin-right: 1em;
}

@media screen and (min-width: 375px) {
  .navbar__con {
    margin-top: 0em;
    align-items: center;
    height: 4em;
  }
  .navbar__con__lang {
    display: flex;
  }
  .navbar__con__lang--option {
    margin-left: 0.5em;
  }
}
@media screen and (min-width: 768px) {
  .navbar__con {
    width: 768px;
    margin: 0 auto;
  }
  .navbar__con--title {
    margin-left: 0em;
  }
  .navbar__con__lang {
    margin-right: 0em;
  }
}
</style>