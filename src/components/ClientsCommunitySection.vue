<script setup>
    import logo2 from '../assets/icons/Logo(2).png';
    import logo3 from '../assets/icons/Logo(3).png';
    import logo4 from '../assets/icons/Logo(4).png';
    import logo5 from '../assets/icons/Logo(5).png';
    import logo6 from '../assets/icons/Logo(6).png';
    import logo7 from '../assets/icons/Logo(7).png';
    import logo8 from '../assets/icons/Logo(8).png';
    import data1 from '../data/data1.json';

    function getImageUrl(filename) {
        return new URL(`../assets/icons/${filename}`, import.meta.url).href;
    }
</script>

<template>
    <div class="clients">
        <div class="clients-text">
            <h1>Our Clients</h1>
            <p>We have been working with some Fortune 500+ clients</p>
        </div>
        <div class="clients-logo">
            <img :src="logo2" alt="">
            <img :src="logo3" alt="">
            <img :src="logo4" alt="">
            <img :src="logo5" alt="">
            <img :src="logo6" alt="">
            <img :src="logo7" alt="">
            <img :src="logo8" alt="">
        </div>
    </div>
    <div class="community">
        <h1>Manage your entire community <br/>in a single system</h1>
        <p>Who is Nextcent suitable for?</p>
    </div>
    <div class="community_card">
        <div v-for="item in data1" :key="item.id" class="communitydata">
            <img :src="getImageUrl(item.image)" alt="">
            <h1>{{ item.title }}</h1>
            <p>{{ item.text }}</p>
        </div>
    </div>
</template>

<style scoped lang="scss">

    @use '../assets/styles/Template/ClientsCommunitySection.scss' as *;

</style>