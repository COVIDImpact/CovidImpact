<template>
  <b-container class="chart-con">
    <b-overlay :show="show" rounded="sm" @shown="onShown" @hidden="onHidden">
      <template v-slot:overlay>
        <div class="text-center">
          <h3 id="cancel-label">
            Please enter the following and click 'Compute' to get your impact
            asessment report...
            <br />
            <br />

            <div class="text-left">
              <h4>
                <ul>
                  <li>
                    <b
                      v-b-tooltip.hover.right
                      title="Current balance or current net profit up until the most recent
            month."
                    >Current Cash-On-Hand</b>
                  </li>
                  <li>
                    <b
                      v-b-tooltip.hover.right
                      title="Aproxiamte monthly revenue for your firm."
                    >Average Monthly Revenue</b>
                  </li>
                  <li>
                    <b
                      v-b-tooltip.hover.right
                      title="Aproximate monthly company expenses."
                    >Average Monthly Expenses</b>
                  </li>
                  <!-- <li>
                    <b
                      v-b-tooltip.hover.right
                      title="There are three possible scenarios that relate to the duration the pandemic will last. Short means 3 months, Medium is 6 months and Long is 9+ months."
                    >Scenario</b>
                  </li>-->
                </ul>
              </h4>
            </div>
          </h3>
          <br />
          <div class="d-flex justify-content-center input-box">
            <b-form-input
              class="input-box--item"
              v-model="currentBalance"
              :state="balanceState"
              placeholder="Cash On Hand"
            ></b-form-input>
            <b-form-input
              class="input-box--item"
              v-model="monthlyRevenue"
              :state="revenueState"
              placeholder="Monthly Revenue"
            ></b-form-input>
            <b-form-input
              class="input-box--item"
              v-model="burnRate"
              :state="burnState"
              placeholder="Monthly Expenses"
            ></b-form-input>

            <b-form-select v-model="selected" :options="options"></b-form-select>
          </div>
          <div class="text-center">
            <br />
            <div v-if="balanceState && burnState && revenueState">
              <b-button
                class="input-btn"
                ref="cancel"
                @click="
                  compute();
                  show = false;
                "
                variant="primary"
              >Compute</b-button>
            </div>
            <div v-else>
              <b-button
                class="input-btn"
                disabled
                ref="cancel"
                @click="
                  compute();
                  show = false;
                "
                variant="primary"
              >Compute</b-button>
            </div>
            <br />
          </div>
        </div>
      </template>
      <b-card class="ana-graph-card medium-shadow bcard styled-con">
        <h2 class="text-black float-left">Cash Balance</h2>
        <div class="text-center">
          <div class="chartDiv">
            <chart :chartData="datacollection" :options="chartoptions"></chart>
          </div>
        </div>
        <br />
        <div class="d-flex justify-content-center input-box">
          <h2 class="text-black float-left">Input Form</h2>
          <label>Current Cash-On-Hand</label>

          <b-form-input class="input-box--item" v-model="currentBalance" placeholder="Cash-at-Hand"></b-form-input>

          <label>Average Monthly Revenue</label>
          <b-form-input
            class="input-box--item"
            v-model="monthlyRevenue"
            placeholder="Monthly Revenue"
          ></b-form-input>
          <label>Average Monthly Expenses</label>
          <b-form-input class="input-box--item" v-model="burnRate" placeholder="Monthly Expenses"></b-form-input>
          <label>Monthly Reduction in Revenue</label>
          <b-form-select v-model="selected" :options="options"></b-form-select>
        </div>
        <div class="text-center">
          <br />
          <b-button class="input-btn" @click="compute()" variant="primary">Re-compute</b-button>
          <br />
        </div>
        <div class="text-center con-graph">
          <div class="row1 results-row">
            <div class="column1">
              <Runway :runway="monthlyRunway"></Runway>
            </div>
            <div class="column1">
              <RiskLevel :riskLevel="riskLevel"></RiskLevel>
            </div>
          </div>
        </div>
        <h2 class="text-black float-left">Cash Balance</h2>

        <div class="text-center">
          <div class="chartDiv">
            <chart :chartData="datacollection" :options="chartoptions"></chart>
          </div>
        </div>
      </b-card>
    </b-overlay>
  </b-container>
</template>

<script>
import Chart from "./Chart";
import moment from "moment";
// import { BButton } from "bootstrap-vue";
const Runway = () => import("@/components/Runway.vue");
const RiskLevel = () => import("@/components/RiskLevel.vue");

import {
  BContainer,
  BCard,
  BFormInput,
  BOverlay,
  BFormSelect
  // BButton
} from "bootstrap-vue";

export default {
  components: {
    Chart,
    BContainer,
    BCard,
    BFormInput,
    Runway,
    BOverlay,
    RiskLevel,
    BFormSelect
  },
  computed: {
    balanceState() {
      // if (this.currentBalance.length > 1 && !isNaN(this.currentBalance)) {
      if (this.currentBalance.length > 0 && !isNaN(this.currentBalance)) {
        return true;
      } else {
        return false;
      }
    },
    burnState() {
      if (this.burnRate.length > 0 && !isNaN(this.burnRate)) {
        return true;
      } else {
        return false;
      }
    },
    revenueState() {
      if (this.monthlyRevenue.length > 0 && !isNaN(this.monthlyRevenue)) {
        return true;
      } else {
        return false;
      }
    }
  },
  data() {
    return {
      selected: "1.0",
      options: [
        { value: "1.0", text: "Please select an option" },
        { value: ".25", text: "25% decrease in revenue per month" },
        { value: ".5", text: "50% decrease in revenue per month" },
        { value: ".75", text: "75% decrease in revenue per month" }
      ],
      monthlyRunway: 12,
      riskLevel: "Low",
      datacollection: null,
      scenarios: [
        "Scenario 1: A 25% Decrease in Revenue",
        "Scenario 2: A 50% Decrease in Revenue",
        "Scenario 3: A 100% Decrease in Revenue"
      ],
      currentBalance: "",
      burnRate: "",
      monthlyRevenue: "",
      chartoptions: {
        scales: {
          xAxes: [
            {
              ticks: {
                display: false
              },
              gridLines: {
                display: false
              }
            }
          ],
          yAxes: [
            {
              ticks: {
                display: false
              },
              gridLines: {
                display: false
              }
            }
          ]
        }
      },
      scenario: 1,
      showChart: "loading",
      show: true,
      balanceData: [100, 125, 150, 180, 100, 80, 50, 50, 40, 70, 100, 100],
      revenueData: [0, 20, 40, 60, 90, 110, 150, 160, 150, 130, 130, 140],
      labels: [],

      isDead: false
    };
  },
  // props: [`${this.timeLeft}`],

  async mounted() {
    // var now = moment();
    for (let i = 0; i < 12; i++) {
      var date = new Date();
      date.setMonth(date.getMonth() + i);
      this.labels.push(date);
      // this.labels.push(moment(now).format("MMM, YYYY"));
      // var month = now.add(1, "M").endOf("month");
      // now = month;
    }
    this.labels = this.labels.reverse();

    this.fillData(this.balanceData, this.revenueData, this.labels);
    this.fillOptions();
  },
  methods: {
    formatBalance(value) {
      if (!Number.isInteger(value)) {
        value = value.toFixed(2);
      }
      return "$" + value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    moment: function(date) {
      return moment(date).format("MMM");
    },
    momentYear: function(date) {
      return moment(date).format("MMM, YYYY");
    },
    getYear() {
      var balanceDataYear = this.balanceData;
      var revenueDataYear = this.revenueData;
      var labelsYear = this.labels;

      this.fillData(balanceDataYear, revenueDataYear, labelsYear);
    },
    getQuarter() {
      var balanceDataQuarter = this.balanceData.slice(0, 3);
      var revenueDataQuarter = this.revenueData.slice(0, 3);
      var labelsQuarter = this.labels.slice(0, 3);
      this.fillData(balanceDataQuarter, revenueDataQuarter, labelsQuarter);
    },
    getMonth() {
      var balanceDataQuarter = this.balanceData.slice(0, 1);
      var revenueDataQuarter = this.revenueData.slice(0, 1);
      var labelsQuarter = this.labels.slice(0, 1);
      this.fillData(balanceDataQuarter, revenueDataQuarter, labelsQuarter);
    },
    getSuffix(sum) {
      var suffix = "";
      if (sum < 0) {
        suffix = "-";
      }
      return suffix;
    },
    fillData(balanceData, revenueData, labels) {
      this.datacollection = {
        labels: labels,
        datasets: [
          // {
          //   label: "Starting Balance",
          //   backgroundColor: "#9400D3",
          //   borderColor: "#191970",
          //   borderWidth: 3,
          //   data: balanceData,
          //   type: "line"
          // }
          {
            label: "Balance",
            backgroundColor: "#33F9FF",
            borderColor: "#9400D3",
            borderWidth: 3,
            data: balanceData,
            type: "line"
          }
          // {
          //   label: "Monthly Revenues",
          //   backgroundColor: "#9400D3",
          //   borderColor: "#191970",
          //   borderWidth: 3,
          //   data: revenueData,
          //   type: "line"
          // }
        ]
      };
    },
    compute() {
      this.updateCurrentBalance();
      this.updateMonthlyRunway();
      this.fillData(this.balanceData, this.revenueData, this.labels);
      console.log(typeof parseInt(this.selected));
    },
    updateRiskLevel() {
      if (this.monthlyRunway > 6) {
        this.riskLevel = "Low";
      } else if (this.monthlyRunway > 3) {
        this.riskLevel = "Mild";
      } else {
        this.riskLevel = "High";
      }
    },
    updateMonthlyRunway() {
      const newArray = this.balanceData;
      console.log(newArray.reverse());

      let arr = [];
      for (let i = 0; i < 12; i++) {
        arr.push(newArray[i]);
        if (newArray[i] <= 0) {
          console.log(arr.length);

          this.monthlyRunway = arr.length - 1;
          this.updateRiskLevel();
          break;
        } else {
          this.monthlyRunway = 12;
        }
      }
      console.log(arr);
      console.log(newArray.reverse());
    },
    updateCurrentBalance() {
      var updatedBalance = this.currentBalance;

      if (!(updatedBalance === "")) {
        updatedBalance = parseInt(this.currentBalance);
      } else updatedBalance = 0;
      var updatedRevenue = this.monthlyRevenue;
      // var originalRevenue;
      const discountRate = parseFloat(this.selected);
      console.log(typeof discountRate);
      console.log(discountRate);
      const discount = discountRate === 1 ? 1 : 1 - discountRate;
      console.log(typeof discount);
      console.log(discount);

      if (!(updatedRevenue === "")) {
        var originalRevenue = parseInt(this.monthlyRevenue);
        console.log(typeof originalRevenue);
        console.log(originalRevenue);

        // originalRevenue = updatedRevenue;
        updatedRevenue = originalRevenue * discount;
        console.log(typeof updatedRevenue);
        console.log(updatedRevenue);
      } else updatedRevenue = 0;

      var updatedBurnRate = this.burnRate;
      if (!(updatedBurnRate === "")) {
        updatedBurnRate = parseInt(this.burnRate);
      } else updatedBurnRate = 0;

      for (let i = 0; i < 12; i++) {
        this.balanceData[i] = updatedBalance;
        this.revenueData[i] = updatedRevenue;
        updatedBalance -= updatedBurnRate;
        updatedBalance += updatedRevenue;
        // originalRevenue += updatedRevenue;
        console.log(this.revenueData[i]);
      }
      this.balanceData = this.balanceData.reverse();
    },
    updateBurnRate() {},
    updateRevenue() {},
    fillOptions() {
      var ref = this;
      this.chartoptions = {
        onClick: this.handle,
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          xAxes: [
            {
              stacked: true,
              ticks: {
                reverse: true,
                fontSize: 20,
                minRotation: 0,
                maxRotation: 0,
                userCallback: function(value) {
                  // if (index % 2 == 0) {
                  return ref.moment(value);
                  // } else return "";
                },
                display: true
              },
              gridLines: {
                display: true
              }
            }
          ],
          yAxes: [
            {
              stacked: false,
              ticks: {
                fontSize: 20,
                userCallback: function(value) {
                  value = parseFloat(value);

                  var suffix = ref.getSuffix(value);
                  var roundedValue =
                    Math.abs(value) > 999
                      ? Math.abs(
                          Math.sign(value) * (Math.abs(value) / 1000).toFixed(1)
                        ) + "k"
                      : Math.abs(Math.sign(value) * Math.abs(value));
                  return suffix + "$" + roundedValue;
                },
                display: true
              },
              gridLines: {
                display: true
              }
            }
          ]
        },
        legend: {
          display: true,
          labels: {
            boxWidth: 10,
            fontSize: 20,
            fontStyle: "bold",

            generateLabels: function() {
              var datasets = this.chart.data.datasets;
              var legend = datasets.map((dataset, i) => {
                var label = dataset.label;

                var sum = 0;
                if (label === "Balance") {
                  if (!(ref.currentBalance === "")) {
                    sum = parseFloat(ref.currentBalance);
                  }
                } else if (label === "Average Monthly Revenues") {
                  if (!(ref.monthlyRevenue === "")) {
                    sum = parseFloat(ref.monthlyRevenue);
                  }
                }
                // } else {
                //   sum = dataset.data.reduce((a, b) => a + b, 0);
                // }
                var suffix = ref.getSuffix(sum);
                sum = Math.abs(sum);
                sum = ref.formatBalance(sum);
                return {
                  datasetIndex: i,
                  fillStyle:
                    dataset.pointBackgroundColor || dataset.backgroundColor,
                  strokeStyle: dataset.borderColor,
                  lineWidth: dataset.borderWidth,
                  text: label + ": " + suffix + sum
                };
              });
              return legend;
            }
          }
        },
        tooltips: {
          custom: function(tooltip) {
            if (!tooltip) return;
            // disable displaying the color box;
            tooltip.displayColors = false;
          },
          callbacks: {
            label: function(tooltipItem, data) {
              var value =
                data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
              var suffix = ref.getSuffix(value);
              var absValue = Math.abs(value);
              var date = ref.momentYear(tooltipItem.xLabel);
              if (parseInt(value) >= 1000 || parseInt(value) <= -1000) {
                return date + ": " + suffix + ref.formatBalance(absValue);
              } else {
                return date + ":   " + suffix + "$" + absValue;
              }
            },
            // remove title
            title: function() {
              return;
            }
          }
        }
      };
    }
  }
};
</script>

<style>
.card {
  padding: 10px 10px;
}

.chart-con--title {
  color: #718096;
  font-size: 2em;
  margin-top: 0em;
}
.bcard {
  height: 1300px;
  width: 100%;
  position: relative;
}
/* .chartDiv {
  max-height: 100px;
  max-width: 50px;
} */
.analytics-dropdown {
  float: right;
}
.row1 {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.results-row {
  padding-left: 1.5em;
}

.column1 {
  display: flex;
  flex-direction: column;
  margin-right: 3em;
}
.con-graph {
  max-width: 768px;
  margin: 0 auto;
}
.chart-con {
  margin-bottom: 4em;
  outline: none;
  border: none;
}
.styled-con {
  outline: none;
  border: none;
}
.input-box {
  display: flex;
  flex-direction: column;
}
.input-box--item {
  margin-bottom: 0.5em;
}
.input-btn {
  background-color: #f958ff;
  outline: #f958ff;
  border: #f958ff;
  margin-bottom: 2em;
}
.input-btn:hover {
  background-color: #c168c4;
  outline: #c168c4;
  border: #c168c4;
}

@media screen and (min-width: 768px) {
  .chart-con {
    width: 768px;
    margin: 0 auto;
    margin-bottom: 4em;
  }
  /* .input-box {
    display: flex;
    flex-direction: row;
  } */
}
@media screen and (min-width: 1200px) {
  .ana-graph-card {
    margin: 0 auto;
  }
}
</style>
