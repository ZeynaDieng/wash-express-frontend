import { defineStore } from 'pinia'

export const usePaymentStore = defineStore('payment', {
    state: () => ({
        isLoading: false,
        error: null as string | null,
        transactionRef: null as string | null
    }),

    actions: {
        setLoading(status: boolean) {
            this.isLoading = status
        },
        setError(err: string | null) {
            this.error = err
        },
        setTransactionRef(ref: string) {
            this.transactionRef = ref
        }
    }
})
