<template>
  <nav 
    class="fixed top-0 w-full z-[90] transition-all duration-500"
    :class="navClass"
  >
    <div class="max-w-7xl mx-auto px-6 h-full flex justify-between items-center">
      <NuxtLink to="/" class="flex items-center gap-4 cursor-pointer group">
        <div class="w-12 h-12 rounded-xl overflow-hidden shadow-2xl group-hover:scale-110 transition-transform duration-300 bg-white">
          <img src="/images/logo-wash-express.jpg" alt="Wash Express" class="w-full h-full object-cover" />
        </div>
        <div class="flex flex-col text-left">
          <span class="font-black text-xl tracking-tighter leading-none transition-colors duration-500">
            <span class="text-primary">Wash</span>
            <span class="text-secondary ml-1">Express</span>
          </span>
          <span class="text-[10px] font-black tracking-[0.4em] text-slate-400">Invest Group</span>
        </div>
      </NuxtLink>
      
      <div class="hidden lg:flex items-center gap-8">
        <NuxtLink 
          v-for="item in navItems" 
          :key="item.id" 
          :to="item.path"
            class="text-[11px] font-black tracking-widest transition-all hover:text-primary"
          :class="[

            route.path === item.path ? '!text-primary border-b-2 border-primary pb-1' : ''
          ]"
        >
          {{ item.label }}
        </NuxtLink>
        <NuxtLink 
          to="/shop" 
          class="px-8 py-3 rounded-full text-[11px] font-black tracking-widest transition-all"
          :class="route.path === '/shop' ? 'bg-primary text-white' : 'bg-primary text-white hover:bg-primary hover:text-white shadow-lg shadow-blue-500/20'"
        >
          Boutique Expert
        </NuxtLink>
      </div>

      <div class="flex items-center gap-6">
        <button @click="isCartOpen = true" class="relative group">
          <div 
            class="p-3 rounded-2xl transition-all duration-300 text-primary hover:text-secondary"
          >
            <ShoppingBag :size="22" />
          </div>
          <ClientOnly>
            <span v-if="cartCount > 0" class="absolute -top-2 -right-2 w-6 h-6 bg-secondary text-white rounded-full text-[11px] font-black flex items-center justify-center border-2 border-white animate-bounce shadow-lg">
              {{ cartCount }}
            </span>
          </ClientOnly>
        </button>
        <button class="lg:hidden" @click="$emit('openMenu')">
          <Menu 
            class="transition-colors duration-500 text-primary"
          />
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { Droplets, ShoppingBag, Menu } from 'lucide-vue-next';
import { useCartStore } from '~/stores/cart';
import { storeToRefs } from 'pinia';

defineEmits(['openMenu'])

const route = useRoute()
const { scrolled } = useScroll()
const store = useCartStore()
const { cartCount, isCartOpen } = storeToRefs(store)

const isMounted = ref(false)
onMounted(() => {
  isMounted.value = true
})

// Only apply scroll class on client side to prevent hydration match
const navClass = computed(() => {
  if (!isMounted.value) return 'bg-transparent py-8' // SSR default
  return scrolled.value ? 'bg-white/90 backdrop-blur-md border-b shadow-xl py-4' : 'bg-transparent py-8'
})

const isHomePage = computed(() => route.path === '/')

const navItems = [
  { id: 'home', label: 'Accueil', path: '/' },
  { id: 'about', label: 'À propos', path: '/about' },
  { id: 'services-b2c', label: 'Services', path: '/services-b2c' },
  //{ id: 'how-it-works', label: 'Processus', path: '/how-it-works' },
  { id: 'invest-vision', label: 'Vision', path: '/invest-vision' },
  { id: 'invest-packs', label: 'Packs', path: '/invest-packs' },
  { id: 'contact', label: 'Contact', path: '/contact' }
]
</script>
