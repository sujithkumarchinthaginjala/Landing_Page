<script setup>
    import logo2 from '../components/icons/clients_logo/Logo(2).png';
    import logo3 from '../components/icons/clients_logo/Logo(3).png';
    import logo4 from '../components/icons/clients_logo/Logo(4).png';
    import logo5 from '../components/icons/clients_logo/Logo(5).png';
    import logo6 from '../components/icons/clients_logo/Logo(6).png';
    import logo7 from '../components/icons/clients_logo/Logo(7).png';
    import logo8 from '../components/icons/clients_logo/Logo(8).png';
    import data1 from '../data/data1.json';
</script>

<template>
    <div class="clients">
        <div class="clients-text">
            <h1>Our Clients</h1>
            <p>We have been working with some Fortune 500+ clients</p>
        </div>
        <div class="clients-logo">
            <img :src="logo2" alt="">
            <img :src="logo3" alt="">
            <img :src="logo4" alt="">
            <img :src="logo5" alt="">
            <img :src="logo6" alt="">
            <img :src="logo7" alt="">
            <img :src="logo8" alt="">
        </div>
    </div>
    <div class="community">
        <h1>Manage your entire community <br/>in a single system</h1>
        <p>Who is Nextcent suitable for?</p>
    </div>
    <div class="community_card">
        <div v-for="item in data1" :key="item.id" class="communitydata">
            <img :src="item.image" alt="">
            <h1>{{ item.title }}</h1>
            <p>{{ item.text }}</p>
        </div>
    </div>
</template>

<style scoped lang="scss">
    @import '../assets/styles/main.scss';

    .clients {
        @include flex-between;
        flex-direction: column;
        width: 100%;
        background-color: $white;
        text-align: center;

        .clients-text {
            @include flex-center;
            flex-direction: column;
            width: 100%;

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
            }
        }

        .clients-logo {
            @include flex-around;
            width: 1152px;
            flex-direction: row;
            margin-top: 25px;
        }
    }

    .community {
        @include flex-center;
        flex-direction: column;
        text-align: center;
        width: 100%;

        h1{
            font-family: $primary-font;
            font-size: $headline2-size;
            font-weight: 600;
            color: $d-grey;
            margin: 0;
        }

        p{
            font-family: $primary-font;
            font-size: $body2-size;
            font-weight: 400;
            color: $grey;
        }
    }

    .community_card {
        @include flex-around;
        flex-direction: row;
        width: 90%;
        background-color: $white;
    
    .communitydata {
        @include flex-around;
        flex-direction: column;
        width: 299px;
        height: 260px;
        background-color: $white;
        text-align: center;

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
        }
    }
}
</style>