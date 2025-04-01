<script setup>
    // imports ------------------------
    import Hero from "@/components/sections/index/hero.vue";
    import About from "@/components/sections/index/about.vue";
    import Testimonials from "@/components/sections/index/testimonials.vue";
    import Features from "@/components/sections/index/features.vue";
    import Episodes from "@/components/sections/index/episodes.vue";
    import Price from "@/components/sections/index/price.vue";
    import Blog from "@/components/sections/index/blog.vue";

    // components ----------------
    const components = [Hero, About, Testimonials, Features, Episodes, Price, Blog];
</script>

<template>
    <component
        v-for="(comp, index) in components"
        :key="index"
        :is="comp"
    />
</template>