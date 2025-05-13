<script setup>
    import customericon from '../assets/icons/Customer_icon.png';
    import logo2 from '../assets/icons/clients_logo/Logo(2).png';
    import logo3 from '../assets/icons/clients_logo/Logo(3).png';
    import logo4 from '../assets/icons/clients_logo/Logo(4).png';
    import logo5 from '../assets/icons/clients_logo/Logo(5).png';
    import logo6 from '../assets/icons/clients_logo/Logo(6).png';
    import logo7 from '../assets/icons/clients_logo/Logo(7).png';
    import data3 from '../data/data3.json';
</script>

<template>
    <div class="customers">
        <img :src="customericon" alt="" >
            <div class="customers-text">
                <p>Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.</p>
                <h6>Tim Smith</h6>
                <span>British Dragon Boat Racing Association</span>
                <div class="customers-logo">
                    <img :src="logo2" alt="">
                    <img :src="logo3" alt="">
                    <img :src="logo4" alt="">
                    <img :src="logo5" alt="">
                    <img :src="logo6" alt="">
                    <img :src="logo7" alt="">  
                    <button class="no_bg-button">Meet all customers<font-awesome-icon :icon="['fas', 'arrow-right']"  style="color: " /></button> 
                </div>
            </div>
    </div>
    <div class="last-section">
        <div class="last-section-text">
            <h1>Caring is the new marketing</h1>
            <p>The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.​</p>
        </div>
        <div class="cards_container">
            <div class="cards" v-for="item in data3" :key="item.id">
                <img :src="item.image" alt="">
                <div class="mini-card">
                    <p>{{ item.text }}</p>
                    <button class="no_bg-button">Meet all customers<font-awesome-icon :icon="['fas', 'arrow-right']" style="color: " /></button>
                </div>
            </div>
        </div>
    </div>
         <!-- </div> -->
</template>

<style scoped lang="scss">

  @use '../assets//styles/Template/CustomerSection.scss' as *;
  
</style>