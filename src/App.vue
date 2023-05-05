<template>
  <n-config-provider :theme-overrides="{ common: { fontWeightStrong: '600' } }">
    <header>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </header>

    <RouterView />
  </n-config-provider>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>
