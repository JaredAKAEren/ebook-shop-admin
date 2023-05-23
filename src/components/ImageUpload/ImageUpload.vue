<template>
  <NUpload
    list-type="image-card"
    :theme-overrides="uploadOverrides"
    :custom-request="upload"
    @finish="finish"></NUpload>
</template>

<script setup lang="ts">
import { getOSSToken } from '@/api/auth'
import { uploadOverrides } from '@/utils/themeOverrides'
import axios from 'axios'
import { useMessage, type UploadCustomRequestOptions, type UploadFileInfo } from 'naive-ui'
import { ref } from 'vue'

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
      onUploadProgress: ({ loaded, total }) => {
        // FIXME: 无法计算上传进度，loaded 的值直接为 total 的值，也就是文件的大小
        onProgress({ percent: Math.ceil((loaded * 100) / (total as number)) })
      }
    })
    if (resOSS?.status === 204) {
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
</script>
