<script setup>
    import HeroCommon from "@/components/common/heroCommon.vue";

    const covers = [
        {img: "/imgs/albom-1.jpg", text: "Tesla Autopilot"},
        {img: "/imgs/albom-2.jpg", text: "Self–confidence"},
        {img: "/imgs/albom-3.jpg", text: "Perplexed Mind"},
        {img: "/imgs/albom-4.jpg", text: "Women’s Rights"},
        {img: "/imgs/albom-5.jpg", text: "Social Class"},
    ]
</script>

<template>
    <HeroCommon padding-bottom="140px" :has-container="false">
        <template #title>
            <h1>Your Daily <br> <span>Podcast</span></h1>
            <p>We cover all kinds of categories and a weekly special guest.</p>
            <button>subscribe</button>
        </template>
        <div class="hero__covers">
            <div class="hero__covers-wrapper flex">
                <div class="hero__cover" v-for="({img, text}, index) in covers" :key="index">
                    <img :src="img" alt="">
                    <h3>{{text}}</h3>
                    <div class="hero__cover-links flex">
                        <a href="">
                            <img src="@/assets/imgs/gpodcast.svg" alt="">
                        </a>
                        <a href="">
                            <img src="@/assets/imgs/spotify.svg" alt="">
                        </a>
                        <a href="">
                            <img src="@/assets/imgs/youtube.svg" alt="">
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="hero__sponsors flex">
                <h4>Supported by:</h4>
                <div class="flex">
                    <img src="@/assets/imgs/sponsors-1.png" alt="">
                    <img src="@/assets/imgs/sponsors-2.png" alt="">
                    <img src="@/assets/imgs/sponsors-3.png" alt="">
                </div>
            </div>
        </div>
    </HeroCommon>
</template>

<style lang="scss" scoped>
    .hero__title {

        p {
            max-width: 375px;
        }

        button {
            margin: 60px auto 0;
        }
    }

    .hero__covers {
        justify-content: center;
        width: 100%;
        margin-top: 120px;

        overflow: hidden;
        position: relative;

        &-wrapper {
            justify-content: center;
            gap: 20px;

            .hero__cover {
                min-width: 375px;
                width: 100%;

                border-radius: 12px;

                overflow: hidden;
                position: relative;

                img {
                    width: 100%;
                }

                h3 {

                    color: $blue-text;

                    position: absolute;
                    bottom: 20px;
                    left: 20px;

                }

                &-links {
                    max-width: 100px;
                    gap: 10px;

                    position: absolute;
                    top: 20px;
                    right: 20px;

                    img {
                        width: 24px;
                        height: 24px;
                    }
                }
            }
        }
    }

    .hero__sponsors {
        width: 100%;
        margin-top: 120px;
        padding: 45px 75px 45px 0;

        border-top: 1px solid $graphite;
        border-bottom: 1px solid $graphite;

        div {
            width: 65%;

            img {
                max-width: 150px;
            }
        }
    }
    
    
    /* media ----------------- */
    @media (min-width: 1920px) {
        .hero__covers {
            max-width: 1920px;
        }

        .hero__cover {
            min-width: 400px;
        }
    }

</style>