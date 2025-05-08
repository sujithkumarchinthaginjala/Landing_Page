<script setup>
    import { SassColor } from 'sass';
import logo  from '../components/icons/Logo.png';
    import social_icon1 from '../components/icons/social_icons/social_icon1.png';
    import social_icon2 from '../components/icons/social_icons/social_icon2.png';
    import social_icon3 from '../components/icons/social_icons/social_icon3.png';
    import social_icon4 from '../components/icons/social_icons/social_icon4.png';
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
    @import '../assets/styles/font';
    @import '../assets/styles/typography';
    @import '../assets/styles/colors';
    @import '../assets/styles/mixins';
    @import '../assets/styles/buttons';
    
    .footer-wrapper {
        @include flex-start;
        flex-direction: column;
        width: 100%;
        height: 628px; 
        background-color: $silver;

        .footer-content {
            @include flex-around;
            flex-direction: column;
            width: 50%;
            height: 300px;
            text-align: center;

            h1{
                @include h($headline1-size);
            }

            .primary-button {
                @include apply-button($primary-MediumIcon);
                @include button-hover;
            }
        }
    }

    .footer-main{
        @include flex-around;
        flex-direction: row;
        width: 100%;
        height: 328px;
        background-color: $black;

        .footer-logo{
            display: flex;
            justify-content: space-between;
            align-items: start;
            flex-direction: column;
            width: 350px;
            height: 180.5px;

            .footer-text{
                flex-direction: column;
                width: 100%;
                text-align: start;

                p{
                    font-family: $primary-font;
                    font-size: $body2-size;
                    font-weight: 300;
                    color: $silver;
                    margin: 10px;

                }
            }

            .social-icons{
                @include flex-between;
                flex-direction: row;
                width: 50%;
            }
        }

        .footer-nav{
            display: flex;
            justify-content: space-between;
            align-items: start;
            flex-direction: row;
            width: 635px;
            height: 200px;

            .list{
                display: flex;
                justify-content: space-between;
                align-items: start;
                flex-direction: column;
                width: 160px;
                height: 200px;
                text-align: start;

                h1{
                    @include h($headline4-size, $white);
                    margin-bottom: 10px;
                }

                p{
                    font-family: $primary-font;
                    font-size: $body2-size;
                    font-weight: 300;
                    color: $silver;
                    margin: 0;
                }
            }

            .email{
                display: flex;
                width: 255px;
                justify-content: start;
                align-items: start;
                flex-direction: column;
                gap: 15px;

                h1{
                    @include h($headline4-size, $white);
                    margin-bottom: 10px;
                }

                     .send-input-wrapper {
                        position: relative;
                        width: 255px;
                        // margin: auto;
                        }

                        .send-input {
                            width: 240px;
                            height: 40px;
                            font-size: 1rem;
                            border: none;
                            border-radius: 10px;
                            outline: none;
                            background-color: $d-grey;
                            padding: 0px 10px
                        }

                        .send-button {
                            position: absolute;
                            right: 0.5rem;
                            top: 50%;
                            transform: translateY(-50%);
                            font-size: 1.25rem;
                            border: none;
                            background: none;
                            cursor: pointer;
                        }
                }
            }
            
    }
</style>