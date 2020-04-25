git commit
<template>
  <div class="footer">
    <b-modal id="modal-1" title="Privacy Policy" ok-only>
      <p class="my-4">
        {{$t("message.footer1")}}
      </p>
    </b-modal>
    <b-modal id="modal-2" title="Disclaimer" ok-only>
      <p class="my-4" v-html="$t('message.footer2')">
      </p>
    </b-modal>
    <div class="footer__con">
      <div class="footer__con--title">
        <b>{{$t("message.covidImpact")}}</b>
      </div>
      <div class="footer__con__lang">
        <b-button v-b-modal.modal-1 class="footer__con__lang--button"
          >{{$t("message.privacyPolicy")}}</b-button
        >
        <b-button v-b-modal.modal-2 class="footer__con__lang--button"
          >{{$t("message.disclaimer")}}</b-button
        >
        <a class="footer__con__lang--button" href="mailto:info@fostrum.com"
          >{{$t("message.contactUs")}}</a
        >
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
  padding-top: 1em;
  margin-top: 4em;
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
}
.footer__con__lang {
  margin-right: 1em;
}
.footer__con__lang--option {
  cursor: pointer;
}
.footer__con__lang--option:hover {
  color: #f958ff;
}

.footer__con__lang--button {
  cursor: pointer;
  outline: none;
  background-color: transparent;
  color: black;
  padding: 0px;
  border: none;
  margin-left: 1em;
}
.footer__con__lang--button:hover {
  color: #f958ff;
}
.legal-btn {
  background-color: #f958ff;
  outline: none;
  border: none;
}

@media screen and (min-width: 375px) {
  .footer__con--title {
    margin-left: 1em;
    border-bottom: 2px solid #f958ff;
    padding-bottom: 2px;
  }
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
