<script setup>
    // imports ---------------------
    import Hero from "@/components/sections/blog/hero.vue";
    import Categories from "@/components/sections/blog/categories.vue";

    // vars ---------------------
    const components = [Hero, Categories];
</script>

<template>
    <component
        v-for="(comp, index) in components"
        :is="comp"
        :key="index"
    />
</template>