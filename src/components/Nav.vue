<script setup>
    import logo from '@/assets/icons/Logo (1).png';
    import { ref, onMounted } from 'vue'

    const isDark = ref(false)

    onMounted(() => {
    isDark.value = document.documentElement.getAttribute('data-theme') === 'dark'
    })

    const isMenuOpen = ref(false);

    function toggleMenu() {
        isMenuOpen.value = !isMenuOpen.value;
    }

    function closeMenu() {
        isMenuOpen.value = false;
    }

    function toggleTheme() {
        const html = document.documentElement;
        const current = html.getAttribute('data-theme');
        const next = current === 'dark' ? 'light' : 'dark';     
        html.setAttribute('data-theme', next);
        console.log(`Switched to ${next} theme`);
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
        <label class="theme-switch">
            <input type="checkbox" @change="toggleTheme" :checked="isDark" />
            <span class="slider"></span>
        </label>

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