<template>
  <NLayout position="absolute" has-sider>
    <NLayoutSider
      show-trigger
      collapse-mode="width"
      :collapsed="collapsed"
      @collapse="collapsed = true"
      @expand="collapsed = false"
      :bordered="true">
      <header class="h-20 flex justify-center items-center">
        <div class="flex" v-show="!collapsed">
          <img class="w-11 -mt-1" src="../assets/icon/book-icon.svg" alt="eBook" />
          <h2 class="font-bold text-4xl ml-2 tracking-wide">eBook</h2>
        </div>
      </header>
      <SideNav></SideNav>
    </NLayoutSider>
    <NLayout>
      <NLayoutHeader class="z-50" position="absolute" :bordered="true">
        <HeaderBar></HeaderBar>
      </NLayoutHeader>
      <NLayoutContent class="h-screen pt-12 pb-6" :bordered="true">
        <RouterView></RouterView>
      </NLayoutContent>
      <NLayoutFooter position="absolute" :bordered="true">
        <FooterBar></FooterBar>
      </NLayoutFooter>
    </NLayout>
  </NLayout>
</template>

<script setup lang="ts">
import HeaderBar from './components/HeaderBar.vue'
import FooterBar from './components/FooterBar.vue'
import SideNav from './components/SideNav.vue'

import { ref } from 'vue'
import { useMessage } from 'naive-ui'

const collapsed = ref(true)

if (window.$message === undefined) {
  window.$message = useMessage()
}
</script>
