<template>
    <NLayout position="absolute" has-sider>
        <NLayoutSider collapse-mode="width" show-trigger :bordered="true">
            导航栏
        </NLayoutSider>
        <NLayout>
            <NLayoutHeader class="z-50" position="absolute" :bordered="true">
                头部
            </NLayoutHeader>
            <NLayoutContent class="h-screen py-6" :bordered="true">
                <RouterView></RouterView>
            </NLayoutContent>
            <NLayoutFooter position="absolute" :bordered="true">
                尾部
            </NLayoutFooter>
        </NLayout>
    </NLayout>
</template>

<script setup lang="ts">

</script>
