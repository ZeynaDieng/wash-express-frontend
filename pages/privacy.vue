<template>
  <div class="py-40 animate-in fade-in max-w-4xl mx-auto px-6 text-left   text-left    text-left">
    <SectionHeader title="Protection" subtitle="Engagement de transparence industrielle et cadre réglementaire." />
    <div class="space-y-12    text-left text-left     text-left ">
       <div class="p-10 bg-slate-50 border border-slate-100 rounded-[3rem]  text-left text-left     text-left  ">
         <h4 class="text-xl font-black text-primary uppercase tracking-tighter mb-4   text-left    text-left ">Protection des Données</h4>
         <p class="text-slate-500  leading-relaxed  text-left    text-left  ">
           Nous nous engageons à protéger vos données personnelles. Toutes les informations collectées sont utilisées exclusivement dans le cadre de votre relation commerciale avec Wash Express Invest.
         </p>
       </div>
       <div class="p-10 bg-slate-50 border border-slate-100 rounded-[3rem]  text-left text-left     text-left  ">
         <h4 class="text-xl font-black text-primary uppercase tracking-tighter mb-4   text-left    text-left ">Cookies & Traceurs</h4>
         <p class="text-slate-500  leading-relaxed  text-left    text-left  ">
           Ce site utilise des cookies techniques nécessaires à son bon fonctionnement. Aucun cookie publicitaire tiers n'est utilisé sans votre consentement explicite.
         </p>
       </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()
const { data: res } = await useFetch<any>('http://localhost:4000/contents/privacy.sections')
const sections = computed(() => res.value?.data)

useHead({
  title: 'Confidentialité - Wash Express Invest'
})
</script>
