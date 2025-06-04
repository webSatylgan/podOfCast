<script setup>
    // imports --------------------
    import LogoUi from "@/components/ui/logoUi.vue";
    const emit = defineEmits(["toggle"])
    const props = defineProps({
       isBurgerOpen: Boolean
    });

</script>

<template>
    <div class="container">
        <div class="header flex">
            <div class="header__left-side flex">
                <NuxtLink to="/">
                    <LogoUi class="header__logo" />
                </NuxtLink>
                <nav>
                    <NuxtLink to="/detail">Episodes</NuxtLink>
                    <NuxtLink to="/about">About</NuxtLink>
                    <NuxtLink to="/blog">Blog</NuxtLink>
                </nav>
            </div>
            <div class="header__btns flex">
                <button class="tag">RECENT EPISODES</button>
                <button>SUBSCRIBE</button>
            </div>
            <div class="header__burger-menu" :class="{active: isBurgerOpen}" @click="emit('toggle')">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    // header
    .header {
        max-width: 1200px;
        width: 100%;
        padding: 0 20px;

        position: absolute;
        top: 25px;
        left: 50%;
        z-index: 10;
        transform: translateX(-50%);


        &__left-side {
            max-width: 515px;
        }

        nav {
            max-width: 315px;
        }

        // btns styling
        &__btns {
            max-width: 360px;

            button {
                padding: 12px 24px;
                color: $white;
                font-weight: 700;
                font-size: .875rem;

                border: 2px solid $black;
                border-radius: 8px;
                box-shadow: 3px 3px 0 0 rgba(0, 0, 0, 0.25);
            }

            button.tag {
                color: $black;
            }

        }

        &__burger-menu {
            display: none;
            flex-direction: column;
            gap: 8px;
            width: 30px;
            cursor: pointer;

            span {
                width: 100%;
                height: 2px;
                background: $black;
                border-radius: 8px;
                transform-origin: center;
                transition: 0.2s;
            }

            &.active {
                span:first-child {
                    transform: translateY(10px) rotate(45deg);
                }

                span:nth-child(2) {
                    opacity: 0;
                }

                span:last-child {
                    transform: translateY(-10px) rotate(-45deg);
                }
            }
        }

    }
    
    // media ------------
    @media (max-width: 1000px) {
        .header__left-side {
            max-width: 320px;
        }

        .header nav {
            max-width: 200px;
        }
    }
    
    @media (max-width: 768px) {

        .header__burger-menu {
            display: flex;
        }

        .header__left-side {
            width: auto;
        }

        .header nav {
            display: none;
        }

        .header__btns {
            max-width: 320px;
        }
    }
    
    @media (max-width: 480px) {
        .header__btns {
            display: none;
        }
    }
</style>