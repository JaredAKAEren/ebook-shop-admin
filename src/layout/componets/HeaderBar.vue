<template>
    <header class="h-12 flex items-center">头部，放一些用户数据</header>
    <button type="button" @click="toLogout">登出</button>
</template>

<script setup lang="ts">
async function toLogout() {
    localStorage.removeItem('token')
    window.location.reload()
}
</script>
