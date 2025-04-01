<script setup>

import HeroCommon from "@/components/common/heroCommon.vue";
</script>

<template>
    <HeroCommon padding-bottom="255px">
        <template #title>
            <h1>About <br> <span>Pod of Cast</span></h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam–quis.</p>
            <div class="hero__btns flex">
                <button class="tag">BECOME SPONSOR</button>
                <button>SUBSCRIBE</button>
            </div>
        </template>
        <div class="hero__count flex">
            <div class="hero__count-item">
                <h3><span>76</span>K</h3>
                <p>Community Members</p>
            </div>
            <div class="hero__count-item">
                <h3><span>128</span>K</h3>
                <p>Podcast Subscribers</p>
            </div>
            <div class="hero__count-item">
                <h3><span>59</span>K</h3>
                <p>Daily Listeners</p>
            </div>
        </div>
    </HeroCommon>
</template>

<style scoped lang="scss">
    .hero {

        &__title {
            p {
                max-width: 700px;
            }

            .hero__btns {
                max-width: 420px;
                margin: 70px auto 0;
            }
        }

        &__count {
            gap: 20px;
            max-width: 1200px;
            padding: 0 20px;

            position: absolute;
            bottom: -15%;

            &-item {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;

                max-width: 375px;
                width: 100%;
                padding: 60px;

                border: 1.50px solid $black;
                border-radius: 8px;
                box-shadow: 6px 6px 0 0 $red;
                background: $white;

                h3 {
                    font-size: 3.75rem;
                    color: $red;

                    span {
                        color: $black;
                    }
                }

                p {
                    margin-top: 20px;
                    color: $graphite;
                }
            }
        }

    }
</style>