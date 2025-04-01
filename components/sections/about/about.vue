<script setup>

import TitleUi from "@/components/ui/titleUi.vue";
</script>

<template>
    <div class="about">
        <div class="container">
            <TitleUi
                title="What our listeners say"
                sub-title="Their experience throughout every platform"
            />
            <img src="@/assets/imgs/about-about-1.png" alt="">
            <h3>About and History</h3>
            <div class="about__paragraphs flex">
                <p>Eu non <span>diam</span> phasellus vestibulum lorem. Fringilla est ullamcorper eget nulla facilisi etiam dignissim. Id diam vel quam <span>elementum pulvinar.</span>
                    <br> <br>
                    Elementum eu facilisis sed odio morbi quis commodo.
                    Sed odio morbi quis commodo odio aenean sed adipiscing odio diam. uno fablotoson louw uit.</p>
                <p>Lorem ipsum dolor sit amet, <span>consectetur adipiscing</span> elit. Quam pellentesque at bibendum euismod tellus duis cursus dignissim odio. Sit vulputate et integer in. Sit vel, senectus iaculis morbi. <span>Amet</span>interdum imperdiet laoreet <span>morbi</span> tincidunt fermentum, libero. Ante enim eget.
                    <br> <br>
                    Viverra at porttitor accumsan. <span>Orci non here</span></p>
            </div>
            <hr>
            <div class="about__hosts">
                <h3>Founder and Main Host</h3>
                <div class="about__hosts-container flex">
                    <div class="about__hosts-item flex">
                        <img src="@/assets/imgs/about-host-1.png" alt="">
                        <img src="@/assets/imgs/about-hosts-1.svg" alt="" class="about__hosts-svg">
                        <div>
                            <p class="text-sm">Host 1</p>
                            <h3>Porter Severus</h3>
                            <p class="text-sm">Lorem ipsum dolor sit amet con sectet piscing elit, sed do eiusmod tempor rarylet podofcast.</p>
                            <div class="about__item-social">
                                <p>follow me:</p>
                                <div class="flex">
                                    <img src="@/assets/imgs/tiktok.svg" alt="">
                                    <img src="@/assets/imgs/twitter.svg" alt="">
                                    <img src="@/assets/imgs/instagram.svg" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="about__hosts-item flex">
                        <img src="@/assets/imgs/about-host-2.png" alt="">
                        <img src="@/assets/imgs/about-hosts-2.svg" alt="" class="about__hosts-svg">
                        <div>
                            <p class="text-sm">Host 2</p>
                            <h3>Marques Keith</h3>
                            <p class="text-sm">Lorem ipsum dolor sit amet con sectet piscing elit, sed do eiusmod tempor rarylet podofcast.</p>
                            <div class="about__item-social">
                                <p>follow me:</p>
                                <div class="flex">
                                    <img src="@/assets/imgs/tiktok.svg" alt="">
                                    <img src="@/assets/imgs/twitter.svg" alt="">
                                    <img src="@/assets/imgs/instagram.svg" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<style scoped lang="scss">
    .about {
        padding-top: 140px;

        & .container > img {
            margin-top: 35px;
        }

        & .container > h3 {
            max-width: 355px;
            margin: 60px auto 0;

            position: relative;

            &::before {
                content: "";
                display: block;
                width: 65px;
                height: 65px;

                background: url("@/assets/imgs/half-sparkle.svg") no-repeat center / contain;

                position: absolute;
                left: -50px;
                top: -40px;
                transform: rotate(-90deg);
            }
        }

        &__paragraphs {
            gap: 20px;
            margin-top: 80px;

            p {
                max-width: 49%;

                color: $graphite;

                span {
                    color: $black;
                    font-weight: 700;
                }
            }
        }

        hr {
            margin-top: 80px;
            height: .5px;
        }

        &__hosts {
            margin-top: 100px;

            & > h3 {
                max-width: 450px;
                margin: 0 auto;

                position: relative;

                &::after {
                    content: "";
                    display: block;
                    width: 100px;
                    height: 100px;

                    background: url("@/assets/imgs/scribble.svg") no-repeat center / contain;

                    position: absolute;
                    right: -30px;
                    top: -70px;
                }
            }

            &-container {
                gap: 20px;
                margin-top: 80px;
            }

            &-item {
                align-items: flex-end;
                gap: 20px;
                width: 50%;
                padding: 16px;

                border: 2px solid $black;
                border-radius: 8px;
                background: #fff;
                box-shadow: 10px 10px 0 0 #000;

                position: relative;

                & > img {
                    width: 50%;
                }

                .about__hosts-svg {
                    width: 100px;
                    height: 100px;

                    position: absolute;
                    top: 25px;
                    right: 25px;
                }

                & > div {
                    width: 50%;

                    h3 {
                        margin-top: 8px;
                        line-height: 100%;
                    }

                    & > p {
                        margin-top: 20px;
                        color: $graphite;
                    }
                }

                .about__item-social {
                    display: flex;
                    justify-content: flex-end;
                    align-items: center;
                    gap: 20px;

                    width: 100%;
                    padding-top: 10px;
                    margin-top: 20px;

                    border-top: 1px solid $graphite;

                    p {
                        font-size: 12px;
                    }

                    div {
                        gap: 10px;
                        max-width: 80px;
                    }
                }
            }

        }
    }
</style>