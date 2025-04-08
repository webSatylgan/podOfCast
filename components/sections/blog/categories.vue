<script setup>
    // imports
    import CategoriesCommon from "@/components/common/categoriesCommon.vue";
    import PostCardUi from "@/components/ui/postCardUi.vue";

    // posts --------------------
    const posts = [
        {img: "/imgs/post-1.jpg", subTitle: "PODCAST", title: "Setup your own podcast", tags: ["business", "startup"], date: "Sep 14, 2021", category: "podcast"},
        {img: "/imgs/post-2.jpg", subTitle: "TIPS & TRICK", title: "Doodle artwork 101", tags: ["art", "creative", "tips and trick"], date: "Sep 12, 2021", category: "TIPS & TRICK"},
        {img: "/imgs/post-3.jpg", subTitle: "NEWS", title: "Mother Nature Taking Over", tags: ["news", "nature"], date: "Sep 10, 2021", category: "News"},
        {img: "/imgs/post-4.jpg", subTitle: "PRODUCTIVITY", title: "How to Be Productive", tags: ["productivity", "mindset"], date: "Sep 8, 2021", category: "PRODUCTIVITY"},
    ];

</script>

<template>
    <div class="category-blog">
        <h2>Latest Posts</h2>
        <CategoriesCommon
            :cards="posts"
            :card-comp="PostCardUi"
        />
    </div>
</template>

<style scoped lang="scss">
    .category-blog {
        padding-top: 180px;

        h2 {
            text-align: center;
        }

        .categories {
            margin-top: 80px;
        }

        :deep(.card) {
            width: 49%;
        }
    }
</style>