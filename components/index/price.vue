<script setup>
    // imports ------------------
    import TitleScribbleUi from "@/components/ui/titleScribbleUi.vue";
</script>

<template>
    <div class="price">
        <div class="container">
            <TitleScribbleUi
                title="Become our sponsor"
                sub-title="Get exclusive episodes, merch and more"
            >
                <template #title-up>
                    <img class="price__title-sparkle" src="@/assets/imgs/half-sparkle.svg" alt="">
                </template>
            </TitleScribbleUi>
            <div class="price__container">
                <div class="price__item">
                    <div class="price__type">
                        <h3>Member</h3>
                        <p class="text-sm">Lorem ipsum dolor sit amet consectet cing elit, sed do eiusmod tempor.</p>
                        <div class="flex">
                            <button>SUBSCRIBE</button>
                            <p class="text-sm"><span>$9.99</span> <br> /month</p>
                        </div>
                    </div>
                    <div class="price__benefits">
                        <p class="text-sm">What’s included:</p>
                        <ul>
                            <li>Exclusive Content</li>
                            <li>5% Discount on Merch</li>
                            <li>Join the Community</li>
                            <li>Livestreaming Access</li>
                        </ul>
                    </div>
                </div>
                <div class="price__item price__item-popular">
                    <div class="price__type">
                        <h3>Family</h3>
                        <p class="text-sm">Lorem ipsum dolor sit amet consectet cing elit, sed do eiusmod tempor.</p>
                        <div class="flex">
                            <button>SUBSCRIBE</button>
                            <p class="text-sm"><span>$9.99</span> <br> /month</p>
                        </div>
                    </div>
                    <div class="price__benefits">
                        <p class="text-sm">What’s included:</p>
                        <ul>
                            <li>Everything in Tier 1</li>
                            <li>Free tickets to Events</li>
                            <li>Limited Edition Merch</li>
                            <li>Promote your Product</li>
                            <li>Request Topic</li>
                        </ul>
                    </div>
                </div>
                <div class="price__item ">
                    <div class="price__type">
                        <h3>Official</h3>
                        <p class="text-sm">Lorem ipsum dolor sit amet consectet cing elit, sed do eiusmod tempor.</p>
                        <div class="flex">
                            <button>SUBSCRIBE</button>
                            <p class="text-sm"><span>$9.99</span> <br> /month</p>
                        </div>
                    </div>
                    <div class="price__benefits">
                        <p class="text-sm">What’s included:</p>
                        <ul>
                            <li>Everything in Tier 2</li>
                            <li>Exclusive Badge on Livestreaming</li>
                            <li>Become an Official Sponsor</li>
                            <li>Early Access to All Episodes</li>
                            <li>Free Stikers and Merch</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
    .price {

        // title styling
        .title {
            margin-top: 140px;

            .price__title-sparkle {
                display: block;
                width: 60px;
                height: 60px;

                transform: rotate(-80deg);

                position: absolute;
                left: -45px;
                top: -35px;
            }
        }

        &__container {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            align-items: stretch;

            gap: 20px;
            margin-top: 100px;

            position: relative;

            &::before,
            &::after {
                content: "";
                display: block;

                position: absolute;
            }

            &::before {
                width: 120px;
                height: 120px;

                bottom: -40px;
                left: -70px;
                z-index: -1;

                background: url("@/assets/imgs/screw-blue.svg") no-repeat center / cover;
            }

            &::after {
                width: 200px;
                height: 200px;

                top: -92px;
                right: -87px;
                z-index: -1;

                background: url("@/assets/imgs/star.svg") no-repeat center / cover;
            }
        }

        &__item {
            display: flex;
            flex-direction: column;

            .price__type,
            .price__benefits {
                width: 100%;

                border: 2px solid $black;
                border-radius: 8px;
                background: $white;
            }

            .price__type {
                padding: 60px 40px 30px;

                & > p {
                    margin-top: 20px;
                }

                div {
                    margin-top: 90px;

                    p {
                        span {
                            color: $red;
                            font-weight: 700;
                            font-size: 1.375rem;
                            line-height: 140%;
                            letter-spacing: -0.02em;
                        }
                    }
                }
            }

            .price__benefits {
                flex: 1;

                padding: 40px;
                margin-top: 20px;

                ul {
                    margin-top: 20px;


                    li {
                        display: flex;
                        align-items: center;

                        margin-top: 10px;

                        font-weight: 500;
                        font-size: 1rem;
                        line-height: 160%;
                        color: $black;

                        &::before {
                            content: "";
                            display: block;
                            width: 3px;
                            height: 3px;
                            margin-right: 5px;

                            background: $black;
                            border-radius: 50px;
                        }
                    }
                }
            }

            &:not(:first-child) {
                ul li:first-child {
                    font-weight: 700;
                }
            }

        }

        .price__item-popular {

            & > div {
                background: $pink-bg;
            }

            .price__type {
                h3 {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    width: 100%;
                    gap: 10px;

                    &::after {
                        content: "MOST POPULAR";
                        display: block;
                        padding: 3px 6px;

                        font-weight: 700;
                        font-size: .75rem;
                        line-height: 160%;
                        color: $white;
                        text-transform: uppercase;

                        border-radius: 4px;
                        background: $red;
                    }
                }

            }
        }

    }
</style>