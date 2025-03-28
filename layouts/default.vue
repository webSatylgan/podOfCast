<script setup>
    // imports ----------------------
    import Header from "@/components/layouts/header.vue";
    import Footer from "@/components/layouts/footer.vue";
    import Cta from "@/components/layouts/cta.vue";
</script>

<template>
    <Header />
    <main>
        <slot />
        <Cta />
    </main>
    <Footer />
</template>

<style scoped>

</style>