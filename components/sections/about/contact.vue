<script setup>

import TitleUi from "@/components/ui/titleUi.vue";
</script>

<template>
    <div class="contact">
        <div class="container">
            <TitleUi
                title="Get in touch"
                sub-title="Send your message to us"
            />
            <hr>
            <div class="contact__form">
                <form action="">
                    <div class="contact__form-container flex">
                        <div class="contact__form-input">
                            <p class="text-sm">Full name <span>*</span></p>
                            <input type="text" placeholder="Porter Sev">
                        </div>
                        <div class="contact__form-input">
                            <p class="text-sm">Email <span>*</span></p>
                            <input type="text" placeholder="johndoe@gmail.com">
                        </div>
                        <div class="contact__form-input">
                            <p class="text-sm">Phone <span>*</span></p>
                            <input type="text" placeholder="Phone">
                        </div>
                        <div class="contact__form-input">
                            <p class="text-sm">Subject <span>*</span></p>
                            <input type="text" placeholder="Subject...">
                        </div>
                        <div class="contact__form-input contact__form-textarea">
                            <p class="text-sm">Message <span>*</span></p>
                            <textarea placeholder="Your message goes here..." />
                        </div>
                    </div>
                    <div class="contact__form-btn flex">
                        <p class="text-sm"><span>*</span>required</p>
                        <button>SEND MESSAGE</button>
                        <p class="text-sm">Viverra at port accumsan. <span>Orci non</span></p>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
    .contact {
        padding: 140px 0;

        hr {
            max-width: 770px;
            margin: 60px auto 0;
        }

        .contact__form {
            max-width: 770px;
            margin: 40px auto 0;

            p {
                font-weight: 700;

                span {
                    color: $red;
                }
            }

            &-container {
                gap: 20px;
                flex-wrap: wrap;
            }

            &-input {
                width: 48%;

                input {
                    width: 100%;
                    margin-top: 16px;
                }
            }

            &-textarea {
                width: 100%;

                textarea {
                    width: 100%;
                    height: 165px;
                    margin-top: 16px;
                }
            }

            &-btn {
                margin-top: 60px;

                p {
                    max-width: 175px;
                    width: 100%;
                }

                p:last-child {
                    font-weight: 500;
                }
            }
        }
    }
</style>