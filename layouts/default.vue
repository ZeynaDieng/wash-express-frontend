<template>
  <div class="min-h-screen bg-white font-sans text-slate-600 flex flex-col selection:bg-primary selection:text-primary overflow-x-hidden">
    <Navbar @openMenu="isMenuOpen = true" />
    
    <main class="flex-grow pt-20 transition-opacity duration-1000">
      <slot />
    </main>
    
    <Footer />
    
    <CartDrawer />
    
    <MobileMenu 
      :isOpen="isMenuOpen" 
      @close="isMenuOpen = false" 
    />
    
  
  </div>
</template>

<script setup lang="ts">
const isMenuOpen = useState('isMenuOpen', () => false)
</script>
