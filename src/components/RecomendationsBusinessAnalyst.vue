<template>
  <div class='container-fluid'>


    <br>
    <LevelsChart :chartdata='chartData' :options='chartOptions' class="custom-chart-size2"></LevelsChart>
  </div>
</template>

<script>
import LevelsChart from './LevelsChart';
import allItemsList from '../assets/data.json';

const lastFourAreas = allItemsList.slice(3, 7);

export default {
  name: 'Recomendations',
  components: {
    LevelsChart,
  },
  data() {
    return {
      allAreas: lastFourAreas,
      levels: this.$root.store.state.levels,
      
      chartOptions: {
        responsive: true,
        scales: {
          r: {
            min: 0,  
            max: 3,
          },
        },
      },
    };
  },
  
  computed: {
    chartData() {
      const datasets = [];
      const categoryColors = {
        business_processes: 'rgba(0, 123, 255, 0.5)',
        requirements_collection: 'rgba(255, 242, 0, 0.5)',
        data: 'rgba(40, 167, 69, 0.5)',
        project_management: 'rgba(220, 53, 69, 0.5)',
      };

      const labels = new Set();

      this.allAreas.forEach((el) => {
        el.topics.forEach((topic) => {
          labels.add(this.$t(`levels.${topic}.name`)); 
        });
      });

      labels.forEach(label => labels.add(label));
      
      this.allAreas.forEach((el) => {
        const data = []; 
        labels.forEach((label) => {

          const topic = el.topics.find(t => this.$t(`levels.${t}.name`) === label);
          data.push(topic ? this.levels[topic] : 0);
        });

        datasets.push({
          label: this.$t(`areas.${el.area}`),
          data,
          backgroundColor: categoryColors[el.area],
          borderColor: categoryColors[el.area].replace('0.5', '1'),
          borderWidth: 2,
          pointBackgroundColor: categoryColors[el.area],
        });
      });

      return {
        labels: Array.from(labels),
        datasets,
      };
    },
  },

  methods: {
    getRandomColor() {
      const letters = '0123456789ABCDEF'.split('');
      let color = '#';
      for (let i = 0; i < 6; i += 1) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return `${color}aa`;
    },
  },
  i18n: {
    messages: {
      ru: {
        recomendations: {
          header: '',
          description: '',
        },
      },
    },
  },
};
</script>
