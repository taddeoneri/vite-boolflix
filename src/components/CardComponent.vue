<template>
    <div class="my-card mx-2 my-5 col-12 col-sm-6 col-md-4 col-lg-3">
        <img :src="store.baseImg + film.poster_path" :alt="film.title">
    </div>
</template>

<script>
import { store } from '../storage/store';
export default {
    name: 'CardComponent',
    data(){
        return {
            store
        }
    },
    props: ['film']
}
</script>

<style lang="scss" scoped>
    .my-card{
        
        text-align: center;
        color: #fff;
        width: 280px;
        height: 380px;
    }
    img{
        border: 2px solid #fff;
        width: 100%;
        height: 100%;
    }
</style>