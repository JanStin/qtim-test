<script setup lang="ts">
import type { IArticle } from '@/features/article/model/types';

defineProps<{
    article: IArticle
}>();
</script>

<template>
    <NuxtLink :to="`/${article.id}`" class="article-card">
        <NuxtImg src="image/1.jpg" :alt="article.title" class="article-card__image" />
        <!-- <h3>{{ article.title }}</h3> -->
        <p class="article-card__text">{{ article.preview }}</p>
        <p class="article-card__more">Read more</p>
    </NuxtLink>
</template>

<style lang="scss" scoped>
.article-card {
    width: 100%;
    padding-top: 20px;

    &:hover {
        padding-top: 0;

        .article-card__more {
            display: block;
        }
    }

    &__image {
        width: 100%;
        max-height: 280px;
        margin-bottom: 25px;
        object-fit: cover;
    }

    &__text {
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        margin-bottom: 15px;
        font-size: 20px;
    }

    &__more {
        display: none;
        color: #e2beff;
    }
}
</style>
