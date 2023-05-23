<template>
  <header class="h-12 flex items-center justify-end">
    <NAvatar class="mr-4" round>
      {{ userStore.getUsername }}
    </NAvatar>
    <NButton class="mr-8" strong secondary round type="error" @click="toLogout">登出</NButton>
  </header>
</template>

<script setup lang="ts">
import { postLogout } from '@/api/auth'
import { useUserStore } from '@/stores/user'
import { useDialog, useMessage } from 'naive-ui'
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const userStore = useUserStore()
const dialog = useDialog()
const message = useMessage()

onMounted(() => {
  userInfo()
})

const userInfo = async function loadUserInfo() {
  try {
    await userStore.fetchUserInfo()
  } catch (error) {
    console.log(error)
    localStorage.removeItem('token')
    userStore.setToken('')
    router.push('/login')
  }
}

const toLogout = function handleOnLogoutClick() {
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

const logout = async function logout() {
  try {
    const res = await postLogout()
    if (res?.status === 204) {
      localStorage.removeItem('token')
      userStore.setToken('')
      message.success('已退出登录')
      router.push('/login')
    }
  } catch {
    // todo
  }
}
</script>
