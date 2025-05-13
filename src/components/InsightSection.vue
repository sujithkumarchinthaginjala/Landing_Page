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

     @use '../assets/styles/Template/InsightSection.scss' as *;

</style>
  