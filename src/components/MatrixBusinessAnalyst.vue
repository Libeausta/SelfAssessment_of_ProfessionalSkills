<template>
  <div class='container'>
    <h3>{{ $t('meta.header') }}</h3>
    <router-link to="/web-developer" class="btn btn-primary">
      Перейти к матрице оценки веб-разработчика
    </router-link>
    <hr>

    <template v-if='isEditable'>
      
    </template>
    <template v-else>
      <b-alert variant='warning' v-model='showHelp' v-html='$t("meta.warn")'></b-alert>
    </template>

    <div v-for='el in allAreas' :key='el.area'>
      <h4>{{ $t(`areas.${el.area}`) }}</h4>
      <br>
      <LevelsTable class='noselect' :alltopics='el.topics'></LevelsTable>
      <br>
    </div>

    <hr>

    <Recomendations></Recomendations>

  </div>
</template>

<script>
import allItemsList from '../assets/data.json';
import Nav from './Nav';
import LevelsTable from './LevelsTable';
import Recomendations from './RecomendationsBusinessAnalyst';

const lastFourAreas = allItemsList.slice(3, 7);

export default {
  name: 'HelloWorld',
  components: {
    Nav,
    LevelsTable,
    Recomendations,
  },
  data() {
    return {
      showHelp: true,
      allAreas: lastFourAreas,
      levels: this.$root.store.state.levels,
    };
  },
  computed: {
    isEditable() {
      return this.$root.store.isOwnLevels;
    },
  },
  i18n: {
    messages: {
      ru: {
        meta: {
          header: 'Матрица оценки компетенций бизнес-аналитика',
        },
      },
    },
  },
};
</script>

<style>
.blockquote {
  padding: .5rem 1rem;
  border-left: .25rem solid #eceeef;
}

.noselect {
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */
}

.modal-body p {
  word-wrap: break-word;
}
</style>
