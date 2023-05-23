<template>
  <main class="p-2 bg-gray-100 h-full flex flex-col box-border">
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
          <NButton class="mr-4" :theme-overrides="buttonOverrides" @click="reset">重置</NButton>
          <NButton type="info" @click="search">搜索</NButton>
        </div>
      </header>
      <NDivider style="margin: 0.875rem 0"></NDivider>
      <!-- 表格区域 -->
      <div class="flex flex-col flex-1">
        <header class="flex justify-between items-center mb-2 px-4">
          <h3 class="text-xl">用户列表</h3>
          <NButton type="info" :render-icon="renderIcon(PlusOutlined)" @click="create">
            新建
          </NButton>
        </header>
        <div class="flex-1">
          <NDataTable
            class="h-full"
            :columns="columns"
            :data="accountList"
            :loading="loading"
            :theme-overrides="dataTableOverriders"
            flex-height></NDataTable>
        </div>
        <NPagination
          class="mt-2 justify-center"
          v-model:page="page"
          @update:page="pageChange"
          :page-count="totalPage"
          :theme-overrides="pageOverrides"></NPagination>
      </div>
    </div>
    <CreateAccount v-model:show="showCreateModal" @reload-account-list="reload"></CreateAccount>
    <UpdateAccount
      v-model:show="showUpdateModal"
      :id="currentUpdateId"
      @reload-account-list="reload"></UpdateAccount>
  </main>
</template>

<script setup lang="ts">
import HeaderNav from '@/components/HeaderNav/index.vue'
import CreateAccount from './components/CreateAccount.vue'
import UpdateAccount from './components/UpdateAccount.vue'
import {
  inputOverrides,
  buttonOverrides,
  pageOverrides,
  switchOverrides,
  dataTableOverriders
} from '@/utils/themeOverrides'
import { renderIcon } from '@/utils/naiveuiUtils'
import { getAccounts, type AccountsPrarms, updateAccountStatus } from '@/api/accounts'
import { NAvatar, NButton, NSwitch, type DataTableColumns, useMessage } from 'naive-ui'
import { PlusOutlined } from '@vicons/material'
import { ref, h, onMounted } from 'vue'

const message = useMessage()

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
          themeOverrides: switchOverrides,
          onClick: () => switchChange(row)
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
          dashed: true,
          onClick: () => update(row)
        },
        { default: () => '编辑' }
      )
    }
  }
])

onMounted(() => {
  load({ current: page.value })
})

const load = async function loadAccountList(pramas: AccountsPrarms) {
  if (loading.value) return
  // 统一处理 isSearch 的状态
  !nameQuery.value || (pramas.name = nameQuery.value)
  !emailQuery.value || (pramas.email = emailQuery.value)
  isSearch.value = pramas.email !== undefined || pramas.name !== undefined ? true : false

  try {
    loading.value = true
    const res = await getAccounts(pramas)
    loading.value = false

    // 内部的赋值语句不做空处理，因为在 try catch 块内
    // 期望它们能够抛出异常，这样可以终止赋值，交由 catch 块处理
    if (res?.status === 200) {
      accountList.value = res.data.data
      page.value = res.data.meta.pagination.current_page
      totalPage.value = res.data.meta.pagination.total_pages
    }
  } catch (error) {
    loading.value = false
  }
}

const pageChange = function handleOnPageChange(page: number) {
  load({ current: page })
}

const search = function handleOnSearchClick() {
  if (loading.value || (nameQuery.value === '' && emailQuery.value === '')) return
  load({ current: 1 })
}

const reset = function handleOnResetClick() {
  if (!isSearch.value && (loading.value || (nameQuery.value === '' && emailQuery.value === ''))) {
    return
  }

  nameQuery.value = ''
  emailQuery.value = ''
  load({ current: 1 })
}

const create = function handleOnCreateClick() {
  showCreateModal.value = true
}

const switchChange = async function handleOnSwitchChange(row: account) {
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

const update = function handleOnUpdateClick(row: account) {
  currentUpdateId.value = row.id
  showUpdateModal.value = true
}

const reload = function handleOnReloadData() {
  if (nameQuery.value !== '' || emailQuery.value !== '') {
    search()
  } else {
    load({ current: 1 })
  }
}
</script>
