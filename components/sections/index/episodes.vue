<script setup>
    // imports ---------------
    import TitleScribbleUi from "@/components/ui/titleScribbleUi.vue";
    import PodcastCardUi from "@/components/ui/podcastCardUi.vue";

    // vars ----------------------
    // alboms
    const alboms = [
        {albom: "/imgs/albom-1.jpg", title: "Are you a Perplexed Mind Person?", tags: ["automation", "tech"]},
        {albom: "/imgs/albom-2.jpg", title: "Type of Social Classes of People", tags: ["self-esteem", "health"]},
        {albom: "/imgs/albom-3.jpg", title: "How to Deal with Self–Confidence", tags: ["mind-behaviour", "health"]},
        {albom: "/imgs/albom-4.jpg", title: "Women's Rights? Is it alright?", tags: ["women’s rights"]},
        {albom: "/imgs/albom-5.jpg", title: "Tesla Autopilot Controversy", tags: ["social class", "wealth"]},
        {albom: "/imgs/albom-6.jpg", title: "Pandemic Becoming Endemic", tags: ["covid-19", "health"]},
    ];

</script>

<template>
    <div class="episodes">
        <div class="container">
            <TitleScribbleUi
                title="Recent Episodes"
                sub-title="Available on your favorite platform"
            />

            <div class="episodes__container flex">
                <PodcastCardUi
                    v-for="(albom, index) of alboms"
                    :key="index"

                    v-bind="{...albom, eps: alboms.length - index}"
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
            justify-content: center;

            margin-top: 100px;

            position: relative;

            &::after {
                content: "";
                width: 125px;
                height: 125px;

                background: url("@/assets/imgs/half-sparkle.svg") no-repeat center / cover;

                position: absolute;
                top: -110px;
                right: -85px;
            }
        }

        button {
            margin: 100px auto 0;
        }
    }
    
    // media ----------------------
    @media (max-width: 1340px) {
        .episodes__container::after {
            right: -45px;
        }
    }
    
    @media (max-width: 1200px) {
        .episodes__container::after {
            content: none;
        }
    }
</style>