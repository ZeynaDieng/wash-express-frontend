export default defineNuxtConfig({
  compatibilityDate: '2026-02-07',
  runtimeConfig: {
    public: {
      apiBase: 'http://localhost:4000'
    }
  },
  devtools: { enabled: false },
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@nuxt/image',
    '@nuxtjs/seo',
    '@nuxtjs/i18n',
    '@vite-pwa/nuxt'
  ],
  tailwindcss: {
    config: {
      theme: {
        extend: {
          colors: {
            'brand-navy': '#0A2540',
            'primary': '#2388b6', // Logo Blue
            'secondary': '#fea921', // Logo Orange
            'pack-standard': '#C5A023',
            'pack-elixir': '#E3A03B',
            'pack-classic': '#D4E229',
            'pack-premium': '#7EE229',
          },
          animation: {
            'fade-in': 'fadeIn 0.5s ease-out forwards',
            'slide-in-from-bottom': 'slideInFromBottom 0.5s ease-out forwards',
            'slide-in-from-left': 'slideInFromLeft 0.5s ease-out forwards',
            'slide-in-from-right': 'slideInFromRight 0.5s ease-out forwards',
            'zoom-in': 'zoomIn 0.5s ease-out forwards',
          },
          keyframes: {
            fadeIn: {
              '0%': { opacity: '0' },
              '100%': { opacity: '1' },
            },
            slideInFromBottom: {
              '0%': { transform: 'translateY(20px)', opacity: '0' },
              '100%': { transform: 'translateY(0)', opacity: '1' },
            },
            slideInFromLeft: {
              '0%': { transform: 'translateX(-20px)', opacity: '0' },
              '100%': { transform: 'translateX(0)', opacity: '1' },
            },
            slideInFromRight: {
              '0%': { transform: 'translateX(20px)', opacity: '0' },
              '100%': { transform: 'translateX(0)', opacity: '1' },
            },
            zoomIn: {
              '0%': { transform: 'scale(0.95)', opacity: '0' },
              '100%': { transform: 'scale(1)', opacity: '1' },
            },
          },
        },
      },
    },
  },
  site: {
    url: 'https://washexpressinvest.com',
    name: 'Wash Express Invest',
    description: "L'industrie du soin textile standard ISO 9001.",
    defaultLocale: 'fr',
  },
  i18n: {
    locales: [
      { code: 'fr', iso: 'fr-FR', name: 'Français' },
      { code: 'en', iso: 'en-US', name: 'English' }
    ],
    defaultLocale: 'fr',
    strategy: 'prefix_except_default',
  },
  pwa: {
    manifest: {
      name: 'Wash Express Invest',
      short_name: 'WashInvest',
      description: "L'industrie du soin textile standard ISO 9001.",
      theme_color: '#2388b6',
      icons: [
        { src: '/icon-192x192.png', sizes: '192x192', type: 'image/png' },
        { src: '/icon-512x512.png', sizes: '512x512', type: 'image/png' }
      ]
    },
    workbox: {
      navigateFallback: '/',
    },
    devOptions: {
      enabled: true,
      type: 'module',
    }
  },
  vite: {
    server: {
      watch: {
        ignored: ['**/node_modules/**']
      }
    }
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  }
})