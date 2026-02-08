<template>
  <div class="py-40 min-h-[80vh] flex flex-col items-center justify-center animate-in zoom-in duration-700 max-w-2xl mx-auto px-6 text-center  text-left text-center    text-left">
    <div class="w-32 h-32 bg-emerald-500/10 text-emerald-500 rounded-[3rem] flex items-center justify-center mb-12 shadow-inner border-2 border-emerald-500/20        text-left">
      <Check :size="60" :stroke-width="3" class="        text-left"/>
    </div>
    <h2 class="text-5xl font-black text-primary uppercase tracking-tighter  mb-6 text-center  underline decoration-primary/40 underline-offset-8  text-left text-center  text-left">Confirmé.</h2>
    <p class="text-slate-500 text-lg font-medium leading-relaxed mb-16  text-center       text-left">
      Votre transaction a été validée par notre service financier. Un email de confirmation récapitulatif vous a été envoyé. Merci pour votre confiance institutionnelle.
    </p>
    <NuxtLink to="/" class="bg-primary text-white px-16 py-6 rounded-2xl font-black uppercase text-xs tracking-[0.5em] shadow-2xl  text-center        text-left hover:bg-primary hover:text-primary transition-colors">
      Retour au Siège
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { Check } from 'lucide-vue-next';

useHead({
  title: 'Commande Confirmée - Wash Express Invest'
})
</script>
