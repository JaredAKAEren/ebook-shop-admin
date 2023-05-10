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
                    <NDivider />
                    <NFormItem path="email" label="邮箱">
                        <NInput
                            v-model:value="loginInfo.email"
                            placeholder="请输入邮箱 eg: super@a.com"
                            clearable
                        />
                    </NFormItem>
                    <NFormItem path="password" label="密码">
                        <NInput
                            v-model:value="loginInfo.password"
                            placeholder="请输入密码 eg: 123123"
                            type="password"
                            show-password-on="mousedown"
                            clearable
                        />
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
import { getNowUserInfo, login } from '@/api/auth'
import { useUserStore } from '@/stores/user'
import type { FormInst, FormRules } from 'naive-ui'
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const userStore = useUserStore()
const router = useRouter()
const route = useRoute()

interface loginType {
    email: string
    password: string
}

// 表单元素的引用
const loading = ref<boolean>(false)
const formRef = ref<FormInst | null>(null)
const loginInfo = ref<loginType>({ email: 'super@a.com', password: '123123' })

const rules: FormRules = {
    email: [{ required: true, message: '请输入邮箱', trigger: 'blur' }],
    password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
}

async function toLogin() {
    formRef.value?.validate((error) => {
        if (error) {
            return
        }
    })

    loading.value = true
    const res = await login(loginInfo.value)
    loading.value = false

    if (res.data) {
        userStore.setToken(res.data.access_token)
        fetchUserInfo()
        let path: string = route.query.redirect as string
        router.replace({
            path: path === '/' || path === undefined || path === null ? '/dashboard/console' : path
        })
    }
}

async function fetchUserInfo() {
    const res = await getNowUserInfo()
    if (res.data) {
        userStore.setUsername(res.data.name)
        userStore.setAavatar(res.data.avatar_url)
        userStore.setUserInfo(res.data)
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
