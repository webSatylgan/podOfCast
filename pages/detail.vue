<script setup>
// imports ------------------------
import Hero from "@/components/sections/detail/hero.vue";
import Categories from "@/components/sections/detail/categories.vue";


// components ---------------
const components = [Hero, Categories];

</script>

<template>
    <component
        v-for="(comp, index) in components"
        :key="index"
        :is="comp"
    />
</template>