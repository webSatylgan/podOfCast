<script setup>
    // imports --------------------
    import LogoUi from "@/components/ui/logoUi.vue";
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
                    <NuxtLink to="">More</NuxtLink>
                </nav>
            </div>
            <div class="header__btns flex">
                <button class="tag">RECENT EPISODES</button>
                <button>SUBSCRIBE</button>
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
    }
</style>