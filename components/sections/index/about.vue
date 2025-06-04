<script setup>
    // imports -----------------
    import QuoteCommon from "@/components/common/quoteCommon.vue";
    // ui
    import ScribbleUi from "@/components/ui/scribbleUi.vue";
</script>

<template>
    <div class="about">
        <div class="container">
            <ScribbleUi />
            <h2>Talk. Listen. Get inspired <br> by every minute of it.</h2>
            <div class="about__items flex">
                <div>
                    <img src="../../../assets/imgs/about-1.png" alt="">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. </p>
                </div>
                <div>
                    <img src="../../../assets/imgs/about-2.png" alt="">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. </p>
                </div>
            </div>
            <QuoteCommon quote="One of the best daily podcasts that covers every topic on Spotify." />
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .about {
        position: relative;

        .scribble {
            top: -210px;

            stroke: $red;
        }

        h2 {
            margin-top: 140px;

            text-align: center;
        }

        &__items {
            gap: 30px;
            margin-top: 100px;

            div {
                max-width: 475px;

                text-align: center;

                img {
                    max-width: 275px;
                    margin: 0 auto;
                }

                p {
                    margin-top: 40px;
                }

            }
        }

        .quote {
            margin-top: 120px;
        }

    }

    // media ------------------
    @media (max-width: 600px) {
        .about__items {
            flex-direction: column;
            justify-content: center;

            div {
                max-width: 85%;
            }
        }
    }
</style>