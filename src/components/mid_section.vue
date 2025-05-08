<script setup>
    import data2 from '../data/data2.json';
</script>

<template>
<div class="text">
    <div class="text-center">
        <h1>Helping a local <br/>
        <span>business reinvent itself</span></h1>
        <p>We reached here with our hard work and dedication</p>
    </div>
    <div class="text-data">
        <div class="data" v-for="data in data2" :key="data.id">
            <img :src="data.image" alt="">
            <div class="text-data1">
                <h1>{{ data.count }}</h1>
                <p>{{ data.title }}</p> 
            </div>
        </div>
    </div>
</div>
</template>

<style scoped lang="scss">
    @import '../assets/styles/main.scss';

    .text{
        @include flex-around;
        flex-direction: row;
        width: 100%;
        height: 300px;
        background-color: $silver;

        .text-center {
            @include flex-start;
            flex-direction: column;
            width: 540px;

            h1 {
                font-family: $primary-font;
                font-size: $headline2-size;
                font-weight: 600;
                color: $d-grey;
                margin: 0;
            }

            span {
                font-family: $primary-font;
                font-weight: 600;
                color: $primary;
            }

            p{
                font-family: $primary-font;
                font-size: $body2-size;
                font-weight: 400;
                color: $grey;
            };
        }

        .text-data {
            @include flex-around;
            flex-wrap: wrap; 
            width: 600px;  

        .data{
            @include flex-around;
            flex-direction: row;
        
            .text-data1{
                
                flex-direction: column;
                width: 180px;
                text-align: start;
                padding: 30px 15px;


                h1 {
                    font-family: $primary-font;
                    font-size: $headline3-size;
                    font-weight: 700;
                    color: $d-grey;
                    margin: 0;
                }

                p {
                    font-family: $primary-font;
                    font-size: $body3-size;
                    font-weight: 400;
                    color: $grey;
                    margin: 0;
                }
            }
        }
        }
    }

</style>