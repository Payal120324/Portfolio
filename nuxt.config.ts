// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  components: {
    dirs: [
      {
        path: '~/components',
        pathPrefix: false
      }
    ]
  },
  app: {
    head: {
      title: 'Payal Sharad Salve | AI & Data Science Portfolio',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Payal Sharad Salve - CS student specializing in AI/ML, Data Science, Data Analytics, and UI/UX Design. Google Gemini Student Ambassador & HPAIR Delegate.' }
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@400;500;600;700;800&display=swap' }
      ]
    }
  },
  // ngrok: {
  //   authtoken_from_env: true, // Use NGROK_AUTHTOKEN environment variable
  //   // authtoken: 'your_ngrok_authtoken', // Or use this option
  //   auth: 'username:password',
  //   domain: 'your_custom_domain',
  //   production: true,
  // },
  vite: {
    server: {
      allowedHosts: [
        "wsrbx-103-173-195-199.a.free.pinggy.link"
      ],
    }
  }
})
