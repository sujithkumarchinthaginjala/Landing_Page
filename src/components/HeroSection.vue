<script setup>
import illustration from '../assets/icons/Illustration.png';

</script>

<template>
    <div class="insight_container">
        <div class="insight">
            <div class="insight-text">
                <h1>Lessons and insights<br>
                <span> from 8 years</span></h1>
                <p>Where to grow your business as a photographer: site or social media?</p>
                <button class="primary-button">Register</button>
            </div>
                <img :src="illustration" alt="">
        </div>
        <div class="dots-carousel">
            <span class="dot active"></span>
            <span class="dot"></span>
            <span class="dot"></span>
        </div>
    </div>
</template>

<style scoped lang="scss">
    @use '../assets/styles/Template/HeroSection.scss' as *;
</style>