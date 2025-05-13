<script setup>
    import logo from '@/assets/icons/Logo (1).png';
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
    </div>
</template>

<style scoped lang="scss">
    @use '../assets/styles/Template/Nav.scss' as *;
</style>