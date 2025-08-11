<script setup lang="ts">
import AppHeader from '@/widgets/layout/header.vue'
import AppFooter from '@/widgets/layout/footer.vue'
</script>
<template>
    <NuxtLayout>
        <AppHeader />
        <NuxtPage />
        <AppFooter />
    </NuxtLayout>
</template>

