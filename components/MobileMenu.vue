<template>
  <div 
    class="fixed inset-0 bg-primary z-[100] transition-all duration-700 ease-in-out lg:hidden"
    :class="isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'"
  >
    <div class="h-full flex flex-col p-10 relative overflow-hidden">
      <div class="absolute top-[-10%] right-[-10%] w-96 h-96 bg-primary/10 rounded-full blur-[100px]"></div>
      <button 
        @click="$emit('close')" 
        class="absolute top-10 right-10 p-4 bg-white/5 rounded-full text-secondary hover:bg-white/10 transition-colors shadow-2xl"
      >
        <X :size="32" />
      </button>
      
    
      <div class="flex-1 flex flex-col justify-center gap-4 overflow-y-auto ">
        <NuxtLink
          v-for="(link, idx) in links"
          :key="link.id"
          :to="link.to"
          @click="$emit('close')"
          class="text-left text-3xl md:text-5xl font-black uppercase tracking-tighter transition-all duration-500 flex items-center justify-between group py-3 border-b border-white/5 "
          :class="route.path === link.to ? 'text-secondary translate-x-6' : 'text-white/60 hover:text-white'"
          :style="{ transitionDelay: `${isOpen ? idx * 70 : 0}ms`, transform: isOpen ? 'translateX(0)' : 'translateX(-50px)' }"
        >
          <span class="group-hover:translate-x-6 transition-transform">{{ link.label }}</span>
          <ArrowRight :size="28" class="opacity-0 group-hover:opacity-100 transition-opacity" />
        </NuxtLink>
      </div>
      
      <div class="pt-10 border-t border-white/5 flex gap-8">
         <NuxtLink to="/legal" @click="$emit('close')" class="text-[10px] font-bold uppercase text-slate-300 hover:text-white transition-colors tracking-widest ">Gouvernance</NuxtLink>
         <NuxtLink to="/privacy" @click="$emit('close')" class="text-[10px] font-bold uppercase text-slate-300 hover:text-white transition-colors tracking-widest ">Protection</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { X, Droplets, ArrowRight } from 'lucide-vue-next';

defineProps<{
  isOpen: boolean
}>()

defineEmits(['close'])

const route = useRoute()

const links = [
  { id: 'home', label: 'Accueil', to: '/' },
  { id: 'about', label: 'À propos', to: '/about' },
  { id: 'services-b2c', label: 'Services B2C', to: '/services-b2c' },
  { id: 'services-b2b', label: 'Services B2B', to: '/services-b2b' },
  { id: 'invest-vision', label: 'Vision', to: '/invest-vision' },
  { id: 'invest-packs', label: 'Packs', to: '/invest-packs' },
  { id: 'how-it-works', label: 'Processus', to: '/how-it-works' },
  { id: 'shop', label: 'Boutique', to: '/shop' },
  { id: 'contact', label: 'Contact', to: '/contact' }
]
</script>
