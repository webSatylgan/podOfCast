<script setup>
// imports ------------------------
import Hero from "@/components/sections/about/hero.vue";
import About from "@/components/sections/about/about.vue";
import Sponsors from "@/components/sections/about/sponsors.vue";

// components ----------------
const components = [Hero, About, Sponsors];
</script>

<template>
    <component
        v-for="(comp, index) in components"
        :key="index"
        :is="comp"
    />
</template>