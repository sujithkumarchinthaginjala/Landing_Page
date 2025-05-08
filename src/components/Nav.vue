<script setup>
    import logo from '@/components/icons/Logo (1).png';
</script>

<template>
    <div class="wrapper">
        <img class="logo" :src="logo" alt=""/>
        <div class="nav-ele">
            <ul>
                <li>Home</li>
                <li>Service</li>
                <li>Feature</li>
                <li>Product</li>
                <li>Testimonial</li>
                <li>FAQ</li>
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
    @import '../assets/styles/main.scss';

    .wrapper {
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-direction: row;
        width: 100%;
        height: 84px; 
        background-color: $silver;

        & .nav-ele {
            display: flex;
            justify-content: center;
            align-items: center;

            ul {
                display: flex;
                justify-content: space-between;
                align-items: center;
                flex-direction: row;
                text-decoration: none;
                gap: 50px;
                list-style: none;

                li {
                    font-family: $primary-font;
                    font-size: $body2-size;
                    color: $text-gray;
                    cursor: pointer;
                }
            }
        }
    }

    .logo {
        width: 155px;
        height: 24px;
    }

    .log_sign {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;

        .login {
            width: 77px;
            height: 40px;
            background-color: $silver;
            border-radius: 5px;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;

            .primary-button {
                @include apply-button($primary-small_no_bg);
                // margin-top: 40px;
                @include button-hover($silver, $primary-dark, $underline:true);
            }
        }

        .signup {
            width: auto;
            height: 40px;
            // background-color: $primary;
            border-radius: 5px;
            display: flex;
            justify-content: center;
            align-items: center;
            // padding: 10px 20px;
            cursor: pointer;
            

            .primary-button {
                @include apply-button($primary-small);
                // margin-top: 40px;
                @include button-hover;
            }
        }
    }
</style>