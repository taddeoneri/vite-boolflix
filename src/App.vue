<template>
  <div>
    <HeaderComponent />
    
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
        axios.get(url).then((res) => {
          store.filmList = res.data.results;
        })
      },
      getSeries(){
        const url = store.baseUrl + store.endpoint.serieTv;
        axios.get(url).then((res) => {
          store.serieList = res.data.results;
        })
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