<template>
    <main class="p-2 bg-gray-100 h-full flex flex-col">
        <HeaderNav title="用户管理" />
        <div class="bg-white p-2 mt-2 rounded flex flex-col flex-1">
            <header class="flex justify-between px-4">
                <NForm inline :show-feedback="false" label-placement="left">
                    <NFormItem label="姓名">
                        <NInput
                            v-model:value="nameQuery"
                            :theme-overrides="inputOverrides"
                            placeholder="请输入姓名"
                        />
                    </NFormItem>
                    <NFormItem label="邮箱">
                        <NInput
                            v-model:value="emailQuery"
                            :theme-overrides="inputOverrides"
                            placeholder="请输入完整邮箱"
                        />
                    </NFormItem>
                </NForm>
                <div class="flex">
                    <NButton class="mr-4" :theme-overrides="buttonOverrides" @click="handleOnReset"
                        >重置</NButton
                    >
                    <NButton type="info" @click="handleOnSreach">搜索</NButton>
                </div>
            </header>
            <NDivider style="margin: 0.875rem 0" />
            <header class="flex justify-between items-center mb-2 px-4">
                <h3 class="text-xl">用户列表</h3>
                <NButton type="info" :render-icon="renderIcon(PlusOutlined)">新建</NButton>
            </header>
            <div class="flex-1">
                <NDataTable
                    class="h-full"
                    :columns="columns"
                    :data="accountList"
                    :loading="loading"
                    flex-height
                />
            </div>
            <NPagination
                class="mt-2 justify-center"
                v-model:page="page"
                @update:page="handlePageChange"
                :page-count="totalPage"
                :theme-overrides="pageOverrides"
            />
        </div>
    </main>
</template>

<script setup lang="ts">
import HeaderNav from '@/components/HeaderNav/index.vue'
import { inputOverrides, buttonOverrides, pageOverrides } from '@/utils/themeOverrides'
import { getAccounts, type AccPrarms } from '@/api/accounts'
import { NAvatar, NButton, NIcon, NSwitch, type DataTableColumns } from 'naive-ui'
import { PlusOutlined } from '@vicons/material'
import { ref, h, type Component, onMounted } from 'vue'

function renderIcon(icon: Component) {
    return () => h(NIcon, null, { default: () => h(icon) })
}
const page = ref(1)
const totalPage = ref(10)
const loading = ref(false)
const nameQuery = ref('')
const emailQuery = ref('')
const accountList = ref([])
type account = {
    avatar_url: string
    name: string
    email: string
    is_locked: number
    created_at: string
}
const columns = ref<DataTableColumns<account>>([
    {
        title: '头像',
        key: 'avatar_url',
        render(row) {
            return h(NAvatar, { round: true, src: row.avatar_url, size: 'medium' })
        }
    },
    { title: '姓名', key: 'name' },
    { title: '邮箱', key: 'email' },
    {
        title: '状态',
        key: 'is_locked',
        render(row) {
            return h(
                NSwitch,
                {
                    size: 'medium',
                    value: row.is_locked === 1 ? false : true
                },
                {
                    checked: () => '启用',
                    unchecked: () => '禁用'
                }
            )
        }
    },
    { title: '创建时间', key: 'created_at' },
    {
        title: '操作',
        key: 'option',
        render() {
            return h(
                NButton,
                {
                    size: 'small',
                    type: 'info',
                    strong: true
                },
                { default: () => '编辑' }
            )
        }
    }
])

onMounted(() => {
    loadAccountList({ current: page.value })
})

async function loadAccountList(pramas: AccPrarms) {
    if (loading.value) return

    loading.value = true
    const res = await getAccounts(pramas)
    loading.value = false
    if (!res) return

    accountList.value = res.data.data
    totalPage.value = res.data.meta.pagination.total_pages
}

function handlePageChange(page: number) {
    let accPramas: AccPrarms = { current: page }
    if (nameQuery.value !== '') {
        accPramas.name = nameQuery.value
    } else if (emailQuery.value !== '') {
        accPramas.email = emailQuery.value
    }
    loadAccountList(accPramas)
}

function handleOnSreach() {
    if (loading.value || (nameQuery.value === '' && emailQuery.value === '')) return
    let accPramas: AccPrarms = { current: 1 }
    if (nameQuery.value !== '') {
        accPramas.name = nameQuery.value
    } else if (emailQuery.value !== '') {
        accPramas.email = emailQuery.value
    }
    loadAccountList(accPramas)
}

function handleOnReset() {
    if (loading.value || (nameQuery.value === '' && emailQuery.value === '')) return
    nameQuery.value = ''
    emailQuery.value = ''
    loadAccountList({ current: 1 })
}
</script>
