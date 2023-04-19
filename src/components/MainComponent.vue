<template>
    <div>
        <CardComponent />
    </div>
</template>

<script>
import CardComponent from './CardComponent.vue';
import { store } from '../storage/store';
export default {
    name: 'MainComponent',
    components: {
        CardComponent
    }
}
</script>

<style lang="scss" scoped>

</style>