<script setup>

import TitleUi from "@/components/ui/titleUi.vue";
import PodcastCardUi from "@/components/ui/podcastCardUi.vue";
</script>

<template>
    <div class="episodes">
        <div class="container">
            <TitleUi
                title="Recent Episodes"
                sub-title="Available on your favorite platform"
            />

            <div class="episodes__container flex">
                <PodcastCardUi

                />
                <PodcastCardUi

                />
                <PodcastCardUi

                />
                <PodcastCardUi

                />
                <PodcastCardUi

                />
                <PodcastCardUi

                />
            </div>
            <button>BROWSE ALL EPISODES</button>
        </div>
    </div>
</template>

<style scoped lang="scss">
    .episodes {
        margin-top: 140px;
        background: $pink-bg;

        padding: 140px 0;

        &__container {
            gap: 20px;
            flex-wrap: wrap;

            margin-top: 100px;

            position: relative;

            &::after {
                content: "";
                width: 125px;
                height: 125px;

                background: url("@/assets/imgs/episodes-sparkle.svg") no-repeat center / cover;

                position: absolute;
                top: -110px;
                right: -85px;
            }
        }

        button {
            margin: 100px auto 0;
        }
    }
</style>