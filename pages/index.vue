<script setup>
    // imports ------------------------
    import Hero from "@/components/index/hero.vue";
    import About from "@/components/index/about.vue";
    import Testimonials from "@/components/index/testimonials.vue";
    import Features from "@/components/index/features.vue";
    import Episodes from "@/components/index/episodes.vue";
    import Price from "@/components/index/price.vue";
    import Blog from "@/components/index/blog.vue";

    // components ----------------
    const components = {Hero, About, Testimonials, Features, Episodes, Price, Blog};
</script>

<template>
    <component
        v-for="(comp, index) in components"
        :key="index"
        :is="comp"
    />
</template>