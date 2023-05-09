<template>
    <n-config-provider :theme-overrides="{ common: { fontWeightStrong: '600' } }">
        <RouterView />
    </n-config-provider>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>
