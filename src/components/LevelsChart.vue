<script>
import { Radar } from 'vue-chartjs';

export default {
  extends: Radar,
  props: ['chartdata', 'options'],
  computed: {
    data() {
      return this.chartdata;
    },
  },
  methods: {
    render() {
      this.renderChart(this.data, this.options);
    },
  },
  watch: {
    data() {
      this.render();
    },
  },
  mounted() {
    this.render();
  },
};
</script>