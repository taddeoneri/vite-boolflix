<template>
    <div class="col-12 col-sm-6 col-md-4 col-lg-3">
        <!-- <img :src="film." :alt="film.title"> -->
        <h4>{{ film.title }}</h4>
    </div>
</template>

<script>
export default {
    name: 'CardComponent',
    props: ['film']
}
</script>

<style lang="scss" scoped>

</style>