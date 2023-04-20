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
        const url = store.baseUrl + store.endpoint.film;
        const options = {
          params: store.params
        };
        axios.get(url, options).then((res) => {
          store.filmList = res.data.results;
        })
      },
      getSeries(){
        const url = store.baseUrl + store.endpoint.serieTv;
        const options = {
          params: store.params
        };
        axios.get(url, options).then((res) => {
          store.serieList = res.data.results;
        })
      },
      getData(){
        this.getFilms();
        this.getSeries();
      }
    },
    mounted(){
      this.getFilms();
      this.getSeries();
    }
}
</script>

<style lang="scss" scoped>

</style>