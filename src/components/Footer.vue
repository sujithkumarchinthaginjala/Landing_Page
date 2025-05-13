<script setup>
    import logo  from '../assets/icons/Logo.png';
    import social_icon1 from '../assets/icons/social_icons/social_icon1.png';
    import social_icon2 from '../assets/icons/social_icons/social_icon2.png';
    import social_icon3 from '../assets/icons/social_icons/social_icon3.png';
    import social_icon4 from '../assets/icons/social_icons/social_icon4.png';
</script>

<template>
    <div class="footer-wrapper">
        <div class="footer-content">
            <h1>Pellentesque suscipit fringilla libero eu.</h1>
            <button class="primary-button">Get a Demo <font-awesome-icon :icon="['fas', 'arrow-right']" style="color: #FFFFFF" /></button>
        </div>
        <div class="footer-main">
            <div class="footer-logo">
                <img :src=logo alt="Logo" class="logo" />
                <div class="footer-text">
                    <p>Copyright © 2020 Nexcent ltd.</p>
                    <p>All rights reserved</p>
                </div>
                <div class="social-icons">
                    <img :src=social_icon1 alt="Social Icon 1" class="social-icon" />
                    <img :src=social_icon2 alt="Social Icon 2" class="social-icon" />
                    <img :src=social_icon3 alt="Social Icon 3" class="social-icon" />
                    <img :src=social_icon4 alt="Social Icon 4" class="social-icon" />
                </div>
            </div>
            <div class="footer-nav">
                <div class="list">
                    <h1>Company</h1>
                    <p>About us</p>
                    <p>Blog</p>
                    <p>Contact us</p>
                    <p>Pricing</p>
                    <p>Testimonials</p>
                </div>

                <div class="list">
                    <h1>Support</h1>
                    <p>Help center</p>
                    <p>Terms of service</p>
                    <p>Legal</p>
                    <p>Privacy policy</p>
                    <p>Status</p>
                </div>

                <div class="email">
                    <h1>Stay up to date</h1>
                    <div class="send-input-wrapper">
                        <input
                        type="text"
                        class="send-input"
                        placeholder="Your email address"
                        @keyup.enter="submitInput"
                        />
                        <button class="send-button" @click="submitInput">
                            <font-awesome-icon :icon="['fas', 'paper-plane']" style="color: #FFFFFF" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">

    @use '../assets/styles/Template/Footer.scss' as *;

</style>