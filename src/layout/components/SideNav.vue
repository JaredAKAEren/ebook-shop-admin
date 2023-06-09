<template>
  <NMenu
    :options="menuOptions"
    :value="activeMenu"
    @update:value="handleMenuChange"
    :theme-overrides="menuOverrides"></NMenu>
</template>

<script setup lang="ts">
import { routeModuleList } from '@/router/index'
import { menuOverrides } from '@/utils/themeOverrides'
import { NIcon, type MenuOption } from 'naive-ui'
import { onMounted, type Component } from 'vue'
import { h, ref } from 'vue'
import { RouterLink, type RouteRecordRaw, useRoute } from 'vue-router'

const route = useRoute()
const menuOptions = ref<MenuOption[]>()
const activeMenu = ref('')

onMounted(() => {
  menuOptions.value = generateMenuOpt(routeModuleList)
  handleMenuChange(route.name as string)
})

function renderIcon(icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) })
}

function generateMenuOpt(routerList: RouteRecordRaw[]): MenuOption[] {
  let menuOpt = routerList.map((item) => {
    let routeName: string =
      item.children?.length === 1 ? (item.children[0].name as string) : (item.name as string)
    let menu: MenuOption = {
      label: () => h(RouterLink, { to: { name: routeName } }, { default: () => item.meta?.title }),
      key: routeName,
      icon: renderIcon(item.meta?.icon as Component)
    }
    return menu
  })
  return menuOpt
}

function handleMenuChange(key: string) {
  activeMenu.value = key
}
</script>

<style>
.n-menu-item-content-header a {
  display: inline-block;
  margin-top: 2px;
}
</style>
