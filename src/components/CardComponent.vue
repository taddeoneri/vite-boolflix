<template>
    <div v-if="!show" class="my-card mx-2 my-4 col-12 col-sm-6 col-md-4 col-lg-3" @mouseover="show = true" @mouseleave="show = false">
        <img class="img-fluid" :src="store.baseImg + image" :alt="title">
    </div>
    <div v-else="show" class="my-card mx-2 my-4 col-12 col-sm-6 col-md-4 col-lg-3 d-flex flex-column" @mouseover="show = true" @mouseleave="show = false">
        <img class="img-card" :src="store.baseImg + imagehover" :alt="title">
        <div class="id-flex align-items-center">
            <h4>{{ title }}</h4>
            <p>{{ release }}</p>
            <h6>{{ vote }}</h6>
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
</style>