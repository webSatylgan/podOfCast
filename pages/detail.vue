<script setup>
// imports ------------------------
import Hero from "@/components/sections/detail/hero.vue";


// components ---------------
const components = [Hero];

</script>

<template>
    <component
        v-for="(comp, index) in components"
        :key="index"
        :is="comp"
    />
</template>