<template>
  <header class="bg-white py-2 px-3 rounded">
    <nav>
      <NBreadcrumb separator=">">
        <NBreadcrumbItem :href="homeUrl">
          <span>控制台</span>
        </NBreadcrumbItem>
        <NBreadcrumbItem>
          <span>{{ title }}</span>
        </NBreadcrumbItem>
      </NBreadcrumb>
    </nav>
    <h2 class="text-2xl pt-3 pb-2 px-1 tracking-wider">{{ title }}</h2>
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
