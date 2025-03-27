import Vue from 'vue';
import Router from 'vue-router';
import CompetencyMatrix from '@/components/CompetencyMatrix';
import MatrixWebDeveloper from '@/components/MatrixWebDeveloper';
import MatrixBusinessAnalyst from '@/components/MatrixBusinessAnalyst';


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '*',
      name: 'CompetencyMatrix',
      component: CompetencyMatrix,
    },
    {
      path: '/web-developer',
      name: 'MatrixWebDeveloper',
      component: MatrixWebDeveloper,
    },
    {
      path: '/business-analyst',
      name: 'MatrixBusinessAnalyst',
      component: MatrixBusinessAnalyst,
    },
  ],
  mode: 'history',
});
