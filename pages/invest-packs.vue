<template>
  <div class="py-32 animate-in fade-in max-w-7xl mx-auto px-6 text-left">
    <SectionHeader 
      :title="hero?.title || 'Offre Packs'" 
      :subtitle="hero?.subtitle || 'Multipliez votre capital avec nos solutions d\'investissement industriel.'" 
    />
    
    <!-- Intro Text -->
    <div class="max-w-4xl mx-auto mb-20 text-center space-y-8 animate-in slide-in-from-bottom-4 duration-700 delay-300">
      <div v-if="hero?.badge" class="p-8 rounded-3xl bg-white border-violet-500/20 shadow-xl relative overflow-hidden group hover:shadow-2xl transition-all">
        <div class="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -mr-16 -mt-16 transition-all group-hover:scale-150"></div>
        <h3 class="text-xs font-black uppercase tracking-[0.3em] text-primary mb-4 flex items-center justify-center gap-2">
            <Award class="text-secondary" :size="16"/> {{ hero.badge }}
        </h3>
        <p class="text-sm font-medium text-slate-600 leading-relaxed ">
          "Excellente connaissance des marchés, maîtrise des maths, gestion des risques et réactivités."
        </p>
      </div>
      <p class="text-sm font-bold uppercase tracking-widest text-slate-400">
        Afin de pouvoir générer des intérêts au travers de vos investissements, plusieurs packs d'investissements vous sont proposés :
      </p>
    </div>

    <!-- Packs Grid -->
    <div v-if="packs && packs.length > 0" class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
      <div 
        v-for="(pack, idx) in packs" 
        :key="pack.id" 
        class="group relative bg-gradient-to-br from-brand-navy to-primary rounded-[2.5rem] overflow-hidden shadow-xl hover:shadow-[0_20px_50px_rgba(35,136,182,0.3)] hover:-translate-y-4 transition-all duration-500 flex flex-col items-center text-center animate-in slide-in-from-bottom-8 fade-in"
        :style="{ animationDelay: `${idx * 150}ms` }"
      >
        <!-- Decorative Elements -->
        <div class="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none group-hover:bg-white/10 transition-colors duration-700"></div>
        <div class="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -ml-32 -mb-32 pointer-events-none group-hover:bg-secondary/20 transition-colors duration-700"></div>

        <div class="p-10 w-full relative z-10 flex flex-col h-full">
            <!-- Header -->
            <div class="flex flex-col items-center gap-4 mb-8">
                <div class="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-secondary border border-white/10 backdrop-blur-sm group-hover:scale-110 transition-transform duration-500 shadow-inner">
                    <Trophy :size="32" class="drop-shadow-md" />
                </div>
                <h3 class="text-2xl font-black uppercase tracking-tighter text-white">
                    {{ pack.name }}
                </h3>
            </div>

            <!-- Pricing Section -->
            <div class="bg-white/5 rounded-3xl p-6 mb-8 border border-white/5 backdrop-blur-sm space-y-6">
                <div class="space-y-1">
                    <p class="text-[9px] font-black uppercase tracking-[0.4em] text-slate-300">Investissement</p>
                    <p class="text-3xl font-black tracking-tighter text-white">{{ pack.mise?.toLocaleString() }} <span class="text-sm align-top text-slate-400 font-bold">CFA</span></p>
                </div>
                
                <div class="w-full h-px bg-white/10"></div>

                <div class="space-y-1">
                    <p class="text-[9px] font-black uppercase tracking-[0.4em] text-secondary">Gain Estimé</p>
                    <p class="text-4xl font-black tracking-tighter text-secondary drop-shadow-sm">{{ pack.gain?.toLocaleString() }} <span class="text-sm align-top text-secondary/60 font-bold">CFA</span></p>
                </div>
            </div>

            <!-- Features / Info -->
            <div class="space-y-4 mb-8">
                <div class="flex items-center justify-between text-sm font-bold text-slate-200 px-2">
                    <span class="text-slate-400 text-[10px] uppercase tracking-widest">Période de Carence</span>
                    <span>{{ pack.carence }}</span>
                </div>
                <div class="flex items-center justify-between text-sm font-bold text-slate-200 px-2">
                     <span class="text-slate-400 text-[10px] uppercase tracking-widest">Rentabilité</span>
                     <span class="text-emerald-400">+{{ Math.round(((pack.gain - pack.mise) / pack.mise) * 100) }}%</span>
                </div>
            </div>

            <!-- Action Button -->
            <button 
              @click="handleSubscribe(pack)"
              class="mt-auto w-full py-5 rounded-2xl bg-secondary text-white font-black uppercase tracking-[0.3em] text-[10px] hover:bg-white hover:text-primary transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-3 group/btn active:scale-95"
            >
              Je Souscris <ArrowRight :size="16" class="group-hover/btn:translate-x-1 transition-transform" />
            </button>
        </div>
      </div>
    </div>
    
    <Disclaimer class="mt-20" />
  </div>
</template>

<script setup lang="ts">
import { Award, Trophy, ShieldCheck, ArrowRight } from 'lucide-vue-next';
import { useCartStore } from '~/stores/cart';
import { toast } from 'vue-sonner';

const config = useRuntimeConfig()
const { data: heroRes } = await useFetch<any>('http://localhost:4000/contents/invest_packs.hero')
const hero = computed(() => heroRes.value?.data)

const { data: packsRes } = await useFetch<any[]>('http://localhost:4000/packs')
const packs = computed(() => packsRes.value || [])

useHead({
  title: 'Packs d\'Investissement - Wash Express Invest'
})

const cartStore = useCartStore()

const handleSubscribe = (pack: any) => {
  cartStore.addToCart({
    id: pack.id,
    name: pack.name,
    price: pack.mise,
    image: '', 
    type: 'pack',
    description: pack.description || `Investissement ${pack.name}`
  })
  
  toast.success(`${pack.name} ajouté au panier`)
  navigateTo('/checkout')
}
</script>
