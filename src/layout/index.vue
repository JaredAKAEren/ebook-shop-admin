<template>
    <NLayout position="absolute" has-sider>
        <NLayoutSider collapse-mode="width" show-trigger :bordered="true">
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
import HeaderBar from './componets/HeaderBar.vue'
import FooterBar from './componets/FooterBar.vue'
import SideNav from './componets/SideNav.vue'
</script>
