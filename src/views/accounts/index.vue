<template>
    <main class="p-2 bg-gray-100 h-full flex flex-col">
        <HeaderNav title="用户管理" />
        <div class="bg-white p-3 mt-2 rounded overflow-hidden flex flex-col">
            <header class="flex justify-between">
                <NForm inline :show-feedback="false" label-placement="left">
                    <NFormItem label="姓名">
                        <NInput :theme-overrides="inputThemeOverrides"> </NInput>
                    </NFormItem>
                    <NFormItem label="邮箱">
                        <NInput :theme-overrides="inputThemeOverrides"> </NInput>
                    </NFormItem>
                </NForm>
                <div>
                    <NButton>重置</NButton>
                </div>
            </header>
            <NDivider style="margin-top: 1rem; margin-bottom: 1rem" />
            <div class="overflow-y-scroll">
                <div class="h-screen"></div>
            </div>
            <NPagination
                class="mt-2 justify-center"
                v-model:page="page"
                :page-count="30"
                :theme-overrides="pageThemeOverrides"
            />
        </div>
    </main>
</template>

<script setup lang="ts">
import HeaderNav from '@/components/HeaderNav/index.vue'
import type { InputProps, PaginationProps } from 'naive-ui'
import { ref } from 'vue'

type InputThemeOverrides = NonNullable<InputProps['themeOverrides']>
type PageThemeOverrides = NonNullable<PaginationProps['themeOverrides']>
const inputThemeOverrides: InputThemeOverrides = {
    borderHover: '1px solid #2080f0',
    borderFocus: '1px solid #2080f0',
    boxShadowFocus: '0 0 0 2px #2080f033'
}
const pageThemeOverrides: PageThemeOverrides = {
    itemTextColorHover: '#2080f0',
    itemTextColorActive: '#2080f0',
    itemTextColorPressed: '#2080f0',
    itemBorderActive: '1px solid #2080f0'
}

const page = ref(1)
</script>
