<script setup>
    // imports ----------------------
    import CategoriesUi from "@/components/ui/categoriesUi.vue";
    import {onMounted, ref} from "vue";

    // props -------------------
    const props = defineProps({
        cardComp: Object,
        cards: Array
    });

    // vars -------------
    const cats = ref(["All"]);
    const category = ref("All");
    const cards = ref([]);

    // functions ----------------
    onMounted(() => {
        // cats btns
        for(const item of props.cards) {
            cats.value.push(item.category)
        }

        // cards
        cards.value = props.cards;
    });

    // filter cards on click
    const filteredCats = computed(() => {
        if (category.value === "All") {
            return cards.value;
        }
        return cards.value.filter(card => card.category === category.value);
    });

</script>

<template>
    <div class="categories">
        <div class="container">
            <CategoriesUi :categories="cats" @ChangeCat="cat => category = cat" />
            <div class="categories__cards flex">
                <Component
                    v-for="(card, index) of filteredCats"
                    :is="cardComp"

                    v-bind="card"

                    :key="index"
                />
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    .categories {
        width: 100%;

        &__cards {
            flex-wrap: wrap;
            margin-top: 100px;
        }
    }
</style>