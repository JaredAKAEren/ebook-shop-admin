<template>
  <main class="p-2 bg-gray-100 h-full flex flex-col">
    <HeaderNav title="用户管理"></HeaderNav>
    <div class="bg-white p-2 mt-2 rounded flex flex-col flex-1">
      <!-- 头部功能区域 -->
      <header class="flex justify-between px-4">
        <NForm inline :show-feedback="false" label-placement="left">
          <NFormItem label="姓名">
            <NInput
              v-model:value="nameQuery"
              :theme-overrides="inputOverrides"
              placeholder="请输入姓名"
              clearable></NInput>
          </NFormItem>
          <NFormItem label="邮箱">
            <NInput
              v-model:value="emailQuery"
              :theme-overrides="inputOverrides"
              placeholder="请输入完整邮箱"
              clearable></NInput>
          </NFormItem>
        </NForm>
        <div class="flex">
          <NButton class="mr-4" :theme-overrides="buttonOverrides" @click="handleOnReset">
            重置
          </NButton>
          <NButton type="info" @click="handleOnSreach">搜索</NButton>
        </div>
      </header>
      <NDivider style="margin: 0.875rem 0"></NDivider>
      <!-- 表格区域 -->
      <div class="flex flex-col flex-1">
        <header class="flex justify-between items-center mb-2 px-4">
          <h3 class="text-xl">用户列表</h3>
          <NButton type="info" :render-icon="renderIcon(PlusOutlined)" @click="handleOnCreate">
            新建
          </NButton>
        </header>
        <div class="flex-1">
          <NDataTable
            class="h-full"
            :columns="columns"
            :data="accountList"
            :loading="loading"
            flex-height></NDataTable>
        </div>
        <NPagination
          class="mt-2 justify-center"
          v-model:page="page"
          @update:page="handlePageChange"
          :page-count="totalPage"
          :theme-overrides="pageOverrides"></NPagination>
      </div>
    </div>
    <CreateAccount
      v-model:show="showCreateModal"
      @reload-account-list="handleOnReload"></CreateAccount>
    <UpdateAccount
      v-model:show="showUpdateModal"
      :id="currentUpdateId"
      @reload-account-list="handleOnReload"></UpdateAccount>
  </main>
</template>

<script setup lang="ts">
import HeaderNav from '@/components/HeaderNav/index.vue'
import CreateAccount from './components/CreateAccount.vue'
import UpdateAccount from './components/UpdateAccount.vue'
import { inputOverrides, buttonOverrides, pageOverrides } from '@/utils/themeOverrides'
import { getAccounts, type AccountsPrarms, updateAccountStatus } from '@/api/accounts'
import { NAvatar, NButton, NIcon, NSwitch, type DataTableColumns, useMessage } from 'naive-ui'
import { PlusOutlined } from '@vicons/material'
import { ref, h, type Component, onMounted } from 'vue'

const message = useMessage()

function renderIcon(icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) })
}
const page = ref(1)
const totalPage = ref(1)
const loading = ref(false)
const isSearch = ref(false)
const showCreateModal = ref(false)
const showUpdateModal = ref(false)
const currentUpdateId = ref(0)
const nameQuery = ref('')
const emailQuery = ref('')
const accountList = ref<account[]>([])
type account = {
  id: number
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
          value: row.is_locked === 1 ? false : true,
          rubberBand: false,
          onClick: () => handleSwitch(row)
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
    render(row) {
      return h(
        NButton,
        {
          size: 'small',
          type: 'info',
          strong: true,
          onClick: () => handleUpdate(row)
        },
        { default: () => '编辑' }
      )
    }
  }
])

onMounted(() => {
  loadAccountList({ current: page.value })
})

async function loadAccountList(pramas: AccountsPrarms) {
  if (loading.value) return
  if (pramas.email !== undefined || pramas.name !== undefined) {
    isSearch.value = true
  } else {
    isSearch.value = false
  }

  try {
    loading.value = true
    const res = await getAccounts(pramas)
    loading.value = false

    if (res.data) {
      accountList.value = res.data.data
      page.value = res.data.meta.pagination.current_page
      totalPage.value = res.data.meta.pagination.total_pages
    }
  } catch (error) {
    console.log(error)
    loading.value = false
  }
}

function handlePageChange(page: number) {
  let accPramas: AccountsPrarms = { current: page }
  if (nameQuery.value !== '') {
    accPramas.name = nameQuery.value
  } else if (emailQuery.value !== '') {
    accPramas.email = emailQuery.value
  }
  loadAccountList(accPramas)
}

function handleOnSreach() {
  if (loading.value || (nameQuery.value === '' && emailQuery.value === '')) return

  let accPramas: AccountsPrarms = { current: 1 }
  if (nameQuery.value !== '') {
    accPramas.name = nameQuery.value
  } else if (emailQuery.value !== '') {
    accPramas.email = emailQuery.value
  }
  loadAccountList(accPramas)
}

function handleOnReset() {
  if (!isSearch.value && (loading.value || (nameQuery.value === '' && emailQuery.value === '')))
    return

  nameQuery.value = ''
  emailQuery.value = ''
  loadAccountList({ current: 1 })
}

function handleOnCreate() {
  showCreateModal.value = true
}

async function handleSwitch(row: account) {
  if (!row) return

  try {
    const res = await updateAccountStatus(row.id)

    if (!res || res.status !== 204) return

    const item = accountList.value.find((item) => item.id === row.id)
    if (item) {
      item.is_locked = item.is_locked === 0 ? 1 : 0
      message.success(`${item.is_locked === 0 ? '启用' : '禁用'}成功`)
    }
  } catch (error) {
    // todo
  }
}

function handleUpdate(row: account) {
  currentUpdateId.value = row.id
  showUpdateModal.value = true
}

function handleOnReload() {
  if (nameQuery.value !== '' || emailQuery.value !== '') {
    handleOnSreach()
  } else {
    loadAccountList({ current: 1 })
  }
}
</script>
