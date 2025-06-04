<script setup>
    // imports --------------------------
    import CategoriesCommon from "@/components/common/categoriesCommon.vue";
    import PodcastCardUi from "@/components/ui/podcastCardUi.vue";

    // vars --------------
    const cards = [
        {albom: "/imgs/albom-1.jpg", title: "Are you a Perplexed Mind Person?", tags: ["automation", "tech"], category: "Business"},
        {albom: "/imgs/albom-2.jpg", title: "Type of Social Classes of People", tags: ["self-esteem", "health"], category: "Comedy"},
        {albom: "/imgs/albom-3.jpg", title: "How to Deal with Self–Confidence", tags: ["mind-behaviour", "health"], category: "Education"},
        {albom: "/imgs/albom-4.jpg", title: "Women's Rights? Is it alright?", tags: ["women’s rights"], category: "Health"},
        {albom: "/imgs/albom-5.jpg", title: "Tesla Autopilot Controversy", tags: ["social class", "wealth"], category: "News"},
        {albom: "/imgs/albom-6.jpg", title: "Pandemic Becoming Endemic", tags: ["covid-19", "health"], category: "Tech"},
    ];
</script>

<template>
    <div class="categories-deatail">
        <h2>Latest Episode</h2>
        <CategoriesCommon
            :cards="cards"
            :card-comp="PodcastCardUi"
        />
    </div>
</template>

<style lang="scss">
    .categories-deatail {
        padding: 140px 0;

        & > h2 {
            text-align: center;
        }

        .categories {
            margin-top: 100px;
        }
    }
    
    // media -----------------
    @media (max-width: 1200px) {
        .categories__cards {
            justify-content: center;
        }

        .podcastCard {
            max-width: 620px;
        }
    }
    
    @media (max-width: 700px) {
        .categories-deatail {
            padding-top: 220px;
        }
    }
</style>