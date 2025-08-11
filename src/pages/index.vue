<script setup lang="ts">
import { fetchAllArticles, getPaginatedArticles } from '@/features/article/api';
import ArticleCard from '@/widgets/article-card/index.vue';
import Pagination from '@/shared/ui/pagination.vue';

const currentPage = ref(1);
const perPage = 8;

const { data: allArticles } = await useAsyncData(
    'allArticles',
    () => fetchAllArticles()
);

// Вычисляемые свойства для пагинации
const paginatedArticles = computed(() => {
    if (!allArticles.value) return [];
    return getPaginatedArticles(allArticles.value, currentPage.value, perPage);
});

const totalPages = computed(() => {
    if (!allArticles.value) return 0;
    return Math.ceil(allArticles.value.length / perPage);
});
</script>

<template>
    <div class="articles">
        <h1 class="articles__title">Articles</h1>
        <div v-if="paginatedArticles.length" class="articles__list">
            <ArticleCard v-for="article in paginatedArticles" :key="article.id" :article="article" />
        </div>
        <Pagination v-if="totalPages > 1" :current-page="currentPage" :total-pages="totalPages"
            @update:current-page="newPage => currentPage = newPage" />
    </div>
</template>

<style lang="scss" scoped>
.articles {
    width: 100%;
    padding: 120px 110px 140px;

    &__list {
        max-width: 100%;
        width: 100%;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 30px 60px;
        padding: 40px 0 50px;
    }
}
</style>
