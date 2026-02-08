<template>
  <NuxtLayout>
    <NuxtPage />
    <ClientOnly>
      <Toaster position="top-center" richColors />
    </ClientOnly>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { Toaster } from 'vue-sonner'
</script>

<style>
@import '~/assets/css/overrides.css';
</style>
