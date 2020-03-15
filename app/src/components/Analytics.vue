<template>
  <b-container>
    <b-card class="ana-graph-card medium-shadow">
      <div class="text-center hst-cashflow-chrt">
        <h3 class="text-black float-left">Cashflow</h3>
        <b-dropdown
          split
          split-variant="outline-primary"
          variant="primary"
          :text="selectedItem"
          class="analytics-dropdown m-2"
        >
          <b-dropdown-item
            @click="
              getYear();
              selectedItem = 'Last Year';
            "
            href="#"
            >Last Year</b-dropdown-item
          >
          <b-dropdown-item
            @click="
              getQuarter();
              selectedItem = 'Last Quarter';
            "
            href="#"
            >Last Quarter</b-dropdown-item
          >
          <b-dropdown-item
            @click="
              getMonth();
              selectedItem = 'Last Month';
            "
            href="#"
            >Last Month</b-dropdown-item
          >
        </b-dropdown>

        <b-dropdown
          split
          split-variant="outline-primary"
          variant="primary"
          :text="selectedCountry"
          class="analytics-dropdown m-2"
        >
          <b-dropdown-item @click="selectedCountry = 'Canada'" href="#"
            >Canada</b-dropdown-item
          >
          <b-dropdown-item @click="selectedCountry = 'United States'" href="#"
            >United States</b-dropdown-item
          >
          <b-dropdown-item @click="selectedCountry = 'Mexico'" href="#"
            >Mexico</b-dropdown-item
          >
        </b-dropdown>

        <b-dropdown
          split
          split-variant="outline-primary"
          variant="primary"
          :text="selectedIndustry"
          class="analytics-dropdown m-2"
        >
          <b-dropdown-item @click="selectedIndustry = 'Retail'" href="#"
            >Retail</b-dropdown-item
          >
          <b-dropdown-item @click="selectedIndustry = 'SaaS'" href="#"
            >SaaS</b-dropdown-item
          >
          <b-dropdown-item @click="selectedIndustry = 'Restaurant'" href="#"
            >Restaurant</b-dropdown-item
          >
        </b-dropdown>
        <div>
          <chart
            :height="200"
            :chartData="datacollection"
            :options="chartoptions"
          ></chart>
        </div>
      </div>
    </b-card>
    <br />
  </b-container>
</template>

<script>
import Chart from "./Chart";
import moment from "moment";

import { BContainer, BCard, BDropdown, BDropdownItem } from "bootstrap-vue";

export default {
  components: {
    Chart,
    BContainer,
    BCard,
    BDropdown,
    BDropdownItem
  },
  data() {
    return {
      datacollection: null,
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
      selectedItem: "Last Year",
      selectedCountry: "Canada",
      selectedIndustry: "Retail",
      showChart: "loading",
      cashInData: [
        500,
        400,
        300,
        400,
        500,
        600,
        700,
        800,
        900,
        1000,
        1200,
        1500
      ],
      cashOutData: [
        600,
        500,
        400,
        350,
        300,
        250,
        225,
        200,
        300,
        500,
        600,
        1000
      ],
      labels: [
        "Mar, 2020",
        "Feb, 2020",
        "Jan, 2020",
        "Dec, 2019",
        "Nov, 2019",
        "Oct, 2019",
        "Sep, 2019",
        "Aug, 2019",
        "Jul, 2019",
        "Jun, 2019",
        "May, 2019",
        "Apr, 2019"
      ]
    };
  },
  async mounted() {
    this.fillData(this.cashInData, this.cashOutData, this.labels);
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
    getYear() {
      var cashInDataYear = this.cashInData;
      var cashOutDataYear = this.cashOutData;
      var labelsYear = this.labels;

      this.fillData(cashInDataYear, cashOutDataYear, labelsYear);
    },
    getQuarter() {
      var cashInDataQuarter = this.cashInData.slice(0, 3);
      var cashOutDataQuarter = this.cashOutData.slice(0, 3);
      var labelsQuarter = this.labels.slice(0, 3);
      this.fillData(cashInDataQuarter, cashOutDataQuarter, labelsQuarter);
    },
    getMonth() {
      var cashInDataQuarter = this.cashInData.slice(0, 1);
      var cashOutDataQuarter = this.cashOutData.slice(0, 1);
      var labelsQuarter = this.labels.slice(0, 1);
      this.fillData(cashInDataQuarter, cashOutDataQuarter, labelsQuarter);
    },
    getSuffix(sum) {
      var suffix = "";
      if (sum < 0) {
        suffix = "-";
      }
      return suffix;
    },
    fillData(cashInData, cashOutData, labels) {
      this.datacollection = {
        labels: labels,
        datasets: [
          {
            label: "Current Balance",
            backgroundColor: "#33F9FF",
            borderColor: "#9400D3",
            borderWidth: 3,
            data: cashInData,
            type: "line"
          },
          {
            label: "Average Monthly Expenses",
            backgroundColor: "#9400D3",
            borderColor: "#191970",
            borderWidth: 3,
            data: cashOutData,
            type: "line"
          }
        ]
      };
    },
    fillOptions() {
      var ref = this;
      this.chartoptions = {
        onClick: this.handle,
        responsive: true,
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
                var sum = dataset.data.reduce((a, b) => a + b, 0);
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
.analytics-dropdown {
  float: right;
}
@media screen and (min-width: 1200px) {
  .ana-graph-card {
    width: 1000px;
    margin: 0 auto;
  }
}
</style>
