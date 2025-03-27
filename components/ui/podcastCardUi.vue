<script setup>

</script>

<template>
    <div class="podcastCard">
        <div class="podcastCard__content flex">
            <img src="/imgs/albom-1.jpg" alt="">
            <div class="podcastCard__text">
                <p class="podcastCard__sub-title">Eps. 1</p>
                <h4>Are you a Perplexed Mind Person?</h4>
                <hr>
                <p class="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. </p>
            </div>
        </div>
        <div class="podcastCard__footer flex">
            <div class="podcastCard__tags flex">
                <button class="tag">mind-behaviour</button>
                <button class="tag">health</button>
            </div>
            <div class="podcastCard__host flex">
                <p>Hosted by: </p>
                <div>
                    <img src="@/assets/imgs/host-1.jpg" alt="">
                    <img src="@/assets/imgs/host-2.jpg" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
    .podcastCard {
        max-width: 570px;
        width: 100%;
        padding: 16px;

        background: $white;
        border: 2px solid $black;
        border-radius: 12px;

        transition: .2s;

        button.tag {
            box-shadow: none;
        }


        &__content {
            align-items: start;
            gap: 20px;

            img {
                max-width: 165px;
            }
        }

        &__text {

            .podcastCard__sub-title {
                font-weight: 700;
                color: $red;
            }

            h4 {
                margin-top: 5px;
            }

            hr {
                margin-top: 15px;
                margin-bottom: 10px;

                border: none;
                border-top: 2px solid $graphite;
            }
        }

        &__footer {
            margin-top: 20px;

        }

        &__tags {
            gap: 5px;
            max-width: 40%;
            width: auto;
        }

        &__host {
            gap: 10px;
            max-width: 120px;

            p {
                font-size: 12px;
            }

            div {
                display: flex;
                img {
                    width: 25px;
                    height: 25px;
                    border: 3px solid #fff;
                    border-radius: 50px;

                    &:last-child {
                        margin-left: -10px;
                    }
                }
            }
        }


        &:hover {
            box-shadow: 10px 10px 0 0 #81adc8;
            
            & h4 {
                color: $red;
            }
        }
    }
</style>