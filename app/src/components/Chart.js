import { Line, mixins } from "vue-chartjs";

export default {
  extends: Line,
  mixins: [mixins.reactiveProp],
  props: ["chartData", "options", "styles"],
  watch: {
    chartData: {
      handler: function() {
        this.$data._chart.config.data.datasets[0].backgroundColor = this.gradient;
        this.$data._chart.config.data.datasets[1].backgroundColor = this.gradient2;
        this.$data._chart.update();
      }
    }
  },
  data() {
    return {
      gradient: {},
      gradient2: {}
    };
  },
  mounted() {
    this.gradient = this.$refs.canvas
      .getContext("2d")
      .createLinearGradient(0, 0, 0, 450);
    this.gradient2 = this.$refs.canvas
      .getContext("2d")
      .createLinearGradient(0, 0, 0, 450);

    this.gradient.addColorStop(0, "rgba(138,43,226, 0.9)");
    this.gradient.addColorStop(0.5, "rgba(138,43,226, 0.1)");
    this.gradient.addColorStop(1, "rgba(138,43,226, 0)");

    this.gradient2.addColorStop(0, "rgba(0, 191,255, 0.9)");
    this.gradient2.addColorStop(0.5, "rgba(0, 191,255, 0.1)");
    this.gradient2.addColorStop(1, "rgba(0, 191,255, 0)");

    this.renderChart(this.chartdata, this.options, this.styles);
  },
  methods: {
    color(alpha) {
      return `rgba(0, 216, 255, ${alpha})`;
    }
  }
};
