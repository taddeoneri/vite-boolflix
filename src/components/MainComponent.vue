<template>
    <main>
        
        <div :class="store.show === true ? 'my-container' : 'd-none'">
            <h2>Movies</h2>
            <div class="d-flex justify-content-between">
                <CardComponent v-for="(film, index) in store.filmList" :key="film.id" :title="film.title" :release="film.release_date" :vote="film.vote_average" :language="film.original_language" :image="film.poster_path" :imagehover="film.backdrop_path"/>
            </div>
        </div>
        <div :class="store.show === true ? 'my-container' : 'd-none'">
            <h2>Serie TV</h2>
            <div class="d-flex justify-content-between">
                <CardComponent v-for="(film, index) in store.serieList" :key="film.id" :title="film.name" :release="film.first_air_date" :vote="film.vote_average" :language="film.original_language" :image="film.poster_path" :imagehover="film.backdrop_path"/>
            </div>
        </div>
        <div class="my-container">
            <h2>Most popular movies</h2>
            <div class="d-flex justify-content-between">
                <CardComponent v-for="(film, index) in store.popularFilmList" :key="film.id" :title="film.title" :release="film.release_date" :vote="film.vote_average" :language="film.original_language" :image="film.poster_path" :imagehover="film.backdrop_path"/>
            </div>
        </div>
        <div class="my-container">
            <h2>Most popular serie TV</h2>
            <div class="d-flex justify-content-between">
                <CardComponent v-for="(film, index) in store.popularSerieList" :key="film.id" :title="film.name" :release="film.first_air_date" :vote="film.vote_average" :language="film.original_language" :image="film.poster_path" :imagehover="film.backdrop_path"/>
            </div>
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
        padding: 40px 0px 40px 20px;
        background-color: #141415;
    }
    h2{
        font-size: 2.2rem;
        padding-top: 55px;
        color: #fff;
    }
    .my-container{
        overflow-x: auto;
        width: 100%;
        height: 620px;
    }
    .my-container::-webkit-scrollbar{
        width: 50px;
        height: 10px;
    }
    .my-container::-webkit-scrollbar-thumb {
        background-color: #dc3545;
        border-radius: 20px;
    }
</style>