<template>
  <div class="py-32 animate-in fade-in max-w-7xl mx-auto px-6 text-left">
    <div class="mb-12">
      <NuxtLink to="/shop" class="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-slate-400 hover:text-primary transition-colors">
        <ArrowLeft :size="16" /> Retour à la boutique
      </NuxtLink>
    </div>

    <div v-if="pending" class="flex justify-center py-20">
      <div class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
    </div>

    <div v-else-if="error || !product" class="text-center py-20 space-y-4">
      <h2 class="text-2xl font-black uppercase text-slate-300">Produit introuvable</h2>
      <NuxtLink to="/shop" class="text-primary font-bold underline">Retourner à la liste</NuxtLink>
    </div>

    <div v-else class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
      <!-- Image Section -->
      <div class="bg-white rounded-[3rem] overflow-hidden border border-slate-100 shadow-xl relative group">
        <div class="aspect-[4/5] bg-slate-50 relative overflow-hidden">
          <img :src="product.image" :alt="product.name" class="w-full h-full object-cover" />
          <div v-if="product.promo" class="absolute top-8 left-8 bg-primary text-secondary px-5 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.3em] shadow-xl">
             Offre Privilège
          </div>
        </div>
      </div>

      <!-- Details Section -->
      <div class="space-y-10 animate-in slide-in-from-right-8 duration-700">
        <div class="space-y-4">
          <span class="text-xs font-black uppercase tracking-[0.5em] text-primary">{{ product.category }}</span>
          <h1 class="text-4xl md:text-5xl font-black text-primary uppercase tracking-tighter leading-tight">{{ product.name }}</h1>
          <div class="flex items-center gap-6 pt-2">
             <span v-if="product.originalPrice" class="text-lg font-bold text-slate-300 line-through tracking-widest">{{ product.originalPrice.toLocaleString() }} CFA</span>
             <span class="text-4xl font-black text-secondary tracking-tighter">{{ product.price.toLocaleString() }} CFA</span>
          </div>
        </div>

        <div class="h-px bg-slate-100 w-full"></div>

        <div class="space-y-6 text-slate-500 font-medium leading-relaxed text-lg">
          <p>{{ product.description || "Ce produit de qualité professionnelle est conçu pour répondre aux exigences les plus strictes de l'industrie du soin textile. Performance, durabilité et efficacité garanties par Wash Express Invest." }}</p>
          
          <ul class="space-y-3 pt-4">
            <li class="flex items-center gap-3 text-sm font-bold text-slate-600">
              <CheckCircle2 :size="18" class="text-primary" /> Qualité Professionnelle
            </li>
            <li class="flex items-center gap-3 text-sm font-bold text-slate-600">
              <CheckCircle2 :size="18" class="text-primary" /> Garantie Constructeur
            </li>
            <li class="flex items-center gap-3 text-sm font-bold text-slate-600">
              <CheckCircle2 :size="18" class="text-primary" /> Support Technique 24/7
            </li>
          </ul>
        </div>

        <div class="pt-8 space-y-4">
          <button @click="addToCart(product)" class="w-full bg-primary text-white py-6 rounded-2xl font-black uppercase text-xs tracking-[0.4em] hover:bg-secondary hover:text-primary transition-all shadow-xl hover:shadow-2xl flex items-center justify-center gap-4 group active:scale-95">
            <ShoppingBag :size="20" class="group-hover:scale-110 transition-transform" /> 
            Ajouter au panier
          </button>
          <p class="text-[10px] text-center text-slate-400 font-bold uppercase tracking-widest">
            <Truck :size="12" class="inline mb-0.5 mr-1" /> Livraison gratuite dès 50.000 CFA
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ArrowLeft, ShoppingBag, CheckCircle2, Truck } from 'lucide-vue-next';
import { useCartStore } from '~/stores/cart';

const route = useRoute()
const config = useRuntimeConfig()
const store = useCartStore()
const { addToCart } = store

const { data: product, pending, error } = await useFetch<any>(`http://localhost:4000/products/${route.params.id}`)

useHead({
  title: computed(() => product.value ? `${product.value.name} - Boutique` : 'Produit - Boutique')
})
</script>
