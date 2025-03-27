<script setup>
    import QuoteUi from "@/components/ui/quoteUi.vue";

    const props = defineProps({
       quote: String,
    });
</script>

<template>
    <div class="quote">
        <QuoteUi />
        <h3>{{quote}}</h3>
        <div class="flex">
            <img src="@/assets/imgs/quote.jpg" alt="">
            <p class="text-sm">John Smith,</p>
            <a href="">
                <img src="@/assets/imgs/spotify-quote.svg" alt="">
                Social Community Manager
            </a>
        </div>
    </div>
</template>

<style lang="scss">
    .quote {
        width: 100%;
        padding: 40px 0;

        background: $pink-bg;
        border-radius: 8px;

        position: relative;

        .q-symbol {
            display: block;

            text-align: center;
        }

        h3 {
            max-width: 670px;
            margin: 0 auto;

            text-align: center;
        }

        div {
            max-width: 400px;
            margin: 50px auto 0;

            img {
                max-width: 50px;
                height: 50px;
                border-radius: 50px;
            }

            a {
                display: flex;
                align-items: center;
                gap: 5px;

                font-size: 0.875rem;

                img {
                    width: 16px;
                    height: 16px;
                }
            }
        }

        &::before,
        &::after {
            content: "";
            display: block;

            position: absolute;
        }

        &::before {
            width: 120px;
            height: 120px;

            bottom: 0;
            left: -60px;

            background: url("@/assets/imgs/quote-effect-1.svg") no-repeat center / cover;
        }

        &::after {
            width: 200px;
            height: 200px;

            top: -70px;
            right: -60px;

            background: url("@/assets/imgs/quote-effect-2.svg") no-repeat center / cover;
        }
    }
</style>