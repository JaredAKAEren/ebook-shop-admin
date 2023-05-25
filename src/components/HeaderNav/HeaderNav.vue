<template>
  <header class="bg-white p-2 rounded">
    <nav class="flex justify-between items-center">
      <NBreadcrumb separator=">">
        <NBreadcrumbItem :href="homeUrl">
          <span>控制台</span>
        </NBreadcrumbItem>
        <NBreadcrumbItem>
          <span>{{ title }}</span>
        </NBreadcrumbItem>
      </NBreadcrumb>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
defineProps<{
  title: string
}>()

const homeUrl = computed(() => router.resolve({ name: 'dashboard_console' }).href)
</script>
