<script setup>
    const props = defineProps({
        title: String,
        subTitle: String
    });
</script>

<template>
    <div class="title">
        <slot name="title-up" />
        <h2>{{ title }}</h2>
        <p class="text-lg">{{ subTitle }}</p>
        <slot name="title-down" />
    </div>
</template>

<style lang="scss">
    .title {
        margin: 0 auto;

        text-align: center;

        p {
            margin-top: 20px;
        }
    }
</style>