<template>
  <main class="p-2 bg-gray-100 h-full flex flex-col box-border">
    <HeaderNav title="图书管理"></HeaderNav>
    <div class="bg-white p-2 mt-2 rounded flex flex-col flex-1">
      <!-- 头部功能区域 -->
      <header class="flex justify-between px-4">
        <NForm inline :show-feedback="false" label-placement="left">
          <NFormItem label="图书名称">
            <NInput
              v-model:value="bookTitleQuery"
              :theme-overrides="inputOverrides"
              placeholder="请输入名称"
              clearable></NInput>
          </NFormItem>
        </NForm>
        <div class="flex">
          <NButton class="mr-4" :theme-overrides="buttonOverrides" @click="reset">重置</NButton>
          <NButton type="info" @click="search">搜索</NButton>
        </div>
      </header>
      <NDivider style="margin: 0.875rem 0"></NDivider>
      <div class="flex flex-col flex-1">
        <header class="flex justify-between items-center mb-2 px-4">
          <h3 class="text-xl">图书列表</h3>
          <NButton type="info" :render-icon="renderIcon(PlusOutlined)" @click="create">
            新建
          </NButton>
        </header>
        <div class="flex-1">
          <NDataTable
            class="h-full"
            :columns="columns"
            :data="bookList"
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
    <CreateBook v-model:show="showCreateModal" @reload-account-list="reload"></CreateBook>
  </main>
</template>

<script setup lang="ts">
import HeaderNav from '@/components/HeaderNav/HeaderNav.vue'
import CreateBook from './components/CreateBook.vue'
import { getBooks, type bookParams } from '@/api/books'
import { renderIcon } from '@/utils/naiveuiUtils'
import { PlusOutlined } from '@vicons/material'
import { ref, h, onMounted } from 'vue'
import { NImage, type DataTableColumns, NSwitch, NButton } from 'naive-ui'
import {
  inputOverrides,
  buttonOverrides,
  pageOverrides,
  switchOverrides,
  dataTableOverriders
} from '@/utils/themeOverrides'

const page = ref(1)
const totalPage = ref(1)
const loading = ref(false)
const isSearch = ref(false)
const showCreateModal = ref(false)
// const showUpdateModal = ref(false)
// const currentUpdateId = ref(0)
const bookTitleQuery = ref('')
const bookList = ref<book[]>([])
type book = {
  id: number
  title: string
  price: number
  stock: number
  sales: number
  cover_url: string
  is_on: number
  is_recommend: number
  created_at: string
}
const columns = ref<DataTableColumns<book>>([
  {
    title: '图书图片',
    key: 'cover_url',
    render(row) {
      return h(NImage, {
        class: 'p-2 w-20 bg-white rounded',
        src: row['cover_url'],
        showToolbarTooltip: true
      })
    }
  },
  { title: '标题', key: 'title' },
  { title: '价格', key: 'price', width: '6rem' },
  { title: '库存', key: 'stock', width: '6rem' },
  { title: '销量', key: 'sales', width: '6rem' },
  {
    title: '上架状态',
    key: 'is_on',
    width: '8rem',
    render(row) {
      return h(
        NSwitch,
        {
          size: 'medium',
          value: row['is_on'] === 1 ? true : false,
          rubberBand: false,
          themeOverrides: switchOverrides
        },
        {
          checked: () => '已上架',
          unchecked: () => '未上架'
        }
      )
    }
  },
  {
    title: '推荐状态',
    key: 'is_recommend',
    width: '8rem',
    render(row) {
      return h(
        NSwitch,
        {
          size: 'medium',
          value: row['is_recommend'] === 1 ? true : false,
          rubberBand: false,
          themeOverrides: switchOverrides
        },
        {
          checked: () => '已推荐',
          unchecked: () => '未推荐'
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
          dashed: true
        },
        { default: () => '编辑' }
      )
    }
  }
])

onMounted(() => {
  load({ current: page.value })
})

const load = async function loadAccountList(pramas: bookParams) {
  if (loading.value) return
  !bookTitleQuery.value || (pramas.title = bookTitleQuery.value)
  isSearch.value = pramas.title !== undefined ? true : false

  try {
    loading.value = true
    const res = await getBooks(pramas)
    loading.value = false

    if (res?.status === 200) {
      bookList.value = res.data.data
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
  if (loading.value || bookTitleQuery.value === '') return
  load({ current: 1 })
}

const reset = function handleOnResetClick() {
  if (!isSearch.value && (loading.value || bookTitleQuery.value === '')) {
    return
  }

  bookTitleQuery.value = ''
  load({ current: 1 })
}

const create = function handleOnCreateClick() {
  showCreateModal.value = true
}

const reload = function handleOnReloadData() {
  if (bookTitleQuery.value !== '') {
    search()
  } else {
    load({ current: 1 })
  }
}
</script>
