<template>
    <main>
        <div class="container mx-auto row justify-content-between">
            <h2 class="text-center my-3">Film Section</h2>
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