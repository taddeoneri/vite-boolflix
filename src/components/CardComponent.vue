<template>
    <div v-if="!show" class="my-card mx-2 my-4 col-12 col-sm-6 col-md-4 col-lg-3" @mouseover="show = true" @mouseleave="show = false">
        <img class="img-fluid" :src="store.baseImg + image" :alt="title">
    </div>
    <div v-else="show" class="my-card mx-2 my-4 col-12 col-sm-6 col-md-4 col-lg-3 d-flex flex-column" @mouseover="show = true" @mouseleave="show = false">
        <img class="img-card" :src="store.baseImg + imagehover" :alt="title">
        <div class="info p-2 d-flex flex-column justify-content-center align-items-center">
            <h4>{{ title }}</h4>
            <p>{{ release }}</p>
            <div class="d-flex">
                <i class="fa-star d-flex" v-for="n in 5" :class="(n <= Math.round(vote / 2)) ? 'fa-solid' : 'fa-regular'"></i>
            </div>
            <p>{{ language }}</p>
        </div>
    </div>
   
</template>

<script>
import { store } from '../storage/store';
export default {
    name: 'CardComponent',
    data(){
        return {
            store,
            show: false
        }
    },
    props: [
        'title',
        'release',
        'vote',
        'language',
        'image',
        'imagehover'
    ]
}
</script>

<style lang="scss" scoped>
    .my-card{
        text-align: center;
        color: #fff;
        width: 280px;
        height: 380px;
        cursor: pointer;
        transition: all .3s ease-in-out;
        background-color: black;
        border-radius: 10px;
        overflow: hidden;
    }
    .my-card:hover{
        transform: scale(1.5);
    }
    img{
        border-radius: 10px;
    }
    .img-card{
        width: 100%;
        height: 50%;
    }
    .info{
        width: 100%;
        height: 50%;
    }
    h4{
        font-size: 1.3rem;
    }
    i{
        color: yellow;
    }
</style>