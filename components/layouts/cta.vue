<script setup>

import TitleUi from "@/components/ui/titleUi.vue";
</script>

<template>
    <div class="cta">
        <img src="@/assets/imgs/cta.png" alt="">
        <div class="container">
            <TitleUi
                title="Available now Pod of Cast App"
                sub-title="We just launched our podcast app!"
            >
                <template #title-up>
                    <button class="tag">BETA</button>
                </template>
            </TitleUi>
            <div class="cta__download">
                <button>DOWNLOAD NOW</button>
                <p class="text-sm">Content also available on:</p>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
    .cta {
        width: 100%;
        margin-top: 140px;
        padding: 200px 0;

        background-color: $blue-bg;

        position: relative;

        & > img {
            width: 100%;
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);

            pointer-events: none;
        }

        .title {
            max-width: 500px;

            button {
                padding: 3px 6px;
                margin: 0 auto 20px;

                border: 1px solid $red;

                font-weight: 700;
                font-size: 0.875rem;
                color: $red;
                cursor: default;

                box-shadow: none;

               &:hover {
                   color: $white;
               }
            }

        }

        &__download {
            margin: 140px auto 0;
            text-align: center;

            button {
                margin: 0 auto;
            }

            p {
                margin-top: 25px;
            }
        }
    }

    /* adaptive --------------- */
    @media (min-width: 1700px) {
        .cta > img {
            width: 80%;
            max-width: 1500px;
        }
    }
</style>