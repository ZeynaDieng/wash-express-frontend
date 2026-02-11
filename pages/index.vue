<template>
  <div class="animate-in fade-in duration-1000">
    <!-- Hero Section -->
    <!-- Hero Section -->
    <section class="relative h-screen bg-primary flex items-center overflow-hidden">
      <!-- Background Image -->
      <div v-if="hero" class="absolute inset-0 opacity-50 scale-105 bg-cover bg-center" :style="{ backgroundImage: `url(${hero.bg_image})` }"></div>
      
      <!-- Gradient Overlay (Always Visible for Contrast) -->
      <div class="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/90 to-primary"></div>
      
      <!-- Content -->
      <div v-if="hero" class="relative max-w-7xl mx-auto px-6 w-full">
        <div class="max-w-3xl space-y-10">
          <div v-if="hero.badge" class="inline-flex items-center gap-3 px-6 py-2 border-2 border-primary/30 rounded-full bg-white/5 backdrop-blur-md text-secondary text-[10px] font-black tracking-[0.4em] animate-pulse">
            {{ hero.badge }}
          </div>
          <h1 class="text-7xl md:text-9xl font-black text-white tracking-tighter leading-[0.9] drop-shadow-2xl animate-in slide-in-from-bottom-12 duration-1000">
            {{ hero.title }}
          </h1>
          <p class="text-xl md:text-2xl text-slate-300 font-medium leading-relaxed max-w-2xl">
            {{ hero.subtitle }}
          </p>
          <div class="flex flex-wrap gap-6 pt-6">
            <NuxtLink to="/invest-packs" class="group bg-primary text-secondary px-12 py-5 rounded-2xl font-black text-xs tracking-[0.3em] shadow-2xl hover:scale-105 transition-all flex items-center gap-3">
              Découvrir les Packs <ArrowRight :size="18" class="group-hover:translate-x-2 transition-transform"/>
            </NuxtLink>
            <NuxtLink to="/services-b2c" class="px-12 py-5 border-2 border-white/20 text-white rounded-2xl font-black text-xs tracking-[0.3em] hover:bg-white hover:text-primary transition-all backdrop-blur-sm">
              Savoir-faire
            </NuxtLink>
          </div>
        </div>
      </div>
      
      <!-- Loading State (Optional) -->
      <div v-else class="relative max-w-7xl mx-auto px-6 w-full flex items-center justify-center h-full">
          <div class="animate-pulse flex flex-col items-start gap-8 w-full max-w-3xl">
              <div class="h-4 bg-white/10 rounded w-32"></div>
              <div class="h-24 bg-white/10 rounded w-full"></div>
              <div class="h-24 bg-white/10 rounded w-2/3"></div>
              <div class="h-16 bg-white/10 rounded w-48 mt-8"></div>
          </div>
      </div>
    </section>

    <!-- Expertise Section -->
    <section v-if="expertise && expertise.length > 0" class="py-32 bg-white relative overflow-hidden">
      <div class="max-w-7xl mx-auto px-6">
        <SectionHeader title="Expertise" subtitle="Une maîtrise totale de la chaîne de valeur, de la logistique hôtelière au soin du linge délicat." />
        <div class="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
          <div v-for="(p, i) in expertise" :key="i" class="group flex flex-col h-full bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-700 animate-in slide-in-from-bottom-12 fade-in" :style="{ animationDelay: `${i * 150}ms` }">
            <div class="h-64 overflow-hidden relative">
               <img :src="p.image" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" :alt="p.title" />
               <div class="absolute top-6 left-6 w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-secondary shadow-2xl">
                 <component :is="getIcon(p.icon)" />
               </div>
            </div>
            <div class="p-10 text-left space-y-4">
              <h3 class="text-2xl font-black text-primary tracking-tighter">{{ p.title }}</h3>
              <p class="text-sm text-slate-500 font-medium leading-relaxed">{{ p.description }}</p>
              <button class="text-[10px] font-black tracking-[0.4em] text-primary pt-4 flex items-center gap-2 group-hover:gap-4 transition-all">
                Explorer la division <ChevronRight :size="14" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ArrowRight, Droplets, Building2, BarChart3, ChevronRight } from 'lucide-vue-next';

const config = useRuntimeConfig()

const { data: heroRes } = await useFetch<any>('http://localhost:4000/contents/home.hero')
const { data: expertiseRes } = await useFetch<any>('http://localhost:4000/contents/home.expertise')

const hero = computed(() => heroRes.value?.data)
const expertise = computed(() => expertiseRes.value?.data)

const getIcon = (name: string) => {
  const icons: any = { Droplets, Building2, BarChart3 }
  return icons[name] || Droplets
}

useHead({
  title: 'Accueil - Wash Express Invest',
  meta: [
    { name: 'description', content: 'Wash Express Invest : L\'industrie du soin textile standard ISO 9001.' }
  ]
})
</script>
