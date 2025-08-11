<script setup lang="ts">
import { fetchArticleById } from '@/features/article/api';

const route = useRoute();
const { data: article } = await useAsyncData(
    'article',
    () => fetchArticleById(route.params.id as string)
);
</script>

<template>
    <article class="article">
        <h1 class="article__title">{{ article?.title }}</h1>
        <NuxtImg class="article__img" src="/image/1.jpg" :alt="article?.title" />
        <div class="article__body">
            <p class="article__label">About</p>
            <div class="article__text" v-html="article?.description"/>
        </div>
    </article>
</template>

<style lang="scss" scoped>
.article {
    width: 100%;
    padding: 120px 110px 80px;

    &__title {
        margin-bottom: 70px;
    }

    &__img {
        width: 100%;
        max-height: 700px;
        margin-bottom: 80px;
        object-fit: cover;
    }

    &__body {
        max-width: 700px;
    }

    &__label {
        margin-bottom: 32px;
    }

    &__text {
        font-size: 32px;
    }
}
</style>
