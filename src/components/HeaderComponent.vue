<template>
    <header>
        <div class="header-top d-flex justify-content-between align-items-center p-3">
            <h1 class="text-uppercase text-danger">Boolflix</h1>
            <div>
                <input type="text">
                <button>Search</button>
            </div>
        </div>
        <JumboComponent />
    </header>
</template>

<script>
import JumboComponent from './JumboComponent.vue';
export default {
    name: "HeaderComponent",
    components: { JumboComponent }
}
</script>

<style lang="scss" scoped>
    .header-top{
        background-color: #141414;
    }
</style>