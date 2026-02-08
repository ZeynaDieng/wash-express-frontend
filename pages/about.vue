<script setup lang="ts">
import { Leaf, ShieldCheck, Zap, Droplets, Microscope, CheckCircle2 } from 'lucide-vue-next';

const config = useRuntimeConfig()

const { data: missionRes } = await useFetch<any>('http://localhost:4000/contents/about.mission')
const { data: whyChooseRes } = await useFetch<any>('http://localhost:4000/contents/about.why_choose')
const { data: educationalRes } = await useFetch<any>('http://localhost:4000/contents/about.educational')

const mission = computed(() => missionRes.value?.data)
const whyChoose = computed(() => whyChooseRes.value?.data)
const educational = computed(() => educationalRes.value?.data)

const getIcon = (name: string) => {
  const icons: any = { ShieldCheck, CheckCircle2, Droplets, Zap }
  return icons[name] || ShieldCheck
}

useHead({
  title: 'À Propos - Wash Express Invest'
})
</script>

<template>
  <div class="py-32 animate-in fade-in max-w-7xl mx-auto px-6 text-left">
    <SectionHeader title="À Propos de Nous" subtitle="Normes écologiques et professionnalisme sans failles." />

    <!-- 1. MISSION & VISION -->
    <div v-if="mission" class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32 animate-in slide-in-from-bottom-8 duration-700">
       <div class="space-y-8">
           <div v-if="mission.badge" class="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 rounded-full text-emerald-600 font-black uppercase text-[10px] tracking-widest">
                <Leaf :size="14" /> {{ mission.badge }}
           </div>
           
           <h3 class="text-3xl font-black text-primary uppercase tracking-tighter leading-tight">
               {{ mission.title }}
           </h3>
           
           <div class="space-y-6 text-lg text-slate-600 font-medium leading-relaxed">
             <p>{{ mission.description1 }}</p>
             <p>{{ mission.description2 }}</p>
           </div>
       </div>
       
       <div class="relative bg-primary rounded-[3rem] p-12 text-white overflow-hidden shadow-2xl items-center flex min-h-[300px]">
           <div v-if="mission.bg_image" class="absolute inset-0 bg-cover bg-center opacity-10 mix-blend-overlay" :style="{ backgroundImage: `url(${mission.bg_image})` }"></div>
           <blockquote class="relative z-10 text-2xl font-black text-center  leading-relaxed">
             "{{ mission.quote }}"
             <span v-if="mission.quote_footer" class="text-primary not- mt-4 block text-base font-bold tracking-widest uppercase">{{ mission.quote_footer }}</span>
           </blockquote>
       </div>
    </div>

    <!-- 2. POURQUOI CHOISIR WASH EXPRESS -->
    <div v-if="whyChoose && whyChoose.length > 0" class="mb-32">
        <div class="text-center max-w-3xl mx-auto mb-16 space-y-4 animate-in slide-in-from-bottom-8 duration-700 delay-200">
            <h3 class="text-3xl font-black text-primary uppercase tracking-tighter">Pourquoi Choisir Wash Express ?</h3>
            <p class="text-slate-500 font-medium">Vous désirez un service de pressing rapide, fiable et pratique ? Ne cherchez plus loin.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div v-for="(item, idx) in whyChoose" :key="idx" class="p-8 bg-slate-50 rounded-3xl hover:bg-white hover:shadow-xl transition-all duration-500 group relative animate-in slide-in-from-bottom-4 fade-in duration-500" :style="{ animationDelay: `${idx * 150}ms` }">
                <div v-if="item.badge" class="absolute top-8 right-8 text-[10px] font-bold bg-primary/10 text-secondary px-2 py-1 rounded">{{ item.badge }}</div>
                <div class="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-primary shadow-sm mb-6 group-hover:bg-secondary cursor-pointer group-hover:text-primary transition-colors">
                    <component :is="getIcon(item.icon)" :size="28" />
                </div>
                <h4 class="text-lg font-black uppercase tracking-tight mb-4 text-primary">{{ item.title }}</h4>
                <p class="text-sm text-slate-500 leading-relaxed">
                    {{ item.description }}
                </p>
            </div>
        </div>
    </div>

    <!-- 3. POURQUOI LE LAVAGE MACHINE (Educational) -->
    <div v-if="educational" class="bg-primary rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden">
        <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-3xl pointer-events-none -mr-32 -mt-32"></div>
        
        <div class="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div class="space-y-8">
                <h3 class="text-4xl font-black uppercase tracking-tighter leading-tight">
                    {{ educational.title }}
                </h3>
                <p v-if="educational.subtitle" class="text-slate-100 text-lg leading-relaxed">
                    {{ educational.subtitle }}
                </p>
                <div v-if="educational.highlight" class="p-6 bg-white/5 rounded-2xl border border-white/5 backdrop-blur-sm">
                   <Zap class="text-secondary mb-4" :size="32" />
                   <p class="text-sm font-medium text-slate-100">
                     "{{ educational.highlight }}"
                   </p>
                </div>
            </div>

            <div v-if="educational.points" class="space-y-4">
                <div v-for="(point, idx) in educational.points" :key="idx" class="flex gap-6 p-6 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors border border-white/5">
                    <div class="shrink-0 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-secondary font-black text-xl">{{ idx + 1 }}</div>
                    <div class="space-y-2">
                        <h4 class="font-bold text-lg">{{ point.title }}</h4>
                        <p class="text-sm text-slate-100 leading-relaxed">
                            {{ point.description }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>
