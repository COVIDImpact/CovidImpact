<template>
  <div class="footer">
    <b-modal id="modal-1" title="Privacy Policy" ok-only>
      <p class="my-4">
        Your privacy is important to us. It is #CovidImpact policy to respect your privacy regarding any information we may collect from you across our website, https://covidimpact.com, and other sites we own and operate.
        We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we’re collecting it and how it will be used.
        We only retain collected information for as long as necessary to provide you with your requested service. What data we store, we’ll protect within commercially acceptable means to prevent loss and theft, as well as unauthorized access, disclosure, copying, use or modification.
        We don’t share any personally identifying information publicly or with third-parties, except when required to by law.
        Our website may link to external sites that are not operated by us. Please be aware that we have no control over the content and practices of these sites, and cannot accept responsibility or liability for their respective privacy policies.
        You are free to refuse our request for your personal information, with the understanding that we may be unable to provide you with some of your desired services.
        Your continued use of our website will be regarded as acceptance of our practices around privacy and personal information. If you have any questions about how we handle user data and personal information, feel free to contact us.
        This policy is effective as of 10 March 2020.
      </p>
    </b-modal>
    <b-modal id="modal-2" title="Disclaimer" ok-only>
      <p
        class="my-4"
      >The content of this website does not constitute medical advice. The information provided above is meant as a suggestion for concerned individuals to follow a loose set of guidelines based on best practices and anecdotal evidence to protect themselves and their loved ones. There is no guarantee or scientific evidence that following the mentioned guidelines will lead to a reduction in new infections or even stop the COVID-19 epidemic. There is also no guarantee that following these guidelines will reduce the risk of getting infected with SARS-CoV-2 or any other viral or bacterial contagion. All information provided on this website is given with the best intent and will to provide factual information. In no event shall the website operators be held liable for any claim, damages, or other liabilities. If you have concerns or comments about the information provided on this website, please write to your regional or federal government.</p>
    </b-modal>
    <div class="footer__con">
      <div class="footer__con--title">
        <b>#CovidImpact</b>
      </div>
      <div class="footer__con__lang">
        <b-button v-b-modal.modal-1 class="footer__con__lang--button">Privacy Policy</b-button>
        <b-button v-b-modal.modal-2 class="footer__con__lang--button">Disclaimer</b-button>
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