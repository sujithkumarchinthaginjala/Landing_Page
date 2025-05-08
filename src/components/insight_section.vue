<script setup>
  defineProps({
    image: String,
    heading: String,        // Allow HTML like <br> or <span>
    description: String,
    buttonText: {
      type: String,
      default: 'Learn More'
    }
  });
  </script>


<template>
    <div class="cont-insight">
        <div>
            <img :src="image" alt="" />
        </div>
            <div class="insight-text1">
                <h1 v-html="heading"></h1>
                <p>{{ description }}</p>
            <button class="primary-button">{{ buttonText }}</button>
        </div>
    </div>
</template>
  
  
<style scoped lang="scss">
     @import '../assets/styles/main.scss';

     .cont-insight {
        @include flex-around;
        flex-direction: row;
        width: 90%;
        height: 599px;

    }

    .insight-text1{
        flex-direction: column;
        width: 600px;

        h1{
            color: $d-grey;
            font-family: $primary-font;
            font-size: $headline2-size;
            font-weight: 600;
            margin: 0;
        }

        p{
            font-family: $primary-font;
            font-size: $body3-size;
            font-weight: 400;
            color: $grey;
        }

        .primary-button {
            @include apply-button($primary-Medium);
            margin-top: 40px;
            @include button-hover;
    }
    }
</style>
  