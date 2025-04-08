<script setup>
    // imports ---------------------
    import Hero from "@/components/sections/blog/hero.vue";

    // vars ---------------------
    const components = [Hero];
</script>

<template>
    <component
        v-for="(comp, index) in components"
        :is="comp"
        :key="index"
    />
</template>