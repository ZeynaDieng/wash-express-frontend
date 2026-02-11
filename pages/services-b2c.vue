<template>
  <div class="py-32 animate-in fade-in max-w-7xl mx-auto px-6 text-left">
    <div v-if="hero" class="mb-24 space-y-8 animate-in slide-in-from-top-12 duration-1000">
      <SectionHeader :title="hero.title" :subtitle="hero.subtitle" />
      
      <div class="max-w-4xl bg-slate-50 border border-slate-100 p-10 rounded-[2.5rem] flex flex-col md:flex-row gap-8 items-center ">
        <div class="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-secondary shadow-xl shrink-0">
          <Truck :size="32" />
        </div>
        <div class="space-y-2 text-center md:text-left">
          <p class="text-xl font-bold text-primary ">{{ hero.description }}</p>
          <div class="flex flex-wrap justify-center md:justify-start gap-6">
            <div v-for="(p, pi) in hero.points" :key="pi" class="flex items-center gap-2 text-sm font-black tracking-widest text-slate-500 ">
               <div class="w-2 h-2 bg-secondary rounded-full"></div>
               {{ p }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <SectionHeader v-else title="Savoir-Faire Particuliers" subtitle="Une gamme complète de services d'entretien textile de haute performance." />

    <div v-if="prestations && prestations.length > 0" class="grid grid-cols-1 md:grid-cols-3 gap-12 mb-32">
       <div v-for="(p, i) in prestations" :key="i" class="relative group bg-white border border-slate-100 rounded-[3rem] p-12 hover:shadow-2xl transition-all duration-700 flex flex-col space-y-8 animate-in slide-in-from-bottom-8 fade-in" :style="{ animationDelay: `${i * 100}ms` }">
          <div v-if="p.badge" class="absolute top-8 right-8 text-[9px] font-black tracking-widest bg-primary/10 text-secondary px-3 py-1 rounded-full">{{ p.badge }}</div>
          
          <div :class="['w-16 h-16 rounded-[1.5rem] flex items-center justify-center text-secondary bg-primary/10']">
             <component :is="getIcon(p.icon)" :size="32" />
          </div>

          <div class="space-y-4">
            <h3 class="text-2xl font-black text-primary tracking-tighter">{{ p.title }}</h3>
            <div class="flex items-baseline gap-2">
               <span class="text-4xl font-black text-primary">{{ p.price?.toLocaleString() }}</span>
               <span class="text-sm font-bold text-slate-400 tracking-widest">{{ p.unit }}</span>
            </div>
          </div>

          <ul class="space-y-4 flex-1">
             <li v-for="(f, fi) in p.features" :key="fi" class="flex gap-4 text-sm font-medium text-slate-500">
               <Check :size="18" class="text-primary shrink-0" /> {{ f }}
             </li>
          </ul>

          <button @click="addToCart(p)" class="w-full py-5 rounded-2xl bg-slate-50 border border-slate-100 text-[11px] font-black tracking-[0.3em] text-primary group-hover:bg-primary group-hover:text-white transition-all ">
            Commander ce service
          </button>
       </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Play, Check, Crown, BedDouble, Layers, ShieldCheck, Zap, Droplets, ArrowRight, Truck } from 'lucide-vue-next';
import { useCartStore } from '~/stores/cart';
import { toast } from 'vue-sonner';

const config = useRuntimeConfig()
const cartStore = useCartStore()

const addToCart = (service: any) => {
  cartStore.addToCart({
    id: service.id,
    name: service.title,
    price: service.price,
    image: '', 
    type: 'service',
    description: service.description || `Service ${service.title}`
  })
  toast.success(`${service.title} ajouté au panier`)
}

const { data: heroRes } = await useFetch<any>('http://localhost:4000/contents/services_b2c.hero')
const hero = computed(() => heroRes.value?.data)

const { data: prestations } = await useFetch<any[]>('http://localhost:4000/services?category=B2C')

const getIcon = (name: string) => {
  const icons: any = { Crown, BedDouble, Layers, Zap, Droplets, ShieldCheck, Play, Check }
  return icons[name] || Zap
}

const getColorClass = (color: string) => {
  const colors: any = {
    blue: 'bg-blue-50 text-blue-600',
    emerald: 'bg-emerald-50 text-emerald-600',
    violet: 'bg-violet-50 text-violet-600',
    amber: 'bg-amber-50 text-amber-600',
    cyan: 'bg-cyan-50 text-cyan-600'
  }
  return colors[color] || 'bg-slate-50 text-slate-600'
}

useHead({
  title: 'Services Particuliers - Wash Express Invest'
})
</script>
