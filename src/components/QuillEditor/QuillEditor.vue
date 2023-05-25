<template>
  <main class="flex flex-col">
    <QuillEditor ref="editor" @textChange="textChange" theme="snow" toolbar="full"></QuillEditor>
  </main>
</template>

<script setup lang="ts">
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css'
import { ref } from 'vue'

const emits = defineEmits(['contentChange'])

const editor = ref<InstanceType<typeof QuillEditor> | null>(null)

// const load = function handleOnLoadHTML2Editor() {
//   editor.value?.setHTML('<a href="https://github.com">this is s link</a>')
// }
const textChange = function handleOnEditorContentChange() {
  // console.log(editor.value?.getHTML())
  emits('contentChange', editor.value?.getHTML() ?? '')
}
</script>

<style>
.ql-toolbar {
  border-radius: 0.2rem 0.2rem 0 0;
}

.ql-container {
  overflow-y: auto;
  border-radius: 0 0 0.2rem 0.2rem;
}

.ql-editor {
  min-height: 30vh;
}
</style>
