<template>
  <NUpload
    list-type="image-card"
    :theme-overrides="uploadOverrides"
    :custom-request="upload"
    :show-cancel-button="false"
    :max="maxImage"
    @finish="finish"
    @remove="remove"></NUpload>
</template>

<script setup lang="ts">
import { getOSSToken } from '@/api/auth'
import { uploadOverrides } from '@/utils/themeOverrides'
import axios from 'axios'
import { useMessage, type UploadCustomRequestOptions, type UploadFileInfo } from 'naive-ui'
import { ref } from 'vue'

defineProps<{ maxImage?: number }>()
const emits = defineEmits(['afterUploadImage'])

const message = useMessage()

const fileName = ref('')
const fileUrl = ref('')

const upload = async function handleImageUpload({
  file,
  onFinish,
  onError,
  onProgress
}: UploadCustomRequestOptions) {
  onProgress({ percent: 20 })
  emits('afterUploadImage', 'uploading')
  try {
    const res = await getOSSToken()
    if (res?.status !== 200) {
      return
    }

    const formData = new FormData()
    const formatName = `${Date.now()}${Math.floor(Math.random() * 1000)}.${file.name
      .split('.')
      .pop()}`
    formData.append('key', formatName)
    formData.append('OSSAccessKeyId', res.data.accessid)
    formData.append('policy', res.data.policy)
    formData.append('Signature', res.data.signature)
    formData.append('file', file.file as File)
    const resOSS = await axios.post(res.data.host, formData, {
      headers: {
        'Content-Type': file.type
      },
      onUploadProgress: ({ progress }) => {
        // FIXME: 一开始 progress 就为 100，图片大于 4MB 时首次的 progress 才会小于100
        onProgress({ percent: Math.ceil((progress ?? 0.7) * 100) })
      }
    })
    if (resOSS?.status === 204) {
      onProgress({ percent: 100 })
      fileName.value = formatName
      fileUrl.value = `${res.data.host}${formatName}`
      onFinish()
      message.success('上传成功')
    }
  } catch (error) {
    onError()
    message.error('上传失败')
  }
}

const finish = function handleOnFileUploadFinish({ file }: { file: UploadFileInfo }) {
  file.name = fileName.value
  file.url = fileUrl.value
  emits('afterUploadImage', fileUrl.value)
  return file
}

const remove = function handleOnImageRemove() {
  emits('afterUploadImage', '')
}
</script>
