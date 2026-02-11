<template>
  <div class="py-40 animate-in fade-in max-w-5xl mx-auto px-6 text-left  text-left    text-left">
    <SectionHeader title="Facturation" subtitle="Tunnel sécurisé via passerelle bancaire chiffrée." />
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-20   text-left    text-left">
      <div class="space-y-12    text-left     text-left">
        <div class="p-12 border-2 border-slate-50 rounded-[3rem] bg-white shadow-xl shadow-slate-100 space-y-10   text-left     text-left">
          <h3 class="text-2xl font-black text-primary tracking-tighter border-l-4 border-primary pl-6 text-left">Vos Coordonnées</h3>
          
          <div class="space-y-4">
            <div class="grid grid-cols-2 gap-4">
              <div class="space-y-2 text-left">
                <label class="text-[10px] font-black tracking-widest text-slate-400">Prénom</label>
                <input v-model="form.firstName" type="text" class="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium focus:outline-none focus:border-primary transition-colors" placeholder="Jean">
              </div>
              <div class="space-y-2 text-left">
                <label class="text-[10px] font-black tracking-widest text-slate-400">Nom</label>
                <input v-model="form.lastName" type="text" class="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium focus:outline-none focus:border-primary transition-colors" placeholder="Diop">
              </div>
            </div>

            <div class="space-y-2 text-left">
               <label class="text-[10px] font-black tracking-widest text-slate-400">Email</label>
               <input v-model="form.email" type="email" class="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium focus:outline-none focus:border-primary transition-colors" placeholder="jean.diop@exemple.com">
            </div>

            <div class="space-y-2 text-left">
               <label class="text-[10px] font-black tracking-widest text-slate-400">Téléphone Mobile</label>
               <input v-model="form.phone" type="tel" class="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium focus:outline-none focus:border-primary transition-colors" placeholder="+221 77 ...">
            </div>

             <div class="space-y-2 text-left">
               <label class="text-[10px] font-black tracking-widest text-slate-400">Adresse de Livraison</label>
               <input v-model="form.address" type="text" class="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium focus:outline-none focus:border-primary transition-colors" placeholder="Quartier, Rue...">
            </div>
            
            <div class="grid grid-cols-2 gap-4">
               <div class="space-y-2 text-left">
                 <label class="text-[10px] font-black tracking-widest text-slate-400">Ville</label>
                 <input v-model="form.city" type="text" class="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium focus:outline-none focus:border-primary transition-colors" placeholder="Dakar">
               </div>
                <div class="space-y-2 text-left">
                 <label class="text-[10px] font-black tracking-widest text-slate-400">Pays</label>
                 <input v-model="form.country" type="text" class="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium focus:outline-none focus:border-primary transition-colors" readonly>
               </div>
            </div>
          </div>

          <h3 class="text-2xl font-black text-primary tracking-tighter border-l-4 border-primary pl-6 pt-6 text-left">Moyen de Paiement</h3>
          <div class="grid grid-cols-2 gap-6">
            <button 
              v-for="m in paymentMethods" 
              :key="m.id" 
              @click="!m.disabled && (form.paymentMethod = m.id)"
              class="p-8 border-2 rounded-[2rem] flex flex-col items-center gap-4 transition-all group active:scale-95 relative"
              :class="[
                form.paymentMethod === m.id ? 'border-primary bg-white shadow-lg' : 'bg-slate-50/50 border-transparent hover:bg-white',
                m.disabled ? 'opacity-50 cursor-not-allowed grayscale' : 'cursor-pointer'
              ]"
            >
              <Wallet :size="24" class="text-primary"/>
              <span class="text-[10px] font-black tracking-widest text-slate-500 group-hover:text-primary text-center">{{ m.label }}</span>
              <span v-if="m.disabled" class="absolute top-2 right-4 text-[8px] font-bold text-red-400 bg-red-50 px-2 py-1 rounded-full">Bientôt</span>
            </button>
          </div>
        </div>
      </div>
      <div class="space-y-10 lg:pt-0    text-left     text-left">
        <div class="p-12 bg-primary text-white rounded-[4rem] shadow-2xl relative overflow-hidden   text-left      text-left">
          <h3 class="text-2xl font-black tracking-tighter mb-10 border-b border-white/10 pb-6 text-left       text-left">Résumé Expert</h3>
          <ClientOnly>
            <div class="space-y-6 mb-12  text-left        text-left">
              <div v-for="item in cart" :key="item.id" class="flex justify-between items-center text-xs  text-left         text-left">
                <span class="text-slate-100  text-left         text-left ">x{{ item.qty }} {{ item.name }} </span>
                <span class="font-black  text-left         text-left ">{{ (item.price * item.qty).toLocaleString() }} CFA</span>
              </div>
              <div class="flex justify-between pt-8 border-t border-white/10  text-left         text-left ">
                <span class="font-bold text-slate-100 text-[10px]  text-left          text-left">Total Commande</span>
                <span class="text-3xl font-black text-primary tracking-tighter  text-left          text-left ">{{ cartTotal.toLocaleString() }} CFA</span>
              </div>
            </div>
            <template #fallback>
              <div class="space-y-6 mb-12 animate-pulse">
                <div class="h-4 bg-white/10 rounded w-full"></div>
                <div class="h-4 bg-white/10 rounded w-3/4"></div>
                <div class="pt-8 border-t border-white/10">
                   <div class="h-10 bg-white/10 rounded w-1/2 ml-auto"></div>
                </div>
              </div>
            </template>
          </ClientOnly>
          <button 
            @click="handlePayment"
            :disabled="isProcessing"
            class="w-full bg-secondary text-primary py-6 rounded-2xl font-black text-xs tracking-[0.5em] shadow-2xl transition-all hover:bg-white flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-wait"
          >
            <Loader2 v-if="isProcessing" class="animate-spin" :size="18" />
            <span>{{ isProcessing ? 'Traitement...' : 'Payer & Commander' }}</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Wallet, Loader2 } from 'lucide-vue-next';
import { useCartStore } from '~/stores/cart';
import { usePaymentStore } from '~/stores/payment';
import { checkoutSchema } from '~/utils/validation';
import { paytechService } from '~/services/paytech';
import { toast } from 'vue-sonner';
import { storeToRefs } from 'pinia';

useHead({
  title: 'Paiement - Wash Express Invest',
  script: [
    {
      src: 'https://paytech.sn/cdn/paytech.min.js',
      defer: true,
      tagPosition: 'bodyClose'
    }
  ]
})

const cartStore = useCartStore()
const paymentStore = usePaymentStore()
const { items: cart, cartTotal } = storeToRefs(cartStore)

const paymentMethods = [
  { id: 'paytech', label: 'PayTech ' },
]

const form = reactive({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  address: '',
  city: '',
  country: 'Sénégal',
  paymentMethod: 'paytech'
})

const isProcessing = ref(false)

const handlePayment = async () => {
  if (cart.value.length === 0) {
    toast.error('Votre panier est vide')
    return
  }

  // 1. Validation
  const result = checkoutSchema.safeParse(form)
  if (!result.success) {
    const errorMsg = result.error?.issues[0]?.message || 'Erreur de validation'
    toast.error(errorMsg)
    return
  }

  isProcessing.value = true
  const toastId = toast.loading('Initialisation du paiement sécurisé...')

  try {
    // 2. Prepare Order Data
    const orderRef = `CMD-${Date.now()}`
    
    // 3. Call PayTech Service
    const paymentResponse = await paytechService.requestPayment({
      item_name: `Commande ${orderRef}`,
      item_price: cartTotal.value,
      currency: 'XOF',
      ref_command: orderRef,
      command_name: `Commande Wash Express Invest ${orderRef}`,
      env: 'test',
      ipn_url: 'https://wash-express-invest.com/payment/paytech/ipn', // PayTech requires HTTPS
      success_url: 'http://localhost:3000/success',
      cancel_url: 'http://localhost:3000/checkout'
    }) as any

    if (paymentResponse.success === 1) {
      toast.success('Ouverture de la fenêtre de paiement...', { id: toastId })
      
      // 4. Trigger PayTech Popup
      // 4. Trigger PayTech Popup
      // @ts-ignore
      if (typeof window.PayTech !== 'undefined') {
          // @ts-ignore
          const p = new window.PayTech({});
          
          p.withOption({
            prensentationMode: 1, // OPEN_IN_POPUP
            didPopupClosed: (isCompleted: boolean, successUrl: string, cancelUrl: string) => {
              if (isCompleted) {
                navigateTo('/success');
              } else {
                toast.error('Paiement annulé ou non terminé');
                // Force reload to clear any residual PayTech overlay/blur
                setTimeout(() => {
                  window.location.reload();
                }, 1500);
              }
            }
          });
          
          p.present(paymentResponse.redirect_url);
      } else {
         console.error('PayTech SDK not loaded');
         toast.error('Erreur de chargement du module de paiement');
      }
      
    } else {
      throw new Error('Erreur lors de la création du paiement')
    }

  } catch (error: any) {
    console.error('Checkout Error:', error)
    toast.error('Impossible d\'initialiser le paiement. Veuillez réessayer.', { id: toastId })
  } finally {
    isProcessing.value = false
  }
}
</script>
