<template>
    <n-config-provider
        class="h-full"
        :theme-overrides="{ common: { fontWeightStrong: '600' } }"
        :locale="zhCN"
        :date-locale="dateZhCN"
    >
        <RouterView />
    </n-config-provider>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import { zhCN, dateZhCN } from 'naive-ui'
</script>
