<template>
  <NModal
    preset="dialog"
    title="创建轮播图"
    positive-text="创建"
    negative-text="取消"
    :positive-button-props="{ type: 'info' }"
    :negative-button-props="{ type: 'info' }"
    :show-icon="false"
    :mask-closable="false"
    transform-origin="center"
    @positive-click="confirm">
    <NForm
      class="p-4"
      ref="formRef"
      :model="carouselInfo"
      :rules="rules"
      label-placement="left"
      label-width="auto"
      :show-require-mark="false">
      <NFormItem path="title" label="标题">
        <NInput
          v-model:value="carouselInfo.title"
          placeholder="请输入标题"
          :theme-overrides="inputOverrides"
          clearable></NInput>
      </NFormItem>
      <NFormItem path="url" label="跳转链接">
        <NInput
          v-model:value="carouselInfo.url"
          placeholder="请输入跳转链接"
          :theme-overrides="inputOverrides"
          clearable></NInput>
      </NFormItem>
      <NFormItem path="status" label="状态">
        <NSwitch
          v-model:value="carouselInfo.status"
          :checked-value="1"
          :unchecked-value="0"
          :theme-overrides="switchOverrides">
          <template #checked>启用</template>
          <template #unchecked>禁用</template>
        </NSwitch>
      </NFormItem>
      <NFormItem path="img" label="上传图片">
        <ImageUpload @after-upload-image="afterUpload"></ImageUpload>
      </NFormItem>
    </NForm>
  </NModal>
</template>

<script setup lang="ts">
import ImageUpload from '@/components/ImageUpload/ImageUpload.vue'
import { createCarousel, type carouselData } from '@/api/carousels'
import { inputOverrides, switchOverrides } from '@/utils/themeOverrides'
import { useMessage, type FormInst, type FormRules } from 'naive-ui'
import { ref } from 'vue'

const emits = defineEmits(['reloadCarouselList'])

const message = useMessage()

const formRef = ref<FormInst | null>(null)
const carouselInfo = ref<carouselData>({ title: '', img: '', url: '', status: 0 })
const rules: FormRules = {
  title: [{ required: true, message: '请输入标题', trigger: 'blur' }],
  url: [
    { required: true, message: '请输入跳转链接', trigger: 'blur' },
    { type: 'url', message: '请输入正确的链接地址', trigger: 'input' }
  ],
  img: [{ required: true, message: '请上传图片' }]
}

const confirm = async function handleOnCreateCarousel() {
  await formRef.value?.validate((error) => {
    if (error) return
  })

  if (carouselInfo.value.img === 'uploading') {
    message.warning('上传中，请稍后')
    return false
  }

  try {
    const res = await createCarousel(carouselInfo.value)
    if (res?.status === 201) message.success('创建成功')
  } catch (error) {
    return false
  }

  carouselInfo.value.title = ''
  carouselInfo.value.img = ''
  carouselInfo.value.url = ''
  emits('reloadCarouselList')
}

const afterUpload = function handleSetImageUrlAfterUpload(url: string) {
  carouselInfo.value.img = url
}
</script>
