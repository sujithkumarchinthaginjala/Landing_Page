<script setup>
    import data2 from '../data/data2.json';

    function getImageUrl(filename) {
        return new URL(`../assets/icons/${filename}`, import.meta.url).href
    }

</script>

<template>
<div class="text">
    <div class="text-center">
        <h1>Helping a local <br/>
        <span>business reinvent itself</span></h1>
        <p>We reached here with our hard work and dedication</p>
    </div>
    <div class="text-data">
        <div class="data" v-for="data in data2" :key="data.id">
            <img :src="getImageUrl(data.image)" alt="">
            <div class="text-data1">
                <h1>{{ data.count }}</h1>
                <p>{{ data.title }}</p> 
            </div>
        </div>
    </div>
</div>
</template>

<style scoped lang="scss">

    @use '../assets/styles/Template/MidSection.scss' as *;

</style>