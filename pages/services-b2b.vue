<template>
  <div class="py-40 animate-in fade-in max-w-7xl mx-auto px-6 text-left">
    <SectionHeader title="Pôle Entreprise" subtitle="Solutions d'externalisation logistique textile pour secteurs stratégiques." />
    <div v-if="solutions && solutions.length > 0" class="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
      <div v-for="(b, i) in solutions" :key="i" class="p-16 bg-white border border-slate-100 rounded-[3rem] shadow-sm hover:shadow-2xl transition-all duration-500 space-y-8 group  text-left">
        <div class="text-primary group-hover:text-primary transition-colors duration-500 text-left">
          <component :is="getIcon(b.icon)" :size="40"/>
        </div>
        <h3 class="text-3xl font-black text-primary uppercase tracking-tighter  text-left">{{ b.t || b.title }}</h3>
        <p class="text-slate-500 font-medium leading-relaxed  text-lg text-left">{{ b.d || b.description }}</p>
        <div class="pt-6 flex items-center justify-between  text-left">
          <NuxtLink to="/contact" class="text-[11px] font-black uppercase tracking-[0.3em] text-primary border-b-2 border-transparent hover:border-primary transition-all flex items-center gap-2  text-left">
            Demander une cotation <ArrowRight :size="16" class=" text-left"/>
          </NuxtLink>
          <span class="text-[10px] text-slate-300 font-bold uppercase tracking-widest  underline decoration-primary text-left">Division B2B</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Building2, ShieldCheck, Users, Truck, ArrowRight } from 'lucide-vue-next';

const config = useRuntimeConfig()

const { data: solutions } = await useFetch<any[]>('http://localhost:4000/services?category=B2B')

const getIcon = (name: string) => {
  const icons: any = { Building2, ShieldCheck, Users, Truck }
  return icons[name] || Building2
}

useHead({
  title: 'Services B2B - Wash Express Invest'
})
</script>
