<template>
    <div class="my-card mx-2 my-4 col-12 col-sm-6 col-md-4 col-lg-3">
        <img src="https://image.tmdb.org/t/p/w500/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg" :alt="film.title">
        <h4>{{ film.title }}</h4>
    </div>
</template>

<script>
import { store } from '../storage/store';
export default {
    name: 'CardComponent',
    data(){
        store
    },
    props: ['film']
}
</script>

<style lang="scss" scoped>
    .my-card{
        border: 2px solid #fff;
        text-align: center;
        color: #fff;
        width: 280px;
        height: 380px;
    }
    img{
        width: 100%;
    }
</style>