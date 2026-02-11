<template>
  <div class="py-40 animate-in fade-in max-w-7xl mx-auto px-6 text-left">
    <SectionHeader title="Liaison" subtitle="Canal direct entre investisseurs, partenaires et direction générale." />
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-24">
      <div v-if="contactInfo" class="space-y-12">
        <div v-for="(c, i) in contactInfo" :key="i" class="p-12 border rounded-[4rem] bg-white shadow-sm flex items-start gap-10 group hover:shadow-2xl transition-all duration-700 animate-in slide-in-from-left-6" :style="{ animationDelay: `${Number(i) * 150}ms` }">
          <div class="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center text-secondary group-hover:bg-primary/20 group-hover:text-primary transition-all shadow-inner">
            <component :is="getIcon(c.icon)" :size="28" />
          </div>
          <div class="text-left">
            <h4 class="font-black text-primary text-xs mb-2">{{ c.label }}</h4>
            <p class="text-lg text-slate-500 font-medium leading-relaxed">{{ c.val }}</p>
          </div>
        </div>
      </div>
      <div class="bg-primary p-16 rounded-[4rem] text-white shadow-2xl relative overflow-hidden animate-in slide-in-from-right-6 duration-1000 text-left">
        <div class="absolute top-0 left-0 w-full h-2 bg-primary"></div>
        <h3 class="text-3xl font-black tracking-tighter mb-12 underline underline-offset-[12px] decoration-primary  text-left">Formulaire de Requête</h3>
        <form @submit.prevent="handleSubmit" class="space-y-8 text-left">
          <input v-model="form.name" type="text" placeholder="Dénomination / Nom complet" class="w-full p-6 bg-white/5 border border-white/10 rounded-2xl text-sm  outline-none focus:border-primary transition-colors" />
          <input v-model="form.email" type="email" placeholder="Email institutionnel" class="w-full p-6 bg-white/5 border border-white/10 rounded-2xl text-sm  outline-none focus:border-primary transition-colors" />
          <input v-model="form.phone" type="tel" placeholder="Téléphone (optionnel)" class="w-full p-6 bg-white/5 border border-white/10 rounded-2xl text-sm  outline-none focus:border-primary transition-colors" />
          <textarea v-model="form.message" placeholder="Décrivez l'objet de votre liaison..." class="w-full p-6 bg-white/5 border border-white/10 rounded-2xl text-sm h-48  outline-none focus:border-primary transition-colors"></textarea>
          
          <button 
            type="submit" 
            :disabled="isSubmitting"
            class="w-full bg-secondary text-primary py-6 rounded-2xl font-black text-xs tracking-[0.5em] hover:bg-white shadow-xl transition-all active:scale-95 flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-wait"
          >
            <Loader2 v-if="isSubmitting" class="animate-spin" :size="18" />
            <span>{{ isSubmitting ? 'Transmission...' : 'Transmettre au Pôle Dédié' }}</span>
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { MapPin, Mail, Phone, Loader2 } from 'lucide-vue-next';
import { contactSchema } from '~/utils/validation';
import { toast } from 'vue-sonner';

const config = useRuntimeConfig()
const { data: res } = await useFetch<any>('http://localhost:4000/contents/contact.info')
const contactInfo = computed(() => res.value?.data)

const getIcon = (name: string) => {
  const icons: any = { MapPin, Mail, Phone }
  return icons[name] || Phone
}

useHead({
  title: 'Contact - Wash Express Invest'
})

const form = reactive({
  name: '',
  email: '',
  phone: '',
  message: ''
})

const isSubmitting = ref(false)

const handleSubmit = async () => {
  const result = contactSchema.safeParse(form)
  
  if (!result.success) {
    const errorMsg = result.error?.issues[0]?.message || 'Erreur de validation'
    toast.error(errorMsg)
    return
  }

  isSubmitting.value = true
  await new Promise(resolve => setTimeout(resolve, 1500))
  
  toast.success('Votre requête a été transmise avec succès.')
  isSubmitting.value = false
  
  form.name = ''
  form.email = ''
  form.phone = ''
  form.message = ''
}
</script>
