<script setup>
    // imports ------------------
    import TitleScribbleUi from "@/components/ui/titleScribbleUi.vue";
    import PlatformsUi from "@/components/ui/platformsUi.vue";
</script>

<template>
    <div class="cta">
        <img src="@/assets/imgs/cta.png" alt="">
        <div class="container">
            <TitleScribbleUi
                title="Available now Pod of Cast App"
                sub-title="We just launched our podcast app!"
            >
                <template #title-up>
                    <button class="tag">BETA</button>
                </template>
            </TitleScribbleUi>
            <div class="cta__download">
                <button>DOWNLOAD NOW</button>
                <p class="text-sm">Content also available on:</p>
                <div class="cta__platforms">
                    <PlatformsUi />
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
    .cta {
        width: 100%;
        margin-top: 140px;
        padding: 140px 0;

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

                position: relative;

                &::after {
                    content: "";
                    display: block;
                    width: 60px;
                    height: 60px;

                    background: url("@/assets/imgs/half-sparkle.svg") no-repeat center / cover;

                    position: absolute;
                    top: -40px;
                    right: -40px;
                }
            }

            p {
                margin-top: 25px;
            }
        }

        &__platforms {
            max-width: 120px;
            margin: 10px auto 0;
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