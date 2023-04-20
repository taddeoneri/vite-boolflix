<template>
    <header>
        <div class="header-top d-flex justify-content-between align-items-center p-3">
            <h1 class="text-uppercase text-danger">Boolflix</h1>
            <div class="d-flex">
                <input type="text" class="form-control mx-2" id="filmName" v-model="store.params.query" @keyup.enter="$emit('setSearch')">
                <button class="btn btn-danger" @click="$emit('setSearch')">Search</button>
            </div>
        </div>
        <JumboComponent />
    </header>
</template>

<script>
import JumboComponent from './JumboComponent.vue';
import { store } from '../storage/store';

export default {
    name: "HeaderComponent",
    data(){
        return {
            store
        }
    },
    components: { JumboComponent },
    methods: {
    
    }
}
</script>

<style lang="scss" scoped>
    .header-top{
        background-color: #141414;
    }
</style>