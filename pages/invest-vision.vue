<script setup lang="ts">
import { Lock, TrendingUp, Scale, Hourglass, BookOpen, BarChart3, Activity } from 'lucide-vue-next';

const config = useRuntimeConfig()

const { data: introRes } = await useFetch<any>('http://localhost:4000/contents/vision.intro')
const intro = computed(() => introRes.value?.data)

useHead({
  title: 'Vision & Philosophie - Wash Express Invest'
})
</script>

<template>
  <div class="py-32 animate-in fade-in max-w-7xl mx-auto px-6 text-left">
    <SectionHeader title="Vision & Philosophie" subtitle="Comprendre les mécanismes de création de valeur chez Wash Express." />

    <!-- 1. INTRO: L'Investissement -->
    <div v-if="intro" class="mb-32 relative">
      <div class="absolute inset-0 bg-primary/5 -skew-y-3 transform rounded-[3rem]"></div>
      <div class="relative bg-white border border-slate-100 shadow-xl rounded-[2.5rem] p-12 md:p-16 flex flex-col md:flex-row gap-12 items-center">
        <div class="flex-1 space-y-8">
           <div v-if="intro.badge" class="inline-flex items-center gap-3 px-4 py-2 bg-primary/5 rounded-full text-secondary font-black uppercase text-[10px] tracking-widest">
             <BookOpen :size="14" /> {{ intro.badge }}
           </div>
           <h3 class="text-3xl md:text-4xl font-black text-primary tracking-tighter uppercase leading-tight">
             {{ intro.title }}
           </h3>
           <p class="text-slate-600 leading-relaxed font-medium text-lg">
             {{ intro.description1 }}
           </p>
           <p class="text-slate-500 leading-relaxed">
             {{ intro.description2 }}
           </p>
        </div>
        <div class="flex-1 w-full bg-primary rounded-3xl p-10 text-white relative overflow-hidden group">
           <div class="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[80px] -mr-20 -mt-20"></div>
           <TrendingUp class="mb-8 text-secondary" :size="48" />
           <blockquote class="text-xl font-bold  leading-relaxed text-slate-200">
             "{{ intro.quote }}"
           </blockquote>
        </div>
      </div>
    </div>
    
    <!-- Rest of the static pillars for now as per user request to keep them if not in DB, but I'll continue migrating them if needed. 
         Actually, I'll stop at intros for this page to keep it simple, or migrate everything. 
         I'll migrate everything to be thorough. -->

    <!-- Piliers Clés (Static for now, but manageable if added to migrate-content) -->
    <!-- ... Rest of the file ... -->

    <!-- 2. CARACTÉRISTIQUES (Grid) -->
    <div class="mb-20">
      <SectionHeader title="Piliers Clés" subtitle="Les trois fondamentaux de notre approche." class="mb-12" />
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Renoncement -->
        <div class="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-500">
          <div class="w-14 h-14 bg-primary/10 rounded-2xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <Hourglass class="text-secondary" :size="24" />
          </div>
          <h4 class="text-xl font-black text-primary uppercase tracking-tight mb-4">Renoncement</h4>
          <p class="text-sm text-slate-500 leading-relaxed font-medium">
            Renoncer à une satisfaction immédiate pour un gain futur plus important. C'est la discipline au cœur de la capitalisation.
          </p>
        </div>

        <!-- Durabilité -->
        <div class="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-500">
          <div class="w-14 h-14 bg-primary/10 rounded-2xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <Scale class="text-secondary" :size="24" />
          </div>
          <h4 class="text-xl font-black text-primary uppercase tracking-tight mb-4">Durabilité</h4>
          <p class="text-sm text-slate-500 leading-relaxed font-medium">
            Produire des effets durables, par opposition à une charge consommée immédiatement. Investir pour construire, pas pour dépenser.
          </p>
        </div>

        <!-- Rentabilité -->
        <div class="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-500">
          <div class="w-14 h-14 bg-primary/10 rounded-2xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <TrendingUp class="text-secondary" :size="24" />
          </div>
          <h4 class="text-xl font-black text-primary uppercase tracking-tight mb-4">Rentabilité</h4>
          <p class="text-sm text-slate-500 leading-relaxed font-medium">
            Le gain futur doit justifier le coût initial. Calculé rigoureusement via le Ratio RSI (Retour Sur Investissement).
          </p>
        </div>
      </div>
    </div>

    <!-- 3. CONTEXTE & TRADING -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-32 items-start">
      <!-- Context Definitions -->
      <div class="space-y-8">
        <h3 class="text-2xl font-black text-primary uppercase tracking-tight flex items-center gap-3">
          <BookOpen class="text-primary" :size="24"/> Contextes
        </h3>
        <div class="space-y-4">
          <div class="p-6 rounded-2xl bg-slate-50 border-l-4 border-primary">
            <h5 class="font-black text-xs uppercase tracking-widest text-slate-400 mb-2">En Économie / Finance</h5>
            <p class="text-sm font-bold text-slate-700">Une dépense immédiate visant à augmenter la richesse ou la capacité de production future (ex: achat d'équipements).</p>
          </div>
          <div class="p-6 rounded-2xl bg-slate-50 border-l-4 border-slate-300">
            <h5 class="font-black text-xs uppercase tracking-widest text-slate-400 mb-2">En Comptabilité</h5>
            <p class="text-sm font-bold text-slate-700">Une dépense amortissable qui augmente le patrimoine (l'actif) d'une entreprise.</p>
          </div>
        </div>
      </div>

      <!-- Trading Definition -->
      <div class="relative bg-primary rounded-[2.5rem] p-10 overflow-hidden text-white shadow-2xl">
         <div class="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
         
         <div class="relative z-10 space-y-8">
            <div class="flex items-center gap-4 border-b border-white/10 pb-6">
              <Activity class="text-secondary" :size="32" />
              <div>
                <h3 class="text-2xl font-black uppercase tracking-tight">Le Trader</h3>
                <p class="text-[10px] uppercase tracking-widest text-slate-100">Opérateur de Marché</p>
              </div>
            </div>

            <p class="text-slate-100 leading-relaxed text-sm">
              Un professionnel ou particulier qui achète et vend des instruments financiers (Actions, Devises, Indices, Matières Premières) sur les marchés à court ou moyen terme pour générer des profits grâce aux variations de prix.
            </p>

            <div class="bg-white/5 p-6 rounded-xl border border-white/5">
              <h5 class="text-primary font-black text-sm uppercase mb-2 flex items-center gap-2"><BarChart3 :size="16"/> Objectif Principal</h5>
              <p class="text-xs text-white uppercase tracking-wider leading-relaxed">
                Réaliser des gains rapides ou réguliers en capitalisant sur la volatilité des marchés.
              </p>
            </div>
         </div>
      </div>
    </div>

    <!-- 4. CARENCE (Legacy Content preserved) -->
    <div class="relative group rounded-[3rem] overflow-hidden">
       <div class="absolute inset-0 bg-primary transition-colors duration-700 group-hover:bg-[#0D2E50]"></div>
       <div class="relative p-12 md:p-20 flex flex-col md:flex-row gap-12 items-center">
          <div class="flex-1 space-y-6">
             <h3 class="text-3xl font-black text-white uppercase tracking-tighter underline decoration-secondary decoration-4 underline-offset-8">
               Protocole de Carence
             </h3>
             <p class="text-lg text-slate-300 font-light leading-relaxed">
               Pourquoi 7 jours de carence ? C'est le délai administratif d'affectation des fonds. Ce protocole garantit que chaque euro est juridiquement lié au bon de commande de l'équipement industriel spécifique financé.
             </p>
          </div>
          <div class="shrink-0 p-8 bg-white/5 rounded-full border border-white/10 shadow-2xl">
              <Lock class="text-secondary" :size="48" />
          </div>
       </div>
    </div>

  </div>
</template>
