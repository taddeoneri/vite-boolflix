<template>
    <div>
        <CardComponent v-for="(film, index) in store.filmList" :key="film.id"/> <!-- :film="film"  -->
        
    </div>
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

</style>