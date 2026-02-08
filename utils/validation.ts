import { z } from 'zod'

export const contactSchema = z.object({
    name: z.string().min(2, 'Le nom doit contenir au moins 2 caractères'),
    email: z.string().email('Email invalide'),
    phone: z.string().min(9, 'Numéro de téléphone invalide'),
    message: z.string().min(10, 'Le message doit contenir au moins 10 caractères')
})

export const checkoutSchema = z.object({
    firstName: z.string().min(2, 'Prénom requis'),
    lastName: z.string().min(2, 'Nom requis'),
    email: z.string().email('Email invalide'),
    phone: z.string().min(9, 'Numéro de téléphone invalide'),
    address: z.string().min(5, 'Adresse requise'),
    city: z.string().min(2, 'Ville requise'),
    country: z.string().min(2, 'Pays requis'),
    paymentMethod: z.enum(['paytech', 'card', 'orange-money', 'wave']).default('paytech')
})

export type ContactForm = z.infer<typeof contactSchema>
export type CheckoutForm = z.infer<typeof checkoutSchema>
