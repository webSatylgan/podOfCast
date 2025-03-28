<script setup>

import TitleUi from "@/components/ui/titleUi.vue";
import PostCardUi from "@/components/ui/postCardUi.vue";
</script>

<template>
    <div class="blog">
        <div class="container">
            <TitleUi
                title="Article and News"
                sub-title="News, tips, tricks and more"
            />
            <div class="blog__container flex">
                <PostCardUi />
                <PostCardUi />
            </div>
            <button>BROWSE ALL</button>
        </div>
    </div>
</template>

<style scoped lang="scss">
    .blog {
        margin-top: 140px;

        &__container {
            margin-top: 100px;
            flex-wrap: wrap;

            position: relative;

            &::before,
            &::after {
                content: "";
                display: block;

                position: absolute;
            }

            &::before {
                width: 185px;
                height: 160px;

                top: -65px;
                left: -85px;
                z-index: -1;

                background: url("@/assets/imgs/splash.svg") no-repeat center / cover;
            }

            &::after {
                width: 200px;
                height: 100px;

                bottom: -70px;
                right: -120px;

                transform: rotate(120deg);

                background: url("@/assets/imgs/scribble.svg") no-repeat center / cover;
            }

            .card {
                width: 49%;
            }
        }

        button {
            margin: 100px auto 0;
        }
    }
</style>