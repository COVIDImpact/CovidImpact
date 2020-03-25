<template>
  <b-container class="chart-con">
    <b-overlay :show="show" rounded="sm" @shown="onShown" @hidden="onHidden">
      <template v-slot:overlay>
        <div class="text-center">
          <h3 id="cancel-label">
            Please enter the following and click 'Compute' to get your impact asessment report...
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
                    >Cash-at-Hand</b>
                  </li>
                  <li>
                    <b
                      v-b-tooltip.hover.right
                      title="Aproxiamte monthly revenue for your firm."
                    >Monthly Revenue</b>
                  </li>
                  <li>
                    <b
                      v-b-tooltip.hover.right
                      title="Aproximate monthly company expenses."
                    >Monthly Costs</b>
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
          <div class="d-flex justify-content-center">
            <b-form-input v-model="currentBalance" placeholder="Cash"></b-form-input>
            <b-form-input v-model="burnRate" placeholder="Costs"></b-form-input>
            <b-form-input v-model="monthlyRevenue" placeholder="Revenue"></b-form-input>
            <!-- <b-dropdown
              split
              split-variant="outline-primary"
              variant="primary"
              :text="selectedScenario"
            >
              <b-dropdown-item @click="selectedScenario = 'Short'" href="#">Short</b-dropdown-item>
              <b-dropdown-item @click="selectedScenario = 'Medium'" href="#">Medium</b-dropdown-item>
              <b-dropdown-item @click="selectedScenario = 'Long'" href="#">Long'</b-dropdown-item>
            </b-dropdown>-->
          </div>
          <div class="text-center">
            <br />
            <b-button
              ref="cancel"
              @click="
                compute();
                show = false;
              "
              variant="primary"
            >Compute</b-button>
            <br />
          </div>
        </div>
      </template>
      <div class="text-center con-graph">
        <div class="row1">
          <div class="column1">
            <Runway></Runway>
          </div>
          <div class="column1">
            <RiskLevel></RiskLevel>
          </div>
        </div>
      </div>

      <b-card class="ana-graph-card medium-shadow bcard styled-con">
        <div class="d-flex justify-content-center">
          <b-form-input v-model="currentBalance" placeholder="Cash-at-Hand"></b-form-input>
          <b-form-input v-model="burnRate" placeholder="Monthly Costs"></b-form-input>
          <b-form-input v-model="monthlyRevenue" placeholder="Monthly Revenue"></b-form-input>
          <b-dropdown
            split
            split-variant="outline-primary"
            variant="primary"
            :text="selectedScenario"
          >
            <b-dropdown-item @click="selectedScenario = 'Short'" href="#">Short</b-dropdown-item>
            <b-dropdown-item @click="selectedScenario = 'Medium'" href="#">Medium</b-dropdown-item>
            <b-dropdown-item @click="selectedScenario = 'Long'" href="#">Long'</b-dropdown-item>
          </b-dropdown>
        </div>
        <div class="text-center">
          <br />
          <b-button @click="compute()" variant="primary">Compute</b-button>
          <br />
        </div>
        <div class="text-center">
          <h3 class="text-black float-left">Cashflow</h3>

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
  BDropdown,
  BDropdownItem,
  BFormInput,
  BOverlay
  // BButton
} from "bootstrap-vue";

export default {
  components: {
    Chart,
    BContainer,
    BCard,
    BDropdown,
    BDropdownItem,
    BFormInput,
    BOverlay,
    Runway,
    RiskLevel
  },
  data() {
    return {
      datacollection: null,
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
      selectedScenario: "Short",
      showChart: "loading",
      show: true,
      balanceData: [100, 125, 150, 180, 100, 80, 50, 50, 40, 70, 100, 100],
      revenueData: [0, 20, 40, 60, 90, 110, 150, 160, 150, 130, 130, 140],
      labels: [],

      isDead: false
    };
  },
  async mounted() {
    var now = moment();
    for (let i = 0; i < 12; i++) {
      this.labels.push(moment(now).format("MMM, YYYY"));
      var month = now.add(1, "M").endOf("month");
      now = month;
    }
    this.labels = this.labels.reverse();

    this.fillData(this.balanceData, this.revenueData, this.labels);
    this.fillOptions();
  },
  methods: {
    // onShown() {
    //   // Focus the cancel button when the overlay is showing
    //   this.$refs.cancel.focus();
    // },
    // onHidden() {
    //   // Focus the show button when the overlay is removed
    //   this.$refs.show.focus();
    // },
    formatBalance(value) {
      if (!Number.isInteger(value)) {
        value = value.toFixed(2);
      }
      return "$" + value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    moment: function(date) {
      return moment(date).format("MMM");
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
          {
            label: "Starting Balance",
            backgroundColor: "#33F9FF",
            borderColor: "#9400D3",
            borderWidth: 3,
            data: balanceData,
            type: "line"
          },
          {
            label: "Average Monthly Revenues",
            backgroundColor: "#9400D3",
            borderColor: "#191970",
            borderWidth: 3,
            data: revenueData,
            type: "line"
          }
        ]
      };
    },
    compute() {
      this.updateCurrentBalance();
      this.fillData(this.balanceData, this.revenueData, this.labels);
    },
    updateCurrentBalance() {
      var updatedBalance = this.currentBalance;
      if (!(updatedBalance === "")) {
        updatedBalance = parseInt(this.currentBalance);
      } else updatedBalance = 0;

      var updatedRevenue = this.monthlyRevenue;
      // var originalRevenue;
      if (!(updatedRevenue === "")) {
        updatedRevenue = parseInt(this.monthlyRevenue);
        // originalRevenue = updatedRevenue;
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
                fontSize: 30,
                userCallback: function(value, index) {
                  if (index % 2 == 0) {
                    return ref.moment(value);
                  } else return "";
                },
                display: true
              },
              gridLines: {
                display: false
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
                display: false
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
                if (label === "Starting Balance") {
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
              if (parseInt(value) >= 1000 || parseInt(value) <= -1000) {
                return (
                  tooltipItem.xLabel +
                  ": " +
                  suffix +
                  ref.formatBalance(absValue)
                );
              } else {
                return tooltipItem.xLabel + ":   " + suffix + "$" + absValue;
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
  height: 650px;
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

.column1 {
  display: flex;
  flex-direction: column;
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
@media screen and (min-width: 768px) {
  .chart-con {
    width: 768px;
    margin: 0 auto;
    margin-bottom: 4em;
  }
}
@media screen and (min-width: 1200px) {
  .ana-graph-card {
    margin: 0 auto;
  }
}
</style>
