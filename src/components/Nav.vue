<script setup>
    import logo from '@/assets/icons/Logo (1).png';
    import { ref } from 'vue';

    const isMenuOpen = ref(false);

    function toggleMenu() {
        isMenuOpen.value = !isMenuOpen.value;
    }

    function closeMenu() {
        isMenuOpen.value = false;
    }
</script>

<template>
    <div class="wrapper">
        <img class="logo" :src="logo" alt=""/>
        <div class="nav-ele">
            <ul>
                <a>Home</a>
                <a>Service</a>
                <a>Feature</a>
                <a>Product</a>
                <a>Testimonial</a>
                <a>FAQ</a>
            </ul>
        </div>
        <div class="log_sign">
            <div class="login">
                <button class="primary-button">Login</button>
            </div>
            <div class="signup">
                <button class="primary-button">Sign up</button>
            </div>
        </div>

        <div class="menu-icon" @click="toggleMenu"> 
            <font-awesome-icon :icon="['fas', 'bars']" style="color:#4CAF4F;" size="sm" class="menu-logo"/>
        </div>
        
        <div class="mobile-menu" v-if="isMenuOpen" :class="{open: isMenuOpen}">
            <font-awesome-icon @click="closeMenu" :icon="['fas', 'xmark']" style="color:#4CAF4F;" />
            <ul>
                <a @click="closeMenu">Home</a>
                <a @click="closeMenu">Service</a>
                <a @click="closeMenu">Feature</a>
                <a @click="closeMenu">Product</a>
                <a @click="closeMenu">Testimonial</a>
                <a @click="closeMenu">FAQ</a>
                <a @click="closeMenu">Sign up</a>
                <a @click="closeMenu">Login</a>
            </ul>
        </div>
    </div>
</template>

<style scoped lang="scss">
    @use '../assets/styles/Template/Nav.scss' as *;
</style>