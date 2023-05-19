<template>
  <NModal
    preset="dialog"
    title="编辑账号"
    positive-text="更新"
    negative-text="取消"
    :positive-button-props="{ type: 'info', disabled }"
    :negative-button-props="{ type: 'info' }"
    :show-icon="false"
    :mask-closable="false"
    transform-origin="center"
    @after-enter="load(id)"
    @after-leave="reset"
    @positive-click="confirm">
    <NForm class="p-4" ref="formRef" :model="accountInfo" :rules="rules">
      <NFormItem path="name" label="昵称">
        <NInput
          v-model:value="accountInfo.name"
          placeholder="请输入昵称"
          :theme-overrides="inputOverrides"
          :loading="loading"
          :disabled="disabled"
          clearable></NInput>
      </NFormItem>
      <NFormItem path="email" label="邮箱">
        <NInput
          v-model:value="accountInfo.email"
          placeholder="请输入邮箱"
          :theme-overrides="inputOverrides"
          :loading="loading"
          :disabled="disabled"
          clearable></NInput>
      </NFormItem>
    </NForm>
  </NModal>
</template>

<script setup lang="ts">
import { getAccountInfo, updateAccountInfo, type UpdateAccountData } from '@/api/accounts'
import { inputOverrides } from '@/utils/themeOverrides'
import { useMessage, type FormInst, type FormRules } from 'naive-ui'
import { ref } from 'vue'

const props = defineProps<{
  id: number
}>()
const emits = defineEmits(['reloadAccountList'])

const message = useMessage()

const loading = ref(false)
const disabled = ref(true)
const formRef = ref<FormInst | null>(null)
const accountInfo = ref<UpdateAccountData>({ name: '', email: '' })
const rules: FormRules = {
  name: [{ required: true, message: '请输入昵称', trigger: 'blur' }],
  email: [
    { required: true, message: '请输入邮箱', trigger: 'blur' },
    { type: 'email', message: '请输入正确的邮箱地址', trigger: 'input' }
  ]
}

const load = async function loadAccountInfo(id: number) {
  try {
    loading.value = true
    const res = await getAccountInfo(id)
    loading.value = false
    disabled.value = false

    if (res?.status === 200) {
      accountInfo.value.name = res.data.name
      accountInfo.value.email = res.data.email
    }
  } catch (error) {
    loading.value = false
  }
}

const confirm = async function handleOnConfirmClick() {
  await formRef.value?.validate((error) => {
    if (error) return
  })

  try {
    const res = await updateAccountInfo(props.id, accountInfo.value)
    if (res?.status === 204) message.success('更新成功')
  } catch (error) {
    return false
  }

  emits('reloadAccountList')
}

const reset = function handleOnResetAccountInfoAndStatus() {
  accountInfo.value.name = ''
  accountInfo.value.email = ''
  loading.value = false
  disabled.value = true
}
</script>
