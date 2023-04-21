<template>
  <div>
    <HeaderComponent @set-search="getData"/>
    
    <MainComponent />
  </div>
</template>

<script>
import { store } from './storage/store';
import axios from 'axios';
import HeaderComponent from './components/HeaderComponent.vue';
import MainComponent from './components/MainComponent.vue';

export default {
    name: 'App',
    components: {
      HeaderComponent,
      MainComponent
    },
    data(){
      return {
        store
      }
    },
    methods: {
      getFilms(){
        store.show = true;
        const url = store.baseUrl + store.endpoint.film;
        const options = {
          params: store.params
        };
        axios.get(url, options).then((res) => {
          store.filmList = res.data.results;
        })
      },
      getSeries(){
        store.show = true;
        const url = store.baseUrl + store.endpoint.serieTv;
        const options = {
          params: store.params
        };
        axios.get(url, options).then((res) => {
          store.serieList = res.data.results;
        })
      },
      getPopularFilm(){
        const url = store.baseUrl + store.endpoint.popularFilm;
        const options = {
          params: store.paramsPopular
        };
        axios.get(url, options).then((res) => {
          store.popularFilmList = res.data.results;
        })
      },
      getPopularSerie(){
        const url = store.baseUrl + store.endpoint.popularSerie;
        const options = {
          params: store.paramsPopular
        };
        axios.get(url, options).then((res) => {
          store.popularSerieList = res.data.results;
        })
      },
      getData(){
        this.getFilms();
        this.getSeries();
      }
    },
    mounted(){
      this.getPopularFilm();
      this.getPopularSerie();
    }
}
</script>

<style lang="scss" scoped>

</style>