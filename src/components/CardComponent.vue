<template>
    <div class="my-card mx-2 my-4 col-12 col-sm-6 col-md-4 col-lg-3" @mouseover="show = true" @mouseleave="show = false">
        <div class="box-image">
            <img :src="store.baseImg + image" :alt="title">
        </div>
            <div :class="show === true ? '' : 'd-none'">
                <h3>{{ title }}</h3>
                <p>{{ release }}</p>
                <h4>{{ vote }}</h4>
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
        'image'
    ]
}
</script>

<style lang="scss" scoped>
    .my-card{
        border: 2px solid #fff;
        text-align: center;
        color: #fff;
        width: 280px;
        height: 380px;
        cursor: pointer;
        transition: all .2s ease-in-out;
    }
    .my-card:hover{
        transform: scale(1.5);
    }
    img{
        
        width: 100%;
        height: 100%;
    }
</style>