<script setup>

import TitleUi from "@/components/ui/titleUi.vue";
</script>

<template>
    <div class="features">
        <div class="container">
            <TitleUi
                title="Membership benefits"
                sub-title="Become our sponsor and get all benefits"
            >
                <template #title-up>
                    <img src="../../assets/imgs/scribble.svg" alt="">
                </template>
            </TitleUi>
            <div class="features__container">
                <div class="features__item">
                    <img src="@/assets/imgs/features-1.svg" alt="">
                    <h4>Topic by Request</h4>
                    <p>Lorem ipsum dolor sit amet consectet pis cing elit, sed do eiusmod tempor.</p>
                </div>
                <div class="features__item">
                    <img src="@/assets/imgs/features-2.svg" alt="">
                    <h4>Exclusive Content</h4>
                    <p>Lorem ipsum dolor sit amet consectet pis cing elit, sed do eiusmod tempor.</p>
                </div>
                <div class="features__item">
                    <img src="@/assets/imgs/features-3.svg" alt="">
                    <h4>Join the Community</h4>
                    <p>Lorem ipsum dolor sit amet consectet pis cing elit, sed do eiusmod tempor.</p>
                </div>
                <div class="features__item">
                    <img src="@/assets/imgs/features-4.svg" alt="">
                    <h4>Livestreaming Access</h4>
                    <p>Lorem ipsum dolor sit amet consectet pis cing elit, sed do eiusmod tempor.</p>
                </div>
                <div class="features__item">
                    <img src="@/assets/imgs/features-5.svg" alt="">
                    <h4>Exclusive Episodes & Merch</h4>
                    <p>Lorem ipsum dolor sit amet consectet pis cing elit, sed do eiusmod tempor.</p>
                </div>
                <div class="features__item">
                    <img src="@/assets/imgs/features-6.svg" alt="">
                    <h4>And much more!</h4>
                    <p>Lorem ipsum dolor sit amet consectet pis cing elit, sed do eiusmod tempor.</p>
                </div>
            </div>
            <button>SEE PRICING</button>
        </div>
    </div>
</template>

<style scoped lang="scss">
    .features {

        margin-top: 140px;

        .title img {
            max-width: 240px;
            width: 100%;

            position: absolute;
            right: -90px;
            top: -150px;
        }

        &__container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            gap: 80px 20px;
            margin-top: 100px;
        }

        &__item {
            width: 30%;
            min-width: 250px;

            text-align: center;

            img {
                width: 78px;
                height: 78px;
                margin: 0 auto;
            }

            h4 {
                margin-top: 30px;
            }

            p {
                margin-top: 10px;
            }
        }

        button {
            margin: 100px auto 0;
        }

    }
</style>