<script setup>
    import customericon from '../components/icons/Customer_icon.png';
    import logo2 from '../components/icons/clients_logo/Logo(2).png';
    import logo3 from '../components/icons/clients_logo/Logo(3).png';
    import logo4 from '../components/icons/clients_logo/Logo(4).png';
    import logo5 from '../components/icons/clients_logo/Logo(5).png';
    import logo6 from '../components/icons/clients_logo/Logo(6).png';
    import logo7 from '../components/icons/clients_logo/Logo(7).png';
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
  @import '../assets/styles/main.scss';

  .customers {
        @include flex-center;
        flex-direction: row;
        width: 100%;
        height: 390px;
        background-color: $silver;
        gap: 70px;
        padding-top: 10px;

        .customers-text {
            @include align-start;
            flex-direction: column;
            width: 700px;
            gap: 15px;

            p {
                font-family: $primary-font;
                font-size: $body2-size;
                font-weight: 500;
                color: $grey;
                margin: 0;
            }

            h6 {
                font-family: $primary-font;
                font-size: $headline4-size;
                font-weight: 600;
                color: $primary;
                margin: 0;
            }

            span {
                font-family: $primary-font;
                font-size: $body3-size;
                font-weight: 400;
                color: $grey; 
            }

            .customers-logo {
                @include flex-between;
                flex-direction: row;
                width: 100%;
                margin-top: 20px;

                .no_bg-button {
                    @include apply-button($primary-MediumIcon_no_bg);
                    @include button-hover($primary, $white);
                }
            }
        }
    }

    .last-section {
        @include flex-center;
        flex-direction: column;
        width: 100%;
        height: 620px;
        background-color: $white;
        gap: 30px;

        .last-section-text {
            @include flex-center;
            flex-direction: column;
            width: 45%;
            text-align: center;
            gap: 20px;

            h1 {
                font-family: $primary-font;
                font-size: $headline2-size;
                font-weight: 600;
                color: $d-grey;
                margin: 0;
            }

            p {
                font-family: $primary-font;
                font-size: $body2-size;
                font-weight: 400;
                color: $grey;
                margin: 0;
            }
        }
        .cards_container {
            display: flex;
            align-items: start;
            justify-content: space-around;
            flex-direction: row;
            width: 85%;
            height: 400px;

            .cards{
                @include flex-around;
                flex-direction: column;
                position: relative;
                height: 90%;
            }

            img{
                width: 348px
            };

            .mini-card{ 
                @include flex-around;
                flex-direction: column;
                text-align: center;
                width: 290px;
                min-height: 176px;
                background-color: $silver;
                border-radius: 12px;
                box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
                position: relative;
                transform: translate(0%, -65%);
                z-index: 2;
                padding: 10px;

                p {
                font-family: $primary-font;
                font-size: $headline4-size;
                font-weight: 600;
                color: $grey;
                }

                .no_bg-button {
                    @include apply-button($primary-MediumIcon_no_bg);
                    @include button-hover($primary, $white);
                }
            }

        }
    }  
</style>