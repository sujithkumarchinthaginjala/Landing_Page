<script setup>
import illustration from '../components/icons/Illustration.png';

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
    @import '../assets/styles/main.scss';

.insight_container {
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-direction: column;
        width: 100%;
        height: 599px;
        background-color: $silver;
        padding: 30px 0px;
        gap: 60px;
    }

    .insight {
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-direction: row;
        width: 90%; 
    }

    .insight-text {
        flex-direction: column;
    
    h1{
        color: $d-grey;
        font-family: $primary-font;
        font-size: $headline1-size;
        font-weight: 600;
        margin:0;
    }
        
    span {
        font-family: $primary-font;
        font-weight: 600;
        color: $primary;
        }
        
    p {
        font-family: $primary-font;
        font-size: $body2-size;
        font-weight: 400;
        color: $grey;
        
        }

    .primary-button {
        @include apply-button($primary-Medium);
        margin-top: 30px;
        @include button-hover;
    }
    }

    .dots-carousel {
        display: flex;
        justify-content: center;
        align-items: end;
        gap: 8px;
        // height: 

    .dot {
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background-color: $grey; 
        opacity: 0.5;

        &.active {
        background-color: $primary; 
        opacity: 1;
            }
        }
    }
</style>