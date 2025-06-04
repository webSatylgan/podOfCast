<script setup>
    // imports --------------------
    import TitleScribbleUi from "@/components/ui/titleScribbleUi.vue";
    import PostCardUi from "@/components/ui/postCardUi.vue";

    const posts = [
        {img: "/imgs/post-1.jpg", subTitle: "PODCAST", title: "Setup your own podcast", tags: ["business", "startup"], date: "Sep 14, 2021"},
        {img: "/imgs/post-2.jpg", subTitle: "TIPS & TRICK", title: "Doodle artwork 101", tags: ["art", "creative", "tips and trick"], date: "Sep 12, 2021"},
    ];
</script>

<template>
    <div class="blog">
        <div class="container">
            <TitleScribbleUi
                title="Article and News"
                sub-title="News, tips, tricks and more"
            />
            <div class="blog__container flex">
                <PostCardUi
                    v-for="(post, index) in posts"
                    v-bind="post"
                    :key="index"
                />
            </div>
            <button>BROWSE ALL</button>
        </div>
    </div>
</template>

<style scoped lang="scss">
    .blog {
        margin-top: 280px;

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

    // media --------------------
    @media (max-width: 1300px) {
        .blog__container::before,
        .blog__container::after {
            content: none;
        }
    }

    @media (max-width: 1000px) {
        .blog__container {
            flex-direction: column;
            justify-content: center;

            .card {
                width: 85%;
            }
        }
    }

    @media (max-width: 500px) {
        .blog__container .card {
            width: 100%;
        }
    }
</style>