
export const paytechService = {
    async requestPayment(orderData: {
        item_name: string
        item_price: number
        currency: string
        ref_command: string
        command_name: string
        env: 'test' | 'prod'
        ipn_url: string
        success_url: string
        cancel_url: string
    }) {
        try {
            // Direct call to NestJS Backend (CORS enabled)
            const BACKEND_URL = 'http://localhost:4000/payment/paytech/request'

            const response = await $fetch(BACKEND_URL, {
                method: 'POST',
                body: orderData
            })
            return response
        } catch (error: any) {
            console.error('PayTech Payment Request Error:', error)
            if (error.data) {
                console.error('Server Error Data:', error.data)
            }
            throw error
        }
    }
}
