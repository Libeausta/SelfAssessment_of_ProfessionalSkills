import 'bootstrap/dist/css/bootstrap.css';
import BootstrapVue from 'bootstrap-vue';
import VueI18n from 'vue-i18n';
import Vue from 'vue';

import App from './App';
import router from './router';
import store from './store';

import skills from './assets/skills.json';

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: ((navigator.languages && navigator.languages[0]) || '').substr(0, 2),
  fallbackLocale: 'ru',
  silentFallbackWarn: true,
  messages: {
    ru: {
      levels: skills,
      areas: {
        web_development: 'Верстка и веб-разработка',
        technologies: 'Работа с технологиями',
        management: 'Управление проектами и сотрудниками',
        business_processes: 'Анализ и моделирование бизнес-процессов',
        requirements_collection: 'Сбор и управление требованиями',
        data: 'Работа с данными и аналитикой',
        project_management: 'Управление проектами и продуктами',
      },
      fields: {
        level: 'Уровень',
        topic: 'Тема',
        level0: 'Junior',
        level1: 'Middle	',
        level2: 'Senior',
        level3: 'Lead',
      },
    },
  },
});


new Vue({
  el: '#app',
  data() {
    return {
      store,
    };
  },
  mounted() {
    document.title = 'Матрица компетенций';

    const urlParams = new URLSearchParams(window.location.search);
    const levelsData = urlParams.get('levels');

    if (levelsData) {
      this.store.isOwnLevels = false;
      const data = JSON.parse(atob(levelsData));

      Object.keys(this.store.state.levels).forEach((topic) => {
        this.store.setLevelAction(topic, parseInt(data[topic], 10));
      });
    } else {
      this.store.isOwnLevels = true;

      Object.keys(this.store.state.levels).forEach((topic) => {
        if (localStorage[topic]) {
          this.store.setLevelAction(topic, parseInt(localStorage[topic], 10));
        }
      });
    }
  },
  router,
  i18n,
  components: { App },
  template: '<App/>',
});
