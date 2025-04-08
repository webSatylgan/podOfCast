<script setup>

    const props = defineProps({
       categories: Array
    });

</script>

<template>
    <div class="categories-btns flex">
        <a href=""
           v-for="(cat, index) of categories"
           :key="index"
           @click.prevent="$emit('changeCat', cat)"
        >
            {{cat}}
        </a>
    </div>
</template>

<style lang="scss">
    .categories-btns {
        padding-bottom: 30px;
        border-bottom: 1px solid $graphite;

        a {
            color: $graphite;

            font-weight: 500;
            font-size: 1.375rem;
            text-transform: capitalize;

            &:hover {
                color: $red;
            }
        }
    }
</style>