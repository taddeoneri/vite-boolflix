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
          console.log(store.filmList)
        })
      }
    },
    mounted(){
      this.getFilms();
    }
}
</script>

<style lang="scss" scoped>

</style>