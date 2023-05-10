<template>
    <NConfigProvider class="h-full" :locale="zhCN" :date-locale="dateZhCN">
        <NDialogProvider>
            <NMessageProvider>
                <RouterView />
            </NMessageProvider>
        </NDialogProvider>
    </NConfigProvider>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import { zhCN, dateZhCN } from 'naive-ui'
</script>
