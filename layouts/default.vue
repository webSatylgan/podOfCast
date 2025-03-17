<script setup>
    // imports ----------------------
    import Header from "@/components/layouts/header.vue";
    import Footer from "@/components/layouts/footer.vue";
</script>

<template>
    <Header />
    <main>
        <slot />
    </main>
    <Footer />
</template>

<style scoped>

</style>