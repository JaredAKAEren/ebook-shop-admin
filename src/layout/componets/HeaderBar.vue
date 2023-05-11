<template>
    <header class="h-12 flex items-center justify-end">
        <NAvatar class="mr-4" round>
            {{ userStore.getUsername }}
        </NAvatar>
        <NButton class="mr-8" strong secondary round type="error" @click="toLogout">登出</NButton>
    </header>
</template>

<script setup lang="ts">
import { useUserStore } from '@/stores/user'
import { useDialog, useMessage } from 'naive-ui'
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const userStore = useUserStore()
const dialog = useDialog()
const message = useMessage()

onMounted(() => {
    userStore.fetchUserInfo()
})

function toLogout() {
    dialog.warning({
        title: '警告',
        content: '你确定要登出吗？',
        positiveText: '确定',
        negativeText: '取消',
        maskClosable: false,
        transformOrigin: 'center',
        showIcon: false,
        closeOnEsc: false,
        negativeButtonProps: { type: 'info' },
        positiveButtonProps: { type: 'info' },
        onPositiveClick: () => {
            logout()
        }
    })
}

function logout() {
    localStorage.removeItem('token')
    router.push('/login')
    message.success('已退出登录')
}
</script>
