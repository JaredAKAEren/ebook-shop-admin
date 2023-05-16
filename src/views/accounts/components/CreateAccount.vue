<template>
  <NModal
    preset="dialog"
    title="创建账号"
    content="创建账号"
    positive-text="创建"
    negative-text="取消"
    :positive-button-props="{ type: 'info' }"
    :negative-button-props="{ type: 'info' }"
    :show-icon="false"
    transform-origin="center"
    @positive-click="handleOnConfirm">
    <NForm class="p-4" ref="formRef" :model="accountInfo" :rules="rules">
      <NFormItem path="name" label="昵称">
        <NInput
          v-model:value="accountInfo.name"
          placeholder="请输入昵称"
          :theme-overrides="inputOverrides"
          clearable></NInput>
      </NFormItem>
      <NFormItem path="email" label="邮箱">
        <NInput
          v-model:value="accountInfo.email"
          placeholder="请输入邮箱"
          :theme-overrides="inputOverrides"
          clearable></NInput>
      </NFormItem>
      <NFormItem path="password" label="密码">
        <NInput
          v-model:value="accountInfo.password"
          placeholder="请输入密码"
          :theme-overrides="inputOverrides"
          type="password"
          show-password-on="mousedown"
          clearable></NInput>
      </NFormItem>
    </NForm>
  </NModal>
</template>

<script setup lang="ts">
import { createAccount, type AccountData } from '@/api/accounts'
import { inputOverrides } from '@/utils/themeOverrides'
import { useMessage, type FormInst, type FormRules } from 'naive-ui'
import { ref } from 'vue'

const message = useMessage()

const formRef = ref<FormInst | null>(null)
const accountInfo = ref<AccountData>({ name: '', email: '', password: '' })
const rules: FormRules = {
  name: [{ required: true, message: '请输入昵称', trigger: 'blur' }],
  email: [
    { required: true, message: '请输入邮箱', trigger: 'blur' },
    { type: 'email', message: '请输入正确的邮箱地址', trigger: 'input' }
  ],
  password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
}

const emits = defineEmits(['reloadAccountList'])

async function handleOnConfirm() {
  await formRef.value?.validate((error) => {
    if (error) return
  })

  try {
    const res = await createAccount(accountInfo.value)

    if (res && res.status === 201) {
      message.success('创建成功')
    }
  } catch (error) {
    return false
  }

  accountInfo.value.name = ''
  accountInfo.value.email = ''
  accountInfo.value.password = ''
  emits('reloadAccountList')
}
</script>
