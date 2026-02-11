<template>
  <div 
    class="fixed inset-0 z-[100] "
    :class="isCartOpen ? 'visible' : 'invisible'"
  >
    <div 
      class="absolute inset-0 bg-primary/80 backdrop-blur-md transition-opacity duration-500"
      :class="isCartOpen ? 'opacity-100' : 'opacity-0'"
      @click="isCartOpen = false"
    />
    <div 
      class="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl transition-transform duration-500 transform flex flex-col "
      :class="isCartOpen ? 'translate-x-0' : 'translate-x-full'"
    >
      <div class="p-8 border-b flex justify-between items-center bg-primary text-white  text-left">
        <div class="flex items-center gap-3  text-left">
          <ShoppingBag class="text-primary" :size="24" />
          <h3 class="text-2xl font-black tracking-tighter  text-left">Panier</h3>
        </div>
        <button @click="isCartOpen = false" class="p-2 hover:bg-white/10 rounded-full transition-colors ">
          <X :size="24" />
        </button>
      </div>

      <ClientOnly>
        <div class="flex-1 overflow-y-auto p-8 space-y-8  text-left">
          <div v-if="cart.length === 0" class="h-full flex flex-col items-center justify-center text-slate-200 space-y-6 text-center ">
            <ShoppingBag :size="100" stroke-width="0.5" class=" text-center" />
            <p class="font-black text-xs tracking-[0.3em]  text-slate-400 text-center">Votre panier est vide</p>
            <NuxtLink to="/shop" @click="isCartOpen = false" class="text-primary font-black text-[10px] tracking-widest underline decoration-2 underline-offset-8  text-center">
              Boutique
            </NuxtLink>
          </div>
          <div v-else v-for="item in cart" :key="item.id" class="flex gap-6 border-b border-slate-50 pb-8 animate-in slide-in-from-right-4  text-left">
            <div class="relative group overflow-hidden rounded-2xl w-24 h-24 bg-slate-50 shrink-0 flex items-center justify-center text-left">
              <img v-if="item.image && item.image.startsWith('http')" :src="item.image" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" :alt="item.name" />
              <div v-else-if="item.type === 'pack'" class="w-full h-full bg-primary flex items-center justify-center text-secondary group-hover:scale-110 transition-transform relative overflow-hidden">
                <div class="absolute inset-0 bg-white/10 animate-pulse"></div>
                <Trophy :size="32" class="relative z-10 drop-shadow-md" />
              </div>
              <div v-else-if="item.type === 'service'" class="w-full h-full bg-slate-100 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                <Zap :size="32" class="animate-[bounce_2s_infinite]" />
              </div>
              <div v-else class="w-full h-full bg-slate-100 flex items-center justify-center text-slate-300">
                 <ShoppingBag :size="24" />
              </div>
            </div>
            <div class="flex-1 text-left flex flex-col justify-between py-1  text-left">
              <div class=" text-left">
                <h4 class="text-xs font-black text-primary tracking-tight mb-1  text-left">{{ item.name }}</h4>
                <p class="text-sm font-black text-primary tracking-tighter  text-left">{{ item.price.toLocaleString() }} CFA</p>
              </div>
              <div class="flex items-center justify-between  text-left">
                <div class="flex items-center bg-slate-50 rounded-lg p-1 border  text-left">
                  <button @click="updateQty(item.id, -1)" class="w-8 h-8 flex items-center justify-center hover:bg-white rounded transition-colors  text-left">-</button>
                  <span class="w-8 text-center text-xs font-black ">{{ item.qty }}</span>
                  <button @click="updateQty(item.id, 1)" class="w-8 h-8 flex items-center justify-center hover:bg-white rounded transition-colors  text-left">+</button>
                </div>
                <button @click="removeFromCart(item.id)" class="text-red-400 hover:text-red-600 transition-colors p-2 ">
                  <Trash2 :size="16" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div v-if="cart.length > 0" class="p-8 bg-slate-50 border-t space-y-6 text-left shadow-[0_-20px_40px_rgba(0,0,0,0.05)]  text-left">
          <div class="flex justify-between items-center font-black  text-left">
            <span class="text-[10px] tracking-[0.4em] text-slate-400 underline decoration-primary decoration-2 underline-offset-4  text-left">Sous-Total</span>
            <span class="text-3xl text-primary tracking-tighter  text-left">{{ cartTotal.toLocaleString() }} CFA</span>
          </div>
          <NuxtLink to="/checkout" @click="isCartOpen = false" class="w-full bg-primary text-secondary py-6 rounded-2xl font-black text-sm tracking-[0.3em] hover:bg-secondary hover:text-primary shadow-2xl transition-all flex items-center justify-center gap-4 group  text-left text-center">
            Valider la commande <ChevronRight :size="20" class="group-hover:translate-x-2 transition-transform  text-left"/>
          </NuxtLink>
        </div>
      </ClientOnly>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ShoppingBag, X, Trash2, ChevronRight, Trophy, Zap } from 'lucide-vue-next';
import { useCartStore } from '~/stores/cart';
import { storeToRefs } from 'pinia';

const store = useCartStore()
const { items: cart, isCartOpen, cartTotal } = storeToRefs(store)
const { updateQty, removeFromCart } = store
</script>
