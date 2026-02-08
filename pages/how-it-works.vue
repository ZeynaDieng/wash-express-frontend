<template>
  <div class="py-40 animate-in fade-in max-w-5xl mx-auto px-6 text-left">
    <SectionHeader title="Parcours" subtitle="Une méthodologie industrielle rigoureuse en 5 étapes clés." />
    <div v-if="steps && steps.length > 0" class="space-y-16 relative before:content-[''] before:absolute before:left-12 before:top-10 before:bottom-10 before:w-1.5 before:bg-slate-50 border-l-slate-100 text-left">
      <div v-for="(s, i) in steps" :key="i" class="relative flex items-start gap-16 group pl-2">
        <div class="z-10 w-20 h-20 bg-primary rounded-[2rem] flex items-center justify-center text-primary group-hover:scale-110 transition-all duration-500 shadow-2xl border-4 border-white">
          <component :is="getIcon(s.icon)" :size="32" />
        </div>
        <div class="pt-4 flex-1">
           <h3 class="text-3xl font-black text-primary uppercase tracking-tighter mb-3 underline decoration-primary/30 underline-offset-8">{{ s.t || s.title }}</h3>
           <p class="text-xl text-slate-500 font-medium leading-relaxed">{{ s.d || s.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Users, Target, Scale, Clock, TrendingUp } from 'lucide-vue-next';

const config = useRuntimeConfig()

const { data: stepsRes } = await useFetch<any>('http://localhost:4000/contents/how_it_works.steps')
const steps = computed(() => stepsRes.value?.data)

const getIcon = (name: string) => {
  const icons: any = { Users, Target, Scale, Clock, TrendingUp }
  return icons[name] || Users
}

useHead({
  title: 'Comment ça marche - Wash Express Invest'
})
</script>
