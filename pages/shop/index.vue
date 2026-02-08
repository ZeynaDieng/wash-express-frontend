<template>
  <div class="py-40 animate-in fade-in max-w-7xl mx-auto px-6 text-left">
    <SectionHeader title="Boutique Expert" subtitle="Produits et accessoires de soin textile professionnel." />
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 text-left">
      <NuxtLink :to="`/shop/${p.id}`" v-for="(p, idx) in products" :key="p.id" class="group bg-white rounded-[3rem] overflow-hidden hover:shadow-2xl transition-all duration-700 flex flex-col border border-slate-50 animate-in slide-in-from-bottom-8 text-left cursor-pointer" :style="{ animationDelay: `${idx * 100}ms` }">
        <div class="relative aspect-[4/5] overflow-hidden bg-[#F8FAFC] text-left">
          <img :src="p.image" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" :alt="p.name" />
          <div v-if="p.promo" class="absolute top-8 left-8 bg-primary text-primary px-5 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.3em] shadow-xl">Offre Privilège</div>
        </div>
        <div class="p-10 flex flex-col flex-1 text-center space-y-6">
          <span class="text-[9px] font-black uppercase tracking-[0.5em] text-primary text-center">{{ p.category }}</span>
          <h3 class="text-xl font-bold text-primary uppercase tracking-tighter leading-snug min-h-[3.5rem] flex items-center justify-center text-center">{{ p.name }}</h3>
          <div class="mt-auto flex items-center justify-center gap-6 pb-6 text-center">
            <span v-if="p.originalPrice" class="text-sm font-bold text-slate-300 line-through tracking-widest">{{ p.originalPrice.toLocaleString() }} CFA</span>
            <span class="text-3xl font-black text-secondary tracking-tighter underline decoration-primary decoration-4 underline-offset-4">{{ p.price.toLocaleString() }} CFA</span>
          </div>
          <button @click.prevent="addToCart(p)" class="w-full bg-slate-50 border border-slate-100 py-6 rounded-3xl text-[11px] font-black uppercase tracking-[0.4em] text-primary hover:bg-secondary hover:text-white transition-all shadow-sm flex items-center justify-center gap-4 group/btn active:scale-95">
            <ShoppingBag :size="18" class="group-hover/btn:scale-125 transition-transform" /> Ajouter au panier
          </button>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ShoppingBag } from 'lucide-vue-next';
import { useCartStore } from '~/stores/cart';

const config = useRuntimeConfig()
const { data: productsRes } = await useFetch<any[]>('http://localhost:4000/products')
const products = computed(() => productsRes.value || [])

useHead({
  title: 'Boutique - Wash Express Invest'
})

const store = useCartStore()
const { addToCart } = store
</script>
