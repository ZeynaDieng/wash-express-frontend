<template>
  <div class="py-40 animate-in fade-in max-w-4xl mx-auto px-6 text-left   text-left    text-left">
    <SectionHeader title="Gouvernance" subtitle="Engagement de transparence industrielle et cadre réglementaire." />
    <div class="space-y-12    text-left text-left     text-left ">
       <div class="p-10 bg-slate-50 border border-slate-100 rounded-[3rem]  text-left text-left     text-left  ">
         <h4 class="text-xl font-black text-primary uppercase tracking-tighter mb-4   text-left    text-left ">Identification Juridique</h4>
         <p class="text-slate-500  leading-relaxed  text-left    text-left  ">
           Wash Express Invest Group est une Holding Industrielle immatriculée au RCCM SN-DKR-2018-B-12345. Siège social : Boulevard de la République, Dakar.
         </p>
       </div>
       <div class="p-10 bg-slate-50 border border-slate-100 rounded-[3rem]  text-left text-left     text-left  ">
         <h4 class="text-xl font-black text-primary uppercase tracking-tighter mb-4   text-left    text-left ">Confidentialité KYC</h4>
         <p class="text-slate-500  leading-relaxed  text-left    text-left  ">
           Conformément aux normes bancaires internationales, les données de participation sont chiffrées en AES-256 et auditées annuellement.
         </p>
       </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()
const { data: res } = await useFetch<any>('http://localhost:4000/contents/legal.sections')
const sections = computed(() => res.value?.data)

useHead({
  title: 'Mentions Légales - Wash Express Invest'
})
</script>
