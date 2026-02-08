<template>
  <footer class="bg-primary text-white pt-32 pb-12 relative overflow-hidden text-left">
    <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-secondary to-transparent"></div>
    <div class="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-20 mb-32">
      <div class="space-y-8">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl overflow-hidden bg-white shadow-lg">
             <img src="/images/logo-wash-express.jpg" alt="Wash Express" class="w-full h-full object-cover" />
          </div>
          <span class="font-black text-3xl uppercase tracking-tighter leading-none">
            Wash <span class="text-secondary">Express</span>
          </span>
        </div>
        <p v-if="footer" class="text-slate-100 text-sm leading-relaxed font-medium text-left">
          {{ footer.tagline }}
        </p>
        <div class="flex gap-4">
          <div class="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center hover:bg-primary hover:text-white transition-all cursor-pointer shadow-lg">
            <Mail :size="18"/>
          </div>
          <div class="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center hover:bg-primary hover:text-white transition-all cursor-pointer shadow-lg">
            <Globe :size="18"/>
          </div>
        </div>
      </div>
      <div class="text-left">
        <h4 class="text-[10px] font-black uppercase tracking-[0.4em] mb-10 text-secondary">Expertise</h4>
        <ul class="space-y-4 text-sm font-bold tracking-tight text-slate-100 text-left">
          <li class="cursor-pointer hover:text-secondary flex items-center gap-2 text-left">
            <ChevronRight :size="14" class="text-secondary"/> <NuxtLink to="/services-b2c">Pressing Professionnel</NuxtLink>
          </li>
          <li class="cursor-pointer hover:text-secondary flex items-center gap-2 text-left">
            <ChevronRight :size="14" class="text-secondary"/> <NuxtLink to="/services-b2b">Solutions Entreprises</NuxtLink>
          </li>
          <li class="cursor-pointer hover:text-secondary flex items-center gap-2 text-left">
            <ChevronRight :size="14" class="text-secondary"/> <NuxtLink to="/shop">Boutique en ligne</NuxtLink>
          </li>
        </ul>
      </div>
      <div class="text-left">
        <h4 class="text-[10px] font-black uppercase tracking-[0.4em] mb-10 text-secondary">Institutionnel</h4>
        <ul class="space-y-4 text-sm font-bold tracking-tight text-slate-100 text-left">
          <li class="cursor-pointer hover:text-secondary text-left"><NuxtLink to="/about">Notre Histoire</NuxtLink></li>
          <li class="cursor-pointer hover:text-secondary text-left"><NuxtLink to="/how-it-works">Processus & Fonctionnement</NuxtLink></li>
          <li class="cursor-pointer hover:text-secondary text-left"><NuxtLink to="/invest-packs">Packs de Participation</NuxtLink></li>
        </ul>
      </div>
      <div class="text-left">
        <h4 class="text-[10px] font-black uppercase tracking-[0.4em] mb-10 text-secondary text-left">Légal</h4>
        <ul class="space-y-4 text-sm font-bold tracking-tight text-slate-100 text-left">
          <li class="cursor-pointer hover:text-secondary text-left"><NuxtLink to="/legal">Mentions Légales</NuxtLink></li>
          <li class="cursor-pointer hover:text-secondary text-left"><NuxtLink to="/privacy">Confidentialité</NuxtLink></li>
          <li class="pt-6 border-t border-white/5 text-left">
            <span class="block text-[9px] uppercase text-secondary font-black mb-2 text-left text-left">Support Direct</span>
            <p v-if="footer" class="text-xs text-left text-left">{{ footer.support_phone }}</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="max-w-7xl mx-auto px-6 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] font-black uppercase tracking-[0.5em] text-secondary">
      <span>© 2026 Wash Express Invest Group</span>
      <div v-if="footer" class="flex gap-8 mt-6 md:mt-0">
        <span v-for="city in footer.villes" :key="city">{{ city }}</span>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { Droplets, Mail, Globe, ChevronRight } from 'lucide-vue-next';

const config = useRuntimeConfig()
const { data: footerRes } = await useFetch<any>('http://localhost:4000/contents/global.footer')
const footer = computed(() => footerRes.value?.data)
</script>
