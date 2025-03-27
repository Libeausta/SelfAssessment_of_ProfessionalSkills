import Vue from 'vue';

export default Vue.observable({
  debug: false,
  isOwnLevels: true,
  state: {
    levels: {
      html_css: -1,
      javascript: -1,
      php: -1,
      data_bases: -1,
      bitrix: -1,
      linux: -1,
      git: -1,
      teamwork: -1,
      initiative: -1,
      base_business_analysis: -1,
      business_process_modeling: -1,
      optimization_business_processes: -1,
      collecting_requirements: -1,
      formalization_requirements: -1,
      prioritization: -1,
      data_interpretation: -1,
      data_analysis: -1,
      base_project_management: -1,
      product_management: -1
    },
  },
  setLevelAction(topic, newLevel) {
    if (this.isOwnLevels) {
      localStorage[topic] = newLevel;
    }
    this.state.levels[topic] = newLevel;
  },
});
