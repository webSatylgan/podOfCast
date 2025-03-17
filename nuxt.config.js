// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

    app: {
        head: {
            // site title
            title: "PodOfCast",

            link: [
                // fonts from google fonts
                {rel: "preconnect", href: "https://fonts.googleapis.com"},
                {rel: "preconnect", href: "https://fonts.gstatic.com\" crossorigin"},
                {rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@500;600;700&display=swap"},
            ],
        },
    },

    compatibilityDate: '2024-11-01',
    devtools: { enabled: true }
})
