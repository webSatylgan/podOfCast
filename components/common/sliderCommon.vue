<script setup>
    // imports -----------------
    import {onMounted} from "vue";

    // vars -----------------
    // refs
    const sliderWrapper = ref(null);
    const index = ref(0);
    const slides = ref([]);

    // not reactive
    let sliderWidth = 0;
    let gap = 0;
    let lengthSlides = 0;

    // functions --------------
    onMounted(() => {
        if(sliderWrapper.value) {
            slides.value = sliderWrapper.value.querySelectorAll(".slide");

            gap = parseFloat(getComputedStyle(sliderWrapper.value).gap); // gaps
            sliderWidth = slides.value[0].offsetWidth; // slide width
            lengthSlides = slides.value.length; // slides count
        }

    })

    // btns logic
    const nextBtn = () => {
        index.value = (index.value + 1) % lengthSlides;
    }

    const prevBtn = () => {
        index.value = (index.value - 1 + lengthSlides) % lengthSlides;
    }

</script>

<template>
    <div class="slider">
        <div class="slider__wrapper flex" ref="sliderWrapper"
            :style="{transform: `translateX(${-index * (sliderWidth + gap)}px)`}"
        >
            <slot>

            </slot>
        </div>

        <div class="slider__btns flex">
            <svg @click="prevBtn" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M20 1.50049C9.784 1.50049 1.5 9.78249 1.5 20.0005C1.5 30.2165 9.784 38.5005 20 38.5005C30.216 38.5005 38.5 30.2165 38.5 20.0005C38.5 9.78249 30.216 1.50049 20 1.50049Z" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M22.8847 13.0581L15.9127 20.0001L22.8847 26.9421" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <svg @click="nextBtn" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M20 1.50049C9.784 1.50049 1.5 9.78249 1.5 20.0005C1.5 30.2165 9.784 38.5005 20 38.5005C30.216 38.5005 38.5 30.2165 38.5 20.0005C38.5 9.78249 30.216 1.50049 20 1.50049Z" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M22.8847 13.0581L15.9127 20.0001L22.8847 26.9421" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        </div>
    </div>
</template>

<style lang="scss">
    .slider {
        &__wrapper {
            gap: 20px;

            transition: .2s;
        }

        &__btns {
            max-width: 120px;
            margin-top: 60px;

            svg {
                width: 40px;
                height: 40px;

                cursor: pointer;

                & path {
                    stroke: $black;

                    transition: .2s;
                }

                &:last-child {
                    transform: rotate(180deg);
                }

                &:hover path {
                    stroke: $red;
                }
            }
        }
    }

</style>