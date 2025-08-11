<script setup lang="ts">
</script>

<template>
    <header class="header">
        <NuxtImg class="header__logo" src="image/qtim.png" />
        <nav class="header__nav">
            <NuxtLink class="header__nav-link" to="/">Works</NuxtLink>
            <NuxtLink class="header__nav-link" to="/">About</NuxtLink>
        </nav>
        <div class="header__right">
            <div class="header__lang">
                <NuxtImg class="header__lang-img" src="image/uk.png" />
            </div>
            <button class="header__button">
                Let’s work
            </button>
        </div>
    </header>
</template>

<style lang="scss" scoped>
.header {
    display: flex;
    gap: 90px;
    padding: 35px 40px;

    &__logo {
        display: block;
        width: 84px;
        object-fit: scale-down;
    }

    &__nav {
        display: flex;
        align-items: center;
        gap: 60px;
        margin: auto 0 auto auto;

        &-link {
            font-size: 20px;

            &:hover {
                opacity: 0.8;
            }
        }
    }

    &__right {
        display: flex;
        gap: 16px;
    }

    &__lang {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 14px;
        border: 2px solid rgba($color: #000, $alpha: 0.1);
        border-radius: 50%;

        &-img {
            width: 24px;
        }
    }

    &__button {
        color: #fff;
        background-color: #101010;
        padding: 16px 32px;
        border: none;
        border-radius: 32px;
    }
}
</style>
