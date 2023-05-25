<template>
  <main class="p-2 bg-gray-100 h-full flex flex-col box-border">
    <HeaderNav title="轮播图管理"></HeaderNav>
    <div class="bg-white p-2 mt-2 rounded flex flex-col flex-1">
      <header class="flex justify-between items-center mb-2 px-4">
        <h3 class="text-xl">轮播图列表</h3>
        <NButton type="info" :render-icon="renderIcon(PlusOutlined)" @click="create">新建</NButton>
      </header>
      <div class="flex-1">
        <NDataTable
          class="h-full"
          :columns="columns"
          :data="carouselList"
          :loading="loading"
          :theme-overrides="dataTableOverriders"
          flex-height></NDataTable>
      </div>
      <NPagination
        class="mt-2 justify-center"
        v-model:page="page"
        :page-count="totalPage"
        :theme-overrides="pageOverrides"></NPagination>
    </div>
    <CreateCarousel
      v-model:show="showCreateModal"
      @reload-carousel-list="reload(1)"></CreateCarousel>
  </main>
</template>

<script setup lang="ts">
import HeaderNav from '@/components/HeaderNav/HeaderNav.vue'
import CreateCarousel from './components/CreateCarousel.vue'
import { deleteCarousel, getCarousels, updateCarouselStatus } from '@/api/carousels'
import { renderIcon } from '@/utils/naiveuiUtils'
import { pageOverrides, switchOverrides, dataTableOverriders } from '@/utils/themeOverrides'
import { PlusOutlined } from '@vicons/material'
import { NSwitch, type DataTableColumns, NButton, NImage, useMessage, useDialog } from 'naive-ui'
import { onMounted, ref, h } from 'vue'

const message = useMessage()
const dialog = useDialog()

const page = ref(1)
const totalPage = ref(1)
const loading = ref(false)
const showCreateModal = ref(false)
const carouselList = ref<carousel[]>([])
type carousel = {
  id: number
  img: string
  img_url: string
  seq: number
  status: number
  title: string
  url: string
  created_at: string
  updated_at: string
}
const columns = ref<DataTableColumns<carousel>>([
  {
    title: '图片',
    key: 'img_url',
    render(row) {
      return h(NImage, { class: 'p-2 w-32', src: row.img_url, showToolbarTooltip: true })
    }
  },
  { title: '标题', key: 'title' },
  {
    title: '跳转链接',
    key: 'url',
    render(row) {
      return h(
        'a',
        { class: 'text-blue-600 font-bold hover:underline', href: row.url, target: '_blank' },
        row.url
      )
    }
  },
  {
    title: '状态',
    key: 'status',
    width: '8rem',
    render(row) {
      return h(
        NSwitch,
        {
          size: 'medium',
          rubberBand: false,
          checkedValue: 1,
          uncheckedValue: 0,
          value: row.status,
          themeOverrides: switchOverrides,
          onClick: () => switchChange(row.id)
        },
        {
          checked: () => '启用',
          unchecked: () => '禁用'
        }
      )
    }
  },
  { title: '排序', key: 'seq', sorter: (row1, row2) => row1.seq - row2.seq, width: '6rem' },
  { title: '创建时间', key: 'created_at' },
  {
    title: '操作',
    key: 'option',
    render(row) {
      return [
        h(
          NButton,
          {
            class: 'mr-2',
            size: 'small',
            type: 'info',
            dashed: true,
            strong: true
          },
          { default: () => '编辑' }
        ),
        h(
          NButton,
          {
            size: 'small',
            type: 'error',
            dashed: true,
            strong: true,
            onClick: () => delDialog(row.id)
          },
          { default: () => '删除' }
        )
      ]
    }
  }
])

onMounted(() => {
  load(page.value)
})

const load = async function loadCarouselList(current: number) {
  if (loading.value) return

  try {
    loading.value = true
    const res = await getCarousels(current)
    loading.value = false

    if (res?.status === 200) {
      carouselList.value = res.data.data
      page.value = res.data.meta.pagination.current_page
      totalPage.value = res.data.meta.pagination.total_pages
    }
  } catch (error) {
    loading.value = false
  }
}

const create = function handleOnCreateClick() {
  showCreateModal.value = true
}

const reload = function handleOnReloadData(page: number) {
  load(page)
}

const switchChange = async function handleOnSwitchChange(id: number) {
  try {
    const res = await updateCarouselStatus(id)
    if (res?.status !== 204) return
    const item = carouselList.value.find((item) => item.id === id)
    if (item !== undefined) {
      item.status = item.status === 0 ? 1 : 0
      message.success(`${item.status === 1 ? '启用' : '禁用'}成功`)
    }
  } catch (error) {
    // todo
  }
}

const delDialog = function handleOnDeleteClick(id: number) {
  dialog.warning({
    title: '警告',
    content: '你确定要删除吗？',
    positiveText: '确定',
    negativeText: '取消',
    maskClosable: false,
    transformOrigin: 'center',
    showIcon: false,
    closeOnEsc: false,
    negativeButtonProps: { type: 'info' },
    positiveButtonProps: { type: 'info' },
    onPositiveClick: () => {
      toDelete(id)
    }
  })
}

const toDelete = async function handleOnDeleteClick(id: number) {
  try {
    const res = await deleteCarousel(id)
    if (res?.status !== 204) return
    message.success('删除成功')
    load(page.value)
  } catch (error) {
    load(page.value)
  }
}
</script>
