<script setup>
    // imports -----------------------------
    // Common
    import HeroCommon from "@/components/common/heroCommon.vue";
    // Ui
    import PlatformsUi from "@/components/ui/platformsUi.vue";
</script>

<template>
    <HeroCommon>
        <div class="hero__container flex">
            <div class="hero__thumbnail">
                <img src="/imgs/albom-3.jpg" alt="">
                <PlatformsUi fill="#fff" />
                <h2>Perplexed Mind</h2>
            </div>
            <div class="hero__text">
                <div class="hero__count flex">
                    <p>Episode 1</p>
                    <p>FEATURED EPISODE</p>
                </div>
                <h3>Are you a Perplexed Mind Person?</h3>
                <hr>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
                <div class="hero__footnote flex">
                    <div class="flex">
                        <img src="@/assets/imgs/host-1.jpg" alt="">
                        <p class="text-sm">Hosted by: <span>Jane Doe</span></p>
                    </div>
                    <p class="text-sm">Sep 22, 2021</p>
                </div>
                <div class="hero__btns flex">
                    <button>SUBSCRIBE</button>
                    <button class="tag">
                        <svg viewBox="0 0 11 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11 7.48867C11 5.59603 1.85356 -0.458727 0.816006 0.629958C-0.221548 1.71864 -0.321313 13.1561 0.816006 14.3474C1.95333 15.5428 11 9.38131 11 7.48867Z" />
                        </svg>
                        LISTEN NOW <span>(46 min)</span>
                    </button>
                </div>
            </div>
            <div class="hero__tags">
                <p class="text-sm">Tags:</p>
                <div>
                    <button class="tag">mind-behaviour</button>
                    <button class="tag">health</button>
                </div>
            </div>
        </div>
    </HeroCommon>
</template>

<style scoped lang="scss">
    .hero {
        height: 100vh;
        padding-top: 200px;
        padding-bottom: 40px;

        &__container {
            flex-wrap: wrap;

            &::after {
                content: "";
                display: block;
                width: 120px;
                height: 120px;

                background: url("@/assets/imgs/screw.svg");

                position: absolute;
                bottom: -60px;
                right: 0;
            }
        }

        &__thumbnail {
            max-width: 470px;
            width: 100%;

            border-radius: 8px;
            box-shadow: 12px 12px 0 0 $blue-text;

            position: relative;

            div {

                max-width: 120px;

                position: absolute;
                top: 25px;
                right: 25px;

            }

            h2 {
                font-size: 2.875rem;
                line-height: 140%;
                letter-spacing: -0.08em;
                color: $blue-text;

                position: absolute;
                bottom: 25px;
                left: 25px;
            }
        }

        &__text {
            max-width: 570px;

            .hero__count {
                p {
                    color: $red;
                    font-weight: 700;

                    &:last-child {
                        display: block;
                        padding: 3px 6px;

                        font-size: 12px;

                        border: 1px solid $red;
                        border-radius: 4px;
                    }
                }
            }

            h3 {
                margin-top: 15px;
            }

            hr {
                margin-top: 25px;
            }

            & > p {
                margin-top: 20px;
                color: $graphite;
            }

            .hero__footnote {

                margin-top: 40px;

                div {
                    max-width: 200px;

                    img {
                        width: 35px;
                        height: 35px;
                        border-radius: 50px;
                    }

                    p {
                        span {
                            color: $red;
                        }
                    }
                }

                & > p {
                    color: $graphite;
                }

            }

            .hero__btns {
                max-width: 470px;
                margin-top: 60px;

                button {
                    span {
                        color: $red;
                        margin-left: 5px;
                    }

                    &:hover span {
                        color: $white;
                    }

                    &.tag {
                        display: flex;
                        align-items: center;

                        svg {
                            width: 15px;
                            height: 15px;
                            margin-right: 10px;

                            fill: $black;

                            transition: .2s;
                        }
                    }
                }

            }
        }

        &__tags {
            display: flex;
            align-items: center;
            margin-top: 80px;

            p {
                color: $graphite;
                font-weight: 700;
            }

            div {
                display: flex;
                align-items: center;
                gap: 5px;
                margin-left: 60px;

                button {
                    padding: 6px 12px;

                    border: 1px solid $graphite;
                    border-radius: 4px;
                    box-shadow: none;

                    color: $graphite;
                    font-weight: 500;
                    font-size: .875rem;
                }
            }
        }
    }
    
    // media ---------------------
    @media (max-width: 1200px) {
        .hero__thumbnail {
            max-width: 370px;
        }
    }
    
    @media (max-width: 1000px) {
        .hero {
            padding-top: 100px;

            &__container {
                flex-direction: column;
                gap: 30px;
            }

            &__tags {
                margin-top: 0;
            }
        }
    }

    @media (max-width: 600px) {
        .hero__container::after {
            content: none;
        }
    }

    @media (max-width: 450px) {

        .hero {
            padding-top: 150px;
        }

        .hero__thumbnail {
            max-width: 310px;
        }

        .hero__text .hero__btns {
            flex-direction: column;
        }
    }
</style>