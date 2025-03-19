export default defineNuxtConfig({

    app: {
        head: {
            // site title
            title: "PodOfCast",

            link: [
                // fonts from google
                {rel: "preconnect", href: "https://fonts.googleapis.com"},
                {rel: "preconnect", href: "https://fonts.gstatic.com\" crossorigin"},
                {rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@500;600;700&display=swap"}
            ]
        },
    },

    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@use "@/assets/styles/vars.scss" as *;',
                }
            }
        }
    },
    css: ["@/assets/styles/global.scss"],

    compatibilityDate: '2024-11-01',
    devtools: { enabled: true }
})
