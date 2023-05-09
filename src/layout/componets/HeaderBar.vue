<template>
    <header class="h-12 flex items-center">
        头部，放一些用户数据
        <button type="button" @click="toLogout">登出</button>
    </header>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
async function toLogout() {
    localStorage.removeItem('token')
    router.push('/login')
}
</script>
