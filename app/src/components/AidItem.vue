<template>
  <div class="aid-con">
    <br />

    <div class="bcard aid-card">
      <!-- <b-card-group> -->
      <a
        href="https://www.canada.ca/en/revenue-agency/campaigns/covid-19-update/frequently-asked-questions-wage-subsidy-small-businesses.html"
      >
        <b-card
          border-variant="light"
          class="aid-bcard aid-con__box-shadow aid-card-animation"
          footer-bg-variant="white"
          title="Wage Subsidy Program"
        >
          <b-card-body>
            The government is proposing to provide eligible small employers a
            temporary wage subsidy for a period of three months. The subsidy
            will be equal to 10% of remuneration paid during that period, up to
            a maximum subsidy of $1,375 per employee and $25,000 per employer.
            This is done by reducing your remittances of income tax withheld on
            your employees’ remuneration.
          </b-card-body>
          <div class="aid-cta">Learn more</div>
        </b-card>
      </a>
      <br />
      <a
        href="https://www.canada.ca/en/employment-social-development/services/work-sharing.html"
      >
        <b-card
          border-variant="light"
          class="aid-bcard aid-con__box-shadow aid-card-animation"
          footer-bg-variant="white"
          title="Work Share Program"
        >
          <b-card-body>
            If your employees are eligible for Employment Insurance (EI)
            benefits, and your business is suffering a downturn due to COVID-19,
            you can apply for a work-sharing agreement. The agreement would
            allow them to work a temporarily reduced work week while receiving
            EI benefits.
          </b-card-body>
          <div class="aid-cta">Learn more</div>
        </b-card>
      </a>
      <br />
      <a
        href="https://www.canada.ca/en/department-finance/news/2020/03/introduces-canada-emergency-response-benefit-to-help-workers-and-businesses.html"
      >
        <b-card
          border-variant="light"
          class="aid-bcard aid-con__box-shadow aid-card-animation"
          footer-bg-variant="white"
          title="Canada Emergency Response Benefit Program"
        >
          <b-card-body>
            The government is providing $2,000 a month for up to four months for
            small business owners and entrepreneurs who are not receiving a
            paycheck as a result of COVID-19.
          </b-card-body>
          <div class="aid-cta">Learn more</div>
        </b-card>
      </a>
      <br />
      <a
        href="https://www.canada.ca/en/department-finance/news/2020/03/canadas-covid-19-economic-response-plan-support-for-canadians-and-businesses.html#Extension_of_Deadline"
      >
        <b-card
          border-variant="light"
          class="aid-bcard aid-con__box-shadow aid-card-animation"
          footer-bg-variant="white"
          title="Tax Deferments"
        >
          <b-card-body>
            The CRA will allow all businesses to defer, until after August 31,
            2020, the payment of any income tax amounts that become owing on or
            after today and before September 2020. No interest or penalties will
            accumulate on these amounts during this period. For self-employed,
            the tax deadline is extended from June 15th to July 31st.
          </b-card-body>
          <div class="aid-cta">Learn more</div>

          <!-- <template v-slot:footer>
          <b-button
            href="https://www.canada.ca/en/department-finance/news/2020/03/canadas-covid-19-economic-response-plan-support-for-canadians-and-businesses.html#Extension_of_Deadline"
            variant="primary"
            class="aid-btn"
            >Learn More</b-button
          >
          </template>-->
        </b-card>
      </a>
      <br />
      <a
        href="https://www.canada.ca/en/department-finance/programs/financial-sector-policy/business-credit-availability-program.html"
      >
        <b-card
          border-variant="light"
          class="aid-bcard aid-con__box-shadow aid-card-animation"
          footer-bg-variant="white"
          title="Business Credit Availability Program"
        >
          <b-card-body>
            Through this program, Export Development Canada (EDC) and the
            Business Development Bank of Canada (BDC) will provide more than $10
            billion in direct lending and other types of financial support at
            market rates to viable small businesses. BDC and EDC, both financial
            Crown corporations, will work closely with private sector lenders to
            improve access to financing for Canadian businesses.
          </b-card-body>
          <div class="aid-cta">Learn more</div>

          <!-- <template v-slot:footer>
          <b-button
            href="https://www.canada.ca/en/department-finance/programs/financial-sector-policy/business-credit-availability-program.html"
            variant="primary"
            class="aid-btn"
            >Learn More</b-button
          >
          </template>-->
        </b-card>
      </a>
      <!-- </b-card-group> -->
    </div>

    <br />
    <br />
  </div>
</template>

<script>
import { BCard } from "bootstrap-vue";
export default {
  components: {
    BCard
  }
};
</script>

<style scoped>
.aid-cta {
  width: 8em;
  background-color: #f958ff;
  padding: 0.5em;
  border-radius: 3px;
  color: white;
  text-align: center;
  margin: 0 auto;
  transition: all 0.3s cubic-bezier(0.05, 0.03, 0.35, 1);
}
.aid-cta:hover {
  box-shadow: 0 7px 14px 0 rgba(50, 50, 93, 0.1),
    0 3px 6px 0 rgba(0, 0, 0, 0.08), inset 0 0 1px 0 rgba(0, 0, 0, 0.06);
}
.bcard {
  width: 50%;
  margin: 0 auto; /* Added */
  float: none; /* Added */
  margin-bottom: 10px; /* Added */
}

.aid-con {
  padding: 0em 1em;
}

.aid-con__box-shadow {
  /* box-shadow: 5px 5px 5px grey; */
  box-shadow: 0 2px 5px 0 rgba(51, 51, 79, 0.07);
}

.aid-con__box-shadow:hover {
  /* box-shadow: 0 7px 14px 0 rgba(50, 50, 93, 0.1),
    0 3px 6px 0 rgba(0, 0, 0, 0.08), inset 0 0 1px 0 rgba(0, 0, 0, 0.06); */
}

.aid-card {
  width: 100%;
}

.aid-card-animation {
  transition: all 0.3s cubic-bezier(0.05, 0.03, 0.35, 1);
}

/* .aid-card-animation:hover {
  transform: scale(1.1);
} */

.hero_con--icon2 {
  transition: all 0.3s cubic-bezier(0.05, 0.03, 0.35, 1);
}

/* .hero_con--icon1:hover {
  transform: scale(
    1.1
  ); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) 
} */

.aid-bcard {
  display: flex;
  flex-direction: column;
  transition: all 0.3s cubic-bezier(0.05, 0.03, 0.35, 1);
}

.aid-btn {
  background-color: #f958ff;
  outline: none;
  border: none;
}

.aid-btn:hover {
  background-color: #ec37f2;
  outline: none;
  border: none;
}
.aid-con a {
  color: black;
  text-decoration: none;
}

@media screen and (min-width: 768px) {
  .aid-con {
    width: 768px;
    margin: 0 auto;
  }
}
</style>
