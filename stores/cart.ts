import { defineStore } from 'pinia'

export interface Product {
    id: number | string
    name: string
    price: number
    img: string
    qty: number
    [key: string]: any
}

export const useCartStore = defineStore('cart', {
    state: () => ({
        items: [] as Product[],
        isCartOpen: false
    }),

    getters: {
        cartTotal: (state) => state.items.reduce((acc, item) => acc + item.price * item.qty, 0),
        cartCount: (state) => state.items.length
    },

    actions: {
        addToCart(product: Omit<Product, 'qty'>) {
            const exists = this.items.find((p) => p.id === product.id)
            if (exists) {
                exists.qty++
            } else {
                this.items.push({ ...product, qty: 1 })
            }
            this.isCartOpen = true
        },

        updateQty(id: number | string, delta: number) {
            const item = this.items.find((p) => p.id === id)
            if (item) {
                const newQty = item.qty + delta
                if (newQty < 1) return
                item.qty = newQty
            }
        },

        removeFromCart(id: number | string) {
            this.items = this.items.filter((p) => p.id !== id)
        },

        toggleCart() {
            this.isCartOpen = !this.isCartOpen
        },

        clearCart() {
            this.items = []
        }
    },

    persist: true
})
