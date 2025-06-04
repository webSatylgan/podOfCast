<script setup>
    // imports ----------------------
    import Header from "@/components/layouts/header.vue";
    import Footer from "@/components/layouts/footer.vue";
    import Cta from "@/components/layouts/cta.vue";
    import Menu from "@/components/layouts/menu.vue";

    // header - menu functional --------------
    const isBurgerOpen = ref(false);

    function toggleBurger () {
        isBurgerOpen.value = !isBurgerOpen.value;
    }


</script>

<template>
    <div>
        <Header :isBurgerOpen="isBurgerOpen" @toggle="toggleBurger" />
        <Menu :isBurgerOpen="isBurgerOpen" />
        <main>
            <slot />
            <Cta />
        </main>
        <Footer />
    </div>
</template>

<style scoped>

</style>