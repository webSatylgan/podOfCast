<script setup>
    const props = defineProps({
        img: String,
        subTitle: String,
        title: String,
        tags: Array,
        date: String
    });
</script>

<template>
    <div class="card">
        <img :src="img" alt="">
        <div class="card__text">
            <p class="card__text-type text-sm">{{subTitle}}</p>
            <h3>{{title}}</h3>
            <p class="card__text-description text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minimvel iam, quis nostrud exercitation ullamco laboris...</p>
            <div class="card__footer flex">
                <div class="flex">
                    <button
                        class="tag"

                        v-for="(tag, index) of tags"
                        :key="index"
                    >{{tag}}</button>
                </div>
                <p>{{ date }}</p>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    .card {
        padding: 16px;

        border: 2px solid $black;
        border-radius: 8px;
        background: $white;

        transition: .2s;

        &:hover {
            box-shadow: 10px 10px 0 0 $black;

            h3 {
                color: $red;
            }

        }

        &__text {
            margin-top: 40px;

            p.card__text-type {
                text-transform: uppercase;
            }

            h3 {
                margin-top: 5px;
            }

            p.card__text-description {
                margin-top: 20px;
            }

            .card__footer {
                margin-top: 25px;
                padding-top: 20px;

                border-top: 1px solid $graphite;

                div {
                    gap: 5px;
                    max-width: 50%;
                    width: auto;

                    button {
                        box-shadow: none;
                    }
                }

                p {
                    font-size: 12px;
                    font-weight: 700;
                    color: $graphite;
                }
            }
        }
    }
</style>