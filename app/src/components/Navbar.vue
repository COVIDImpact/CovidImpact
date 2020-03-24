<template>
  <div class="navbar">
    <div class="navbar__con">
      <b-link to="/" class="navbar__con--title">
        <b>#CovidImpact</b>
      </b-link>
      <div class="navbar__con__lang">
        <b-link to="/" class="navbar__con__lang--option">English</b-link>
        <div class="navbar__con__lang--option not-ready">Français</div>
        <div class="navbar__con__lang--option not-ready">简体中文</div>
      </div>
    </div>
  </div>
</template>

<script>
import { BLink } from "bootstrap-vue";

export default {
  components: {
    BLink
  }
};
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
  text-decoration: none;
}
.navbar__con--title:hover {
  color: #f958ff;
}
.navbar__con__lang {
  margin-right: 1em;
}

.navbar__con__lang--option {
  text-decoration: none;
}
.navbar__con__lang--option:hover {
  color: #f958ff;
}

.not-ready {
  cursor: not-allowed;
}
.not-ready:hover {
  color: black;
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
