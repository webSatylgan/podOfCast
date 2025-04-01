<script setup>

import TitleUi from "@/components/ui/titleUi.vue";
import Slider from "@/components/common/slider.vue";
</script>

<template>
    <div class="sponsors">
        <div class="container">
            <TitleUi
                title="Our Sponsor"
                sub-title="Our current official sponsor"
            />

            <div class="sponsors__slider">
                <Slider>
                    <div class="sponsors__slide slide">
                        <img src="@/assets/imgs/about-sponsor-1.svg" alt="">
                        <hr>
                        <p class="text-sm">Quis dictum cursus faucibus mattis dignissim. Pellentes
                            que purus in sed sodales in mauris molestie. Eleifend estcon
                            sctetur interdum eu in auctor. Gravida leo et.</p>
                    </div>
                    <div class="sponsors__slide slide">
                        <img src="@/assets/imgs/about-sponsor-2.svg" alt="">
                        <hr>
                        <p class="text-sm">Quis dictum cursus faucibus mattis dignissim. Pellentes
                            que purus in sed sodales in mauris molestie. Eleifend estcon
                            sctetur interdum eu in auctor. Gravida leo et.</p>
                    </div>
                    <div class="sponsors__slide slide">
                        <img src="@/assets/imgs/about-sponsor-3.svg" alt="">
                        <hr>
                        <p class="text-sm">Quis dictum cursus faucibus mattis dignissim. Pellentes
                            que purus in sed sodales in mauris molestie. Eleifend estcon
                            sctetur interdum eu in auctor. Gravida leo et.</p>
                    </div>
                </Slider>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
    .sponsors {
        width: 100%;
        margin-top: 140px;
        padding: 140px 0;

        background: $pink-bg;

        overflow: hidden;

        &__slider {
            margin-top: 100px;
        }

        &__slide {
            display: flex;
            flex-direction: column;
            align-items: center;

            min-width: 570px;
            padding: 40px 50px 30px;


            border: 1px solid $black;
            border-radius: 12px;
            background: $white;

            text-align: center;

            img {
                max-width: 300px;
                max-height: 55px;
                object-fit: contain;
            }

            hr {
                max-width: 350px;
                width: 100%;
                height: 1px;
                margin-top: 20px;

                border: none;
                background: $graphite;
            }

            p {
                margin-top: 30px;

                color: $graphite;
            }
        }
    }
</style>