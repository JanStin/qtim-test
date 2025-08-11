<script setup lang="ts">
const props = defineProps({
    currentPage: {
        type: Number,
        required: true
    },
    totalPages: {
        type: Number,
        required: true
    }
})

const emit = defineEmits(['update:currentPage'])

const visiblePages = computed(() => {
    const pages = []
    const maxVisible = 5
    let start = Math.max(1, props.currentPage - Math.floor(maxVisible / 2))
    const end = Math.min(props.totalPages, start + maxVisible - 1)

    if (end - start + 1 < maxVisible) {
        start = Math.max(1, end - maxVisible + 1)
    }

    for (let i = start; i <= end; i++) {
        pages.push(i)
    }

    return pages
})

const setPage = (page: number) => {
    if (page >= 1 && page <= props.totalPages) {
        emit('update:currentPage', page)
    }
}
</script>

<template>
    <div class="pagination">
        <button v-if="currentPage !== 1" class="pagination__button pagination__button--arrow" @click="setPage(currentPage - 1)">
            &lt;
        </button>

        <button v-for="page in visiblePages" :key="page" :class="{ active: page === currentPage }" class="pagination__button"  @click="setPage(page)">
            {{ page }}
        </button>

        <button v-if="currentPage !== totalPages" class="pagination__button pagination__button--arrow" @click="setPage(currentPage + 1)">
            &gt;
        </button>
    </div>
</template>

<style lang="scss" scoped>
.pagination {
    display: flex;
    align-items: center;
    gap: 8px;

    &__button {
        width: 44px;
        height: 44px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: none;
        border-radius: 12px;
        background-color: #f3f3f3;
        transition: all 0.5s ease-out;
        cursor: pointer;

        &.active {
            color: #fff;
            background-color: #101010;
            cursor: default;
            pointer-events: none;
        }

        &--arrow {
            border: 1px solid #e8e8e8;
            background-color: transparent;
        }

        &:hover:not(.active) {
            background-color: #e8e8e8;
        }
    }
}
</style>
