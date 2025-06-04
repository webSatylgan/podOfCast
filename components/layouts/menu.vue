<script setup>
    const props = defineProps({
        isBurgerOpen: Boolean
    })

    watch(() => props.isBurgerOpen, (val) => {
       document.body.style.overflow = val ? "hidden" : "";
    });
</script>

<template>
    <div class="menu" :class="{active: isBurgerOpen}">
        <NuxtLink to="/detail">Episodes</NuxtLink>
        <NuxtLink to="/about">About</NuxtLink>
        <NuxtLink to="/blog">Blog</NuxtLink>
        <div class="menu__btns">
            <button class="tag">RECENT EPISODES</button>
            <button>SUBSCRIBE</button>
        </div>
    </div>
</template>

<style scoped lang="scss">
    .menu {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 25px;
        width: 0;
        height: 100vh;

        background: $white;

        opacity: 0;
        pointer-events: none;

        position: fixed;
        top: 0;
        right: 0;
        z-index: 2;

        transition: .2s;

        a {
            font-size: 2rem;
        }

        &__btns {

            button {
                margin: 20px auto 0;
                padding: 12px 24px;
                color: $white;
                font-weight: 700;
                font-size: 1rem;

                border: 2px solid $black;
                border-radius: 8px;
                box-shadow: 3px 3px 0 0 rgba(0, 0, 0, 0.25);
            }

            button.tag {
                color: $black;
            }
        }

        &.active {
            width: 100%;
            opacity: 1;
            pointer-events: auto;
        }
    }
</style>