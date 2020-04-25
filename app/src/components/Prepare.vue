<template>
  <div class="form">
    <div class="form__con">
      <h1 class="form__con--title">{{$("message.prepare_header")}}</h1>
      <div class="form__con--info">
        {{$("message.prepare_form")}}
        <br />
        <br />
        <ul>
          <li>
            <b
              v-b-tooltip.hover.right
              :title="$t('message.prepare_list1Hover')"
            >{{$("message.prepare_list1")}}</b>
          </li>
          <li>
            <b
              v-b-tooltip.hover.right
              :title="$t('message.prepare_list2Hover')"
            >{{$("message.prepare_list2")}}</b>
          </li>
          <li>
            <b
              v-b-tooltip.hover.right
              :title="$t('message.prepare_list3Hover')"
            >{{$("message.prepare_list3")}}</b>
          </li>
        </ul>
      </div>
    </div>
    <br />
  </div>
</template>

<script>
// import BTooltip from "bootstrap-vue";
export default {
  components: {
    // BTooltip
  }
};
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
.form__con--info li {
  margin: 0em 1em;
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
    margin: 0em 0em;
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
