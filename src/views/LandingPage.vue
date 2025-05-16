<script setup>
    import NavBar from '../components/Nav.vue';
    import frame from '../assets/icons/Frame35.png';
    import pana from '../assets/icons/pana.png';
    import Footer from '../components/Footer.vue';
    import Hero_section from '@/components/HeroSection.vue';
    import clientsCommunity_section from '@/components/ClientsCommunitySection.vue';
    import insight_section from '@/components/InsightSection.vue';
    import mid_section from '@/components/MidSection.vue';
    import customer_section from '@/components/CustomerSection.vue';
</script>

<template>
    <div class="landing-page">
        <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet">
        <NavBar />
         <div class="intro">
            <Hero_section />
            
            <clientsCommunity_section />
            
            <insight_section
                    :image="frame"
                    heading="The unseen of spending three <br><span>years at Pixelgrade</span>"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio."
            />

            <mid_section />

            <insight_section
                    :image="pana"
                    heading="How to design your site footer like we did"
                    description="Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida."
            />
            <customer_section/>
         </div>
         <Footer />
    </div>
</template>

<style lang="scss" scoped>
    @use '../assets/styles/Views/LandingPage.scss' as *;
   
</style>