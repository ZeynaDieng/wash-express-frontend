<template>
  <div v-if="disclaimer" class="bg-slate-50 p-10 border border-slate-200 my-20 rounded-[2.5rem] relative overflow-hidden group animate-in fade-in zoom-in duration-700 font-">
    <div class="absolute -top-10 -right-10 opacity-5 group-hover:rotate-12 transition-transform duration-1000 pointer-events-none text-primary">
      <ShieldCheck :size="200" />
    </div>
    <div class="flex flex-col md:flex-row items-start gap-8 relative z-10 text-left">
      <div class="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center shrink-0 shadow-xl shadow-primary/20">
        <ShieldCheck class="text-secondary" :size="32" />
      </div>
      <div class="space-y-4">
        <h5 class="text-lg font-black text-primary uppercase tracking-widest  underline decoration-primary decoration-4 underline-offset-8">
          {{ disclaimer.title }}
        </h5>
        <p class="text-sm text-slate-500 font-medium leading-relaxed max-w-4xl  text-left">
          {{ disclaimer.text }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ShieldCheck } from 'lucide-vue-next';

const config = useRuntimeConfig()
const { data: disclaimerRes } = await useFetch<any>('http://localhost:4000/contents/global.disclaimer')
const disclaimer = computed(() => disclaimerRes.value?.data)
</script>
