<script setup>

import HeroCommon from "@/components/common/heroCommon.vue";
</script>

<template>
    <HeroCommon padding-bottom="115px">
        <template #title>
            <h1>Article <br>and <span>News</span></h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam–quis.</p>
        </template>
        <div class="hero__search">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="11.7664" cy="11.7666" rx="8.98856" ry="8.98856" stroke="#4D4D4D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M18.0181 18.4852L21.5421 22.0001" stroke="#4D4D4D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <input type="text" placeholder="Search...">
        </div>
    </HeroCommon>
</template>

<style scoped lang="scss">
    .hero__search {
        display: block;
        max-width: 570px;
        width: 100%;
        height: 75px;

        position: absolute;
        bottom: -38px;
        left: 50%;
        transform: translateX(-50%);

        svg {
            position: absolute;
            left: 25px;
            top: 50%;
            transform: translateY(-50%);
        }

        input {
            display: block;
            width: 100%;
            padding: 25px 0 25px 70px;

            background: $white;
            border-radius: 16px;
            box-shadow: 6px 6px 0 0 $blue-text;

            font-weight: 400;

            &:focus {
                border: 1.50px solid $black;
            }
        }
    }
</style>