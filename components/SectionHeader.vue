<template>
  <div class="mb-16 text-left animate-in fade-in slide-in-from-bottom-8 duration-700">
    <div class="flex items-center gap-4 mb-4">
      <div class="w-16 h-1.5 bg-primary rounded-full"></div>
      <span 
        class="text-[10px] font-black tracking-[0.5em]"
        :class="light ? 'text-slate-400' : 'text-slate-500'"
      >
        {{ title }}
      </span>
    </div>
    <h2 
      class="text-4xl md:text-6xl font-black tracking-tighter leading-none"
      :class="light ? 'text-white' : 'text-primary'"
    >
      {{ title }}
    </h2>
    <p 
      v-if="subtitle" 
      class="mt-6 max-w-2xl text-lg font-medium leading-relaxed"
      :class="light ? 'text-slate-300' : 'text-slate-500'"
    >
      {{ subtitle }}
    </p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  subtitle?: string
  light?: boolean
}>()
</script>
