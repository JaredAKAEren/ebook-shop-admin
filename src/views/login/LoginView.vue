<template>
  <main class="h-full overflow-auto wave">
    <div class="max-w-2xl bg-white mx-auto mt-36 rounded-xl overflow-hidden shadow-md flex">
      <div class="w-2/5 px-6 py-8 stacked-waves">
        <header class="flex items-center text-white pl-6 pr-16 mt-2">
          <img class="w-11 -mt-1" src="../../assets/icon/book-icon.svg" alt="eBook" />
          <h2 class="font-bold text-4xl ml-2 tracking-wide">eBook</h2>
        </header>
      </div>
      <div class="px-8 pt-6 pb-8 flex-1">
        <NForm ref="formRef" :model="loginInfo" :rules="rules">
          <h4 class="text-2xl tracking-wide text-center">EBOOK 后台管理系统</h4>
          <NDivider></NDivider>
          <NFormItem path="email" label="邮箱">
            <NInput
              v-model:value="loginInfo.email"
              placeholder="请输入邮箱 eg: super@a.com"
              :theme-overrides="inputOverrides"
              clearable></NInput>
          </NFormItem>
          <NFormItem path="password" label="密码">
            <NInput
              v-model:value="loginInfo.password"
              placeholder="请输入密码 eg: 123123"
              :theme-overrides="inputOverrides"
              type="password"
              show-password-on="mousedown"
              clearable></NInput>
          </NFormItem>
          <NButton class="my-4" @click="toLogin" :loading="loading" block type="info">
            <span class="tracking-widest">登录</span>
          </NButton>
        </NForm>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { login, type LoginParams } from '@/api/auth'
import { inputOverrides } from '@/utils/themeOverrides'
import { useUserStore } from '@/stores/user'
import { useMessage, type FormInst, type FormRules } from 'naive-ui'
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const userStore = useUserStore()
const router = useRouter()
const route = useRoute()
const message = useMessage()

if (window.$message === undefined) {
  window.$message = useMessage()
}

// 表单元素的引用
const formRef = ref<FormInst | null>(null)
const loginInfo = ref<LoginParams>({ email: 'super@a.com', password: '123123' })
const loading = ref<boolean>(false)
const rules: FormRules = {
  email: [{ required: true, message: '请输入邮箱', trigger: 'blur' }],
  password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
}

const toLogin = async function handleOnLoginClick() {
  await formRef.value?.validate((error) => {
    if (error) return
  })

  try {
    loading.value = true
    const res = await login(loginInfo.value)
    loading.value = false

    if (res?.data) {
      userStore.setToken(res.data.access_token)
      const path: string = route.query?.redirect as string
      router.replace({
        path: path ?? '/dashboard/console'
      })
      message.success('登录成功')
    }
  } catch (error) {
    loading.value = false
  }
}
</script>

<style scoped>
.wave {
  width: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url(../../assets/background/wave.svg);
}

.stacked-waves {
  width: max-content;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url(../../assets/background/stacked-waves.svg);
}
</style>
