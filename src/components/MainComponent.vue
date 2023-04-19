<template>
    <main>
        <h2 class="text-center py-3">Film Section</h2>
        <div class="container d-flex flex-wrap justify-content-between">
            <CardComponent v-for="(film, index) in store.filmList" :key="film.id" :film="film"/>
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
        color: #fff;
    }
</style>