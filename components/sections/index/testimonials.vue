<script setup>
    // imports ------------------
    import Slider from "@/components/common/slider.vue";
    import QuoteUi from "@/components/ui/quoteUi.vue";
    import TitleScribbleUi from "@/components/ui/titleScribbleUi.vue";
</script>

<template>
    <div class="testimonials">
        <TitleScribbleUi
            title="What our listeners say"
            sub-title="Their experience throughout every platform"
        >
            <template #title-up>
                <img src="../../../assets/imgs/sparkle.svg" alt="" class="testimonials__title-img">
            </template>
        </TitleScribbleUi>
        <div class="testimonials__container">
            <div class="container">
                <Slider>
                    <div class="testimonials__slide slide">
                        <QuoteUi />
                        <p class="text-lg">Lorem ipsum dolor sit amet consectet piscing elit, sed do eiusmod tempor incidi ut labore et dolore magna aliqua. </p>
                        <div class="flex">
                            <p>
                                <img class="testimonials__slide-avatar" src="../../../assets/imgs/testimonials-1.jpg" alt="">
                                Luna lovegood,
                            </p>
                            <a href="">
                                <img class="testimonials__slide-platform" src="../../../assets/imgs/spotify-quote.svg" alt="">
                                Spotify
                            </a>
                        </div>
                    </div>
                    <div class="testimonials__slide slide">
                        <QuoteUi />
                        <p class="text-lg">Lorem ipsum dolor sit amet consectet piscing elit, sed do eiusmod tempor incidi ut labore et dolore magna aliqua. </p>
                        <div class="flex">
                            <p>
                                <img class="testimonials__slide-avatar" src="../../../assets/imgs/testimonials-2.jpg" alt="">
                                Luna lovegood,
                            </p>
                            <a href="">
                                <img class="testimonials__slide-platform" src="../../../assets/imgs/qpodcast-quote.svg" alt="">
                                Spotify
                            </a>
                        </div>
                    </div>
                    <div class="testimonials__slide slide">
                        <QuoteUi />
                        <p class="text-lg">Lorem ipsum dolor sit amet consectet piscing elit, sed do eiusmod tempor incidi ut labore et dolore magna aliqua. </p>
                        <div class="flex">
                            <p>
                                <img class="testimonials__slide-avatar" src="../../../assets/imgs/testimonials-3.jpg" alt="">
                                Luna lovegood,
                            </p>
                            <a href="">
                                <img class="testimonials__slide-platform" src="../../../assets/imgs/spotify-quote.svg" alt="">
                                Spotify
                            </a>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .testimonials {
        width: 100%;
        margin-top: 140px;
        padding: 140px 0 100px;

        background: $blue-bg;

        &__container {
            overflow: hidden;
        }

        &__title-img {
            width: 105px;
            height: 105px;

            position: absolute;
            top: -70px;
            left: -100px;
        }

        .slider {
            margin-top: 100px;
        }

        &__slide {
            min-width: 570px;
            padding: 40px;

            background: $white;
            border-radius: 8px;

            & > p {
                max-width: 420px;
                margin-top: -20px;

                text-align: start;
                color: $black;
            }

            div {
                gap: 10px;
                max-width: 280px;
                margin-top: 35px;

                p, a {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                }

                .testimonials__slide-avatar {
                    width: 48px;
                    height: 48px;
                    border-radius: 50px;
                }

                .testimonials__slide-platform {
                    width: 16px;
                    height: 16px;
                }
            }
        }
    }
</style>