<template>
  <NModal
    style="width: fit-content"
    preset="dialog"
    title="添加图书"
    positive-text="添加"
    negative-text="取消"
    :positive-button-props="{ type: 'info' }"
    :negative-button-props="{ type: 'info' }"
    :show-icon="false"
    :mask-closable="false"
    transform-origin="center"
    @positive-click="confirm">
    <div class="flex flex-col">
      <NForm
        class="py-4 box-border"
        ref="formRef"
        :model="bookInfo"
        :rules="rules"
        :show-require-mark="false">
        <div class="flex gap-8">
          <NFormItem class="flex-1" path="title" label="标题">
            <NInput
              v-model:value="bookInfo.title"
              placeholder="请输入标题"
              :theme-overrides="inputOverrides"
              clearable></NInput>
          </NFormItem>
          <NFormItem path="price" label="价格">
            <NInputNumber
              v-model:value="bookInfo.price"
              placeholder="请输入价格"
              :theme-overrides="inputNumberOverrides"
              :precision="2"
              min="0"
              clearable>
              <template #prefix>￥</template>
            </NInputNumber>
          </NFormItem>
          <NFormItem path="stock" label="库存">
            <NInputNumber
              v-model:value="bookInfo.stock"
              placeholder="请输入库存"
              :theme-overrides="inputNumberOverrides"
              :precision="0"
              min="0"
              clearable></NInputNumber>
          </NFormItem>
        </div>
        <div class="flex gap-8">
          <NFormItem path="cover" label="封面">
            <ImageUpload :max-image="1" @after-upload-image="afterUpload"></ImageUpload>
          </NFormItem>
          <NFormItem class="flex-1" path="description" label="描述">
            <NInput
              v-model:value="bookInfo.description"
              placeholder="请输入描述"
              :theme-overrides="inputOverrides"
              type="textarea"
              :rows="4"
              maxlength="300"
              show-count
              clearable></NInput>
          </NFormItem>
        </div>
      </NForm>
      <NFormItem ref="editorRef" label="详情" :rule="editorRules">
        <QuillEditor class="editor-wrapper" @content-change="setContent"></QuillEditor>
      </NFormItem>
    </div>
  </NModal>
</template>

<script setup lang="ts">
import ImageUpload from '@/components/ImageUpload/ImageUpload.vue'
import { createBook, type bookData } from '@/api/books'
import QuillEditor from '@/components/QuillEditor/QuillEditor.vue'
import { inputOverrides, inputNumberOverrides } from '@/utils/themeOverrides'
import {
  useMessage,
  type FormInst,
  type FormRules,
  type FormItemInst,
  type FormItemRule
} from 'naive-ui'
import { ref } from 'vue'

const emits = defineEmits(['reloadAccountList'])

const message = useMessage()

const formRef = ref<FormInst | null>(null)
const editorRef = ref<FormItemInst | null>(null)
const bookInfo = ref<bookData>({
  category_id: 14,
  title: '',
  description: '',
  price: 0,
  stock: 0,
  cover: '',
  details: ''
})
const rules: FormRules = {
  title: [{ required: true, message: '请输入标题', trigger: 'blur' }],
  price: [{ type: 'number', required: true, message: '请输入价格', trigger: 'blur' }],
  stock: [{ type: 'number', required: true, message: '请输入库存', trigger: 'blur' }],
  description: [{ required: true, message: '请输入描述', trigger: 'blur' }],
  cover: [{ required: true, message: '请上传图片' }]
}
const editorRules: FormItemRule = {
  validator() {
    if (bookInfo.value.details === '') {
      return new Error('请输入详情')
    }
  }
}

const afterUpload = function handleSetImageUrlAfterUpload(url: string) {
  bookInfo.value.cover = url
}

const setContent = function handleSetDetails(details: string) {
  bookInfo.value.details = details
}

const confirm = async function handleOnConfirmClick() {
  await formRef.value?.validate((error) => {
    if (error) return
  })

  try {
    await editorRef.value?.validate()
  } catch (error) {
    return false
  }

  try {
    const res = await createBook(bookInfo.value)
    if (res?.status === 201) message.success('添加成功')
  } catch (error) {
    return false
  }

  reset()
  emits('reloadAccountList')
}

const reset = function handleOnResetBookInfo() {
  bookInfo.value.category_id = 0
  bookInfo.value.title = ''
  bookInfo.value.description = ''
  bookInfo.value.price = 0
  bookInfo.value.stock = 0
  bookInfo.value.cover = ''
  bookInfo.value.details = ''
}
</script>

<style scoped>
.editor-wrapper {
  max-height: 60vh;
  max-width: 60vw;
}
</style>
