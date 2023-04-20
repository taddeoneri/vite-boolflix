<template>
    <main>
        <h2 class="text-center">Film Section</h2>
        <div class="film d-flex justify-content-between">
            <CardComponent v-for="(film, index) in store.filmList" :key="film.id" :title="film.title" :release="film.release_date" :vote="film.vote_average" :language="film.original_language" :image="film.poster_path"/>
        </div>
        <h2 class="text-center">Serie TV Section</h2>
        <div class="container d-flex flex-wrap justify-content-between">
            <CardComponent v-for="(film, index) in store.serieList" :key="film.id" :title="film.name" :release="film.first_air_date" :vote="film.vote_average" :language="film.original_language" :image="film.poster_path"/>
        </div>
    </main>
    
</template>

<script>
import CardComponent from './CardComponent.vue';
import { store } from '../storage/store';
export default {
    name: 'MainComponent',
    data(){
        return {
            store
        }
    },
    components: {
        CardComponent
    }
}
</script>

<style lang="scss" scoped>
    main{
        padding: 40px 0px;
        background-color: #7a7a7a;
    }
    h2{
        font-size: 3rem;
        padding-top: 55px;
        color: #fff;
    }
    .film{
        overflow-x: auto;
    }
</style>