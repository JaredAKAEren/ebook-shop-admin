<template>
    <form>
        <div>
            <label for="email">邮箱：</label>
            <input v-model="email" type="email" id="email" />
        </div>
        <div>
            <label for="password">密码：</label>
            <input v-model="password" type="password" id="password" />
        </div>
        <div>
            <button type="button" @click="toLogin">登录</button>
        </div>
    </form>
</template>

<script setup lang="ts">
import { login } from '@/api/auth'
import { useUserStore } from '@/stores/user'
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const userStore = useUserStore()
const router = useRouter()
const route = useRoute()

const email = ref('')
const password = ref('')

async function toLogin() {
    const res = await login({
        email: email.value,
        password: password.value
    })
    console.log(res)
    if (res.data) {
        userStore.setToken(res.data.access_token)
        let path: string = route.query.redirect as string
        router.replace({
            path: path === '/' || path === undefined || path === null ? '/dashboard/console' : path
        })
    }
}
</script>
