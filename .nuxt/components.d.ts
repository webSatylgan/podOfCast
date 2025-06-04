
import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T extends DefineComponent> = T & DefineComponent<{}, {refresh: () => Promise<void>}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, SlotsType<{ fallback: { error: unknown } }>>
type HydrationStrategies = {
  hydrateOnVisible?: IntersectionObserverInit | true
  hydrateOnIdle?: number | true
  hydrateOnInteraction?: keyof HTMLElementEventMap | Array<keyof HTMLElementEventMap> | true
  hydrateOnMediaQuery?: string
  hydrateAfter?: number
  hydrateWhen?: boolean
  hydrateNever?: true
}
type LazyComponent<T> = (T & DefineComponent<HydrationStrategies, {}, {}, {}, {}, {}, {}, { hydrated: () => void }>)
interface _GlobalComponents {
      'CommonCategoriesCommon': typeof import("../components/common/categoriesCommon.vue")['default']
    'CommonHeroCommon': typeof import("../components/common/heroCommon.vue")['default']
    'CommonQuoteCommon': typeof import("../components/common/quoteCommon.vue")['default']
    'CommonSliderCommon': typeof import("../components/common/sliderCommon.vue")['default']
    'LayoutsCta': typeof import("../components/layouts/cta.vue")['default']
    'LayoutsFooter': typeof import("../components/layouts/footer.vue")['default']
    'LayoutsHeader': typeof import("../components/layouts/header.vue")['default']
    'LayoutsMenu': typeof import("../components/layouts/menu.vue")['default']
    'SectionsAbout': typeof import("../components/sections/about/about.vue")['default']
    'SectionsAboutContact': typeof import("../components/sections/about/contact.vue")['default']
    'SectionsAboutHero': typeof import("../components/sections/about/hero.vue")['default']
    'SectionsAboutSponsors': typeof import("../components/sections/about/sponsors.vue")['default']
    'SectionsBlogCategories': typeof import("../components/sections/blog/categories.vue")['default']
    'SectionsBlogHero': typeof import("../components/sections/blog/hero.vue")['default']
    'SectionsDetailCategories': typeof import("../components/sections/detail/categories.vue")['default']
    'SectionsDetailHero': typeof import("../components/sections/detail/hero.vue")['default']
    'SectionsIndexAbout': typeof import("../components/sections/index/about.vue")['default']
    'SectionsIndexBlog': typeof import("../components/sections/index/blog.vue")['default']
    'SectionsIndexEpisodes': typeof import("../components/sections/index/episodes.vue")['default']
    'SectionsIndexFeatures': typeof import("../components/sections/index/features.vue")['default']
    'SectionsIndexHero': typeof import("../components/sections/index/hero.vue")['default']
    'SectionsIndexPrice': typeof import("../components/sections/index/price.vue")['default']
    'SectionsIndexTestimonials': typeof import("../components/sections/index/testimonials.vue")['default']
    'UiCategoriesUi': typeof import("../components/ui/categoriesUi.vue")['default']
    'UiLogoUi': typeof import("../components/ui/logoUi.vue")['default']
    'UiPlatformsUi': typeof import("../components/ui/platformsUi.vue")['default']
    'UiPodcastCardUi': typeof import("../components/ui/podcastCardUi.vue")['default']
    'UiPostCardUi': typeof import("../components/ui/postCardUi.vue")['default']
    'UiQuoteUi': typeof import("../components/ui/quoteUi.vue")['default']
    'UiScribbleUi': typeof import("../components/ui/scribbleUi.vue")['default']
    'UiTitleScribbleUi': typeof import("../components/ui/titleScribbleUi.vue")['default']
    'UiTitleUi': typeof import("../components/ui/titleUi.vue")['default']
    'NuxtWelcome': typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
    'NuxtLayout': typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
    'NuxtErrorBoundary': typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']
    'ClientOnly': typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
    'DevOnly': typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
    'ServerPlaceholder': typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
    'NuxtLink': typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
    'NuxtLoadingIndicator': typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
    'NuxtRouteAnnouncer': typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
    'NuxtImg': typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
    'NuxtPicture': typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
    'NuxtPage': typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
    'NoScript': typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
    'Link': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
    'Base': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
    'Title': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
    'Meta': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
    'Style': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
    'Head': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
    'Html': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
    'Body': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
    'NuxtIsland': typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
    'NuxtRouteAnnouncer': IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
      'LazyCommonCategoriesCommon': LazyComponent<typeof import("../components/common/categoriesCommon.vue")['default']>
    'LazyCommonHeroCommon': LazyComponent<typeof import("../components/common/heroCommon.vue")['default']>
    'LazyCommonQuoteCommon': LazyComponent<typeof import("../components/common/quoteCommon.vue")['default']>
    'LazyCommonSliderCommon': LazyComponent<typeof import("../components/common/sliderCommon.vue")['default']>
    'LazyLayoutsCta': LazyComponent<typeof import("../components/layouts/cta.vue")['default']>
    'LazyLayoutsFooter': LazyComponent<typeof import("../components/layouts/footer.vue")['default']>
    'LazyLayoutsHeader': LazyComponent<typeof import("../components/layouts/header.vue")['default']>
    'LazyLayoutsMenu': LazyComponent<typeof import("../components/layouts/menu.vue")['default']>
    'LazySectionsAbout': LazyComponent<typeof import("../components/sections/about/about.vue")['default']>
    'LazySectionsAboutContact': LazyComponent<typeof import("../components/sections/about/contact.vue")['default']>
    'LazySectionsAboutHero': LazyComponent<typeof import("../components/sections/about/hero.vue")['default']>
    'LazySectionsAboutSponsors': LazyComponent<typeof import("../components/sections/about/sponsors.vue")['default']>
    'LazySectionsBlogCategories': LazyComponent<typeof import("../components/sections/blog/categories.vue")['default']>
    'LazySectionsBlogHero': LazyComponent<typeof import("../components/sections/blog/hero.vue")['default']>
    'LazySectionsDetailCategories': LazyComponent<typeof import("../components/sections/detail/categories.vue")['default']>
    'LazySectionsDetailHero': LazyComponent<typeof import("../components/sections/detail/hero.vue")['default']>
    'LazySectionsIndexAbout': LazyComponent<typeof import("../components/sections/index/about.vue")['default']>
    'LazySectionsIndexBlog': LazyComponent<typeof import("../components/sections/index/blog.vue")['default']>
    'LazySectionsIndexEpisodes': LazyComponent<typeof import("../components/sections/index/episodes.vue")['default']>
    'LazySectionsIndexFeatures': LazyComponent<typeof import("../components/sections/index/features.vue")['default']>
    'LazySectionsIndexHero': LazyComponent<typeof import("../components/sections/index/hero.vue")['default']>
    'LazySectionsIndexPrice': LazyComponent<typeof import("../components/sections/index/price.vue")['default']>
    'LazySectionsIndexTestimonials': LazyComponent<typeof import("../components/sections/index/testimonials.vue")['default']>
    'LazyUiCategoriesUi': LazyComponent<typeof import("../components/ui/categoriesUi.vue")['default']>
    'LazyUiLogoUi': LazyComponent<typeof import("../components/ui/logoUi.vue")['default']>
    'LazyUiPlatformsUi': LazyComponent<typeof import("../components/ui/platformsUi.vue")['default']>
    'LazyUiPodcastCardUi': LazyComponent<typeof import("../components/ui/podcastCardUi.vue")['default']>
    'LazyUiPostCardUi': LazyComponent<typeof import("../components/ui/postCardUi.vue")['default']>
    'LazyUiQuoteUi': LazyComponent<typeof import("../components/ui/quoteUi.vue")['default']>
    'LazyUiScribbleUi': LazyComponent<typeof import("../components/ui/scribbleUi.vue")['default']>
    'LazyUiTitleScribbleUi': LazyComponent<typeof import("../components/ui/titleScribbleUi.vue")['default']>
    'LazyUiTitleUi': LazyComponent<typeof import("../components/ui/titleUi.vue")['default']>
    'LazyNuxtWelcome': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
    'LazyNuxtLayout': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
    'LazyNuxtErrorBoundary': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']>
    'LazyClientOnly': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']>
    'LazyDevOnly': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']>
    'LazyServerPlaceholder': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
    'LazyNuxtLink': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
    'LazyNuxtLoadingIndicator': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
    'LazyNuxtRouteAnnouncer': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
    'LazyNuxtImg': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
    'LazyNuxtPicture': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
    'LazyNuxtPage': LazyComponent<typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']>
    'LazyNoScript': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
    'LazyLink': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']>
    'LazyBase': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']>
    'LazyTitle': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']>
    'LazyMeta': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']>
    'LazyStyle': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']>
    'LazyHead': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']>
    'LazyHtml': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']>
    'LazyBody': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']>
    'LazyNuxtIsland': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
    'LazyNuxtRouteAnnouncer': LazyComponent<IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>>
}

declare module 'vue' {
  export interface GlobalComponents extends _GlobalComponents { }
}

export const CommonCategoriesCommon: typeof import("../components/common/categoriesCommon.vue")['default']
export const CommonHeroCommon: typeof import("../components/common/heroCommon.vue")['default']
export const CommonQuoteCommon: typeof import("../components/common/quoteCommon.vue")['default']
export const CommonSliderCommon: typeof import("../components/common/sliderCommon.vue")['default']
export const LayoutsCta: typeof import("../components/layouts/cta.vue")['default']
export const LayoutsFooter: typeof import("../components/layouts/footer.vue")['default']
export const LayoutsHeader: typeof import("../components/layouts/header.vue")['default']
export const LayoutsMenu: typeof import("../components/layouts/menu.vue")['default']
export const SectionsAbout: typeof import("../components/sections/about/about.vue")['default']
export const SectionsAboutContact: typeof import("../components/sections/about/contact.vue")['default']
export const SectionsAboutHero: typeof import("../components/sections/about/hero.vue")['default']
export const SectionsAboutSponsors: typeof import("../components/sections/about/sponsors.vue")['default']
export const SectionsBlogCategories: typeof import("../components/sections/blog/categories.vue")['default']
export const SectionsBlogHero: typeof import("../components/sections/blog/hero.vue")['default']
export const SectionsDetailCategories: typeof import("../components/sections/detail/categories.vue")['default']
export const SectionsDetailHero: typeof import("../components/sections/detail/hero.vue")['default']
export const SectionsIndexAbout: typeof import("../components/sections/index/about.vue")['default']
export const SectionsIndexBlog: typeof import("../components/sections/index/blog.vue")['default']
export const SectionsIndexEpisodes: typeof import("../components/sections/index/episodes.vue")['default']
export const SectionsIndexFeatures: typeof import("../components/sections/index/features.vue")['default']
export const SectionsIndexHero: typeof import("../components/sections/index/hero.vue")['default']
export const SectionsIndexPrice: typeof import("../components/sections/index/price.vue")['default']
export const SectionsIndexTestimonials: typeof import("../components/sections/index/testimonials.vue")['default']
export const UiCategoriesUi: typeof import("../components/ui/categoriesUi.vue")['default']
export const UiLogoUi: typeof import("../components/ui/logoUi.vue")['default']
export const UiPlatformsUi: typeof import("../components/ui/platformsUi.vue")['default']
export const UiPodcastCardUi: typeof import("../components/ui/podcastCardUi.vue")['default']
export const UiPostCardUi: typeof import("../components/ui/postCardUi.vue")['default']
export const UiQuoteUi: typeof import("../components/ui/quoteUi.vue")['default']
export const UiScribbleUi: typeof import("../components/ui/scribbleUi.vue")['default']
export const UiTitleScribbleUi: typeof import("../components/ui/titleScribbleUi.vue")['default']
export const UiTitleUi: typeof import("../components/ui/titleUi.vue")['default']
export const NuxtWelcome: typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
export const NuxtLayout: typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
export const NuxtErrorBoundary: typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']
export const ClientOnly: typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
export const DevOnly: typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
export const ServerPlaceholder: typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const NuxtLink: typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
export const NuxtLoadingIndicator: typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
export const NuxtRouteAnnouncer: typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
export const NuxtImg: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
export const NuxtPicture: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
export const NuxtPage: typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
export const NoScript: typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
export const Link: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
export const Base: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
export const Title: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
export const Meta: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
export const Style: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
export const Head: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
export const Html: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
export const Body: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
export const NuxtIsland: typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
export const NuxtRouteAnnouncer: IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyCommonCategoriesCommon: LazyComponent<typeof import("../components/common/categoriesCommon.vue")['default']>
export const LazyCommonHeroCommon: LazyComponent<typeof import("../components/common/heroCommon.vue")['default']>
export const LazyCommonQuoteCommon: LazyComponent<typeof import("../components/common/quoteCommon.vue")['default']>
export const LazyCommonSliderCommon: LazyComponent<typeof import("../components/common/sliderCommon.vue")['default']>
export const LazyLayoutsCta: LazyComponent<typeof import("../components/layouts/cta.vue")['default']>
export const LazyLayoutsFooter: LazyComponent<typeof import("../components/layouts/footer.vue")['default']>
export const LazyLayoutsHeader: LazyComponent<typeof import("../components/layouts/header.vue")['default']>
export const LazyLayoutsMenu: LazyComponent<typeof import("../components/layouts/menu.vue")['default']>
export const LazySectionsAbout: LazyComponent<typeof import("../components/sections/about/about.vue")['default']>
export const LazySectionsAboutContact: LazyComponent<typeof import("../components/sections/about/contact.vue")['default']>
export const LazySectionsAboutHero: LazyComponent<typeof import("../components/sections/about/hero.vue")['default']>
export const LazySectionsAboutSponsors: LazyComponent<typeof import("../components/sections/about/sponsors.vue")['default']>
export const LazySectionsBlogCategories: LazyComponent<typeof import("../components/sections/blog/categories.vue")['default']>
export const LazySectionsBlogHero: LazyComponent<typeof import("../components/sections/blog/hero.vue")['default']>
export const LazySectionsDetailCategories: LazyComponent<typeof import("../components/sections/detail/categories.vue")['default']>
export const LazySectionsDetailHero: LazyComponent<typeof import("../components/sections/detail/hero.vue")['default']>
export const LazySectionsIndexAbout: LazyComponent<typeof import("../components/sections/index/about.vue")['default']>
export const LazySectionsIndexBlog: LazyComponent<typeof import("../components/sections/index/blog.vue")['default']>
export const LazySectionsIndexEpisodes: LazyComponent<typeof import("../components/sections/index/episodes.vue")['default']>
export const LazySectionsIndexFeatures: LazyComponent<typeof import("../components/sections/index/features.vue")['default']>
export const LazySectionsIndexHero: LazyComponent<typeof import("../components/sections/index/hero.vue")['default']>
export const LazySectionsIndexPrice: LazyComponent<typeof import("../components/sections/index/price.vue")['default']>
export const LazySectionsIndexTestimonials: LazyComponent<typeof import("../components/sections/index/testimonials.vue")['default']>
export const LazyUiCategoriesUi: LazyComponent<typeof import("../components/ui/categoriesUi.vue")['default']>
export const LazyUiLogoUi: LazyComponent<typeof import("../components/ui/logoUi.vue")['default']>
export const LazyUiPlatformsUi: LazyComponent<typeof import("../components/ui/platformsUi.vue")['default']>
export const LazyUiPodcastCardUi: LazyComponent<typeof import("../components/ui/podcastCardUi.vue")['default']>
export const LazyUiPostCardUi: LazyComponent<typeof import("../components/ui/postCardUi.vue")['default']>
export const LazyUiQuoteUi: LazyComponent<typeof import("../components/ui/quoteUi.vue")['default']>
export const LazyUiScribbleUi: LazyComponent<typeof import("../components/ui/scribbleUi.vue")['default']>
export const LazyUiTitleScribbleUi: LazyComponent<typeof import("../components/ui/titleScribbleUi.vue")['default']>
export const LazyUiTitleUi: LazyComponent<typeof import("../components/ui/titleUi.vue")['default']>
export const LazyNuxtWelcome: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
export const LazyNuxtLayout: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
export const LazyNuxtErrorBoundary: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']>
export const LazyClientOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']>
export const LazyDevOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']>
export const LazyServerPlaceholder: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyNuxtLink: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
export const LazyNuxtLoadingIndicator: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
export const LazyNuxtImg: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
export const LazyNuxtPicture: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
export const LazyNuxtPage: LazyComponent<typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']>
export const LazyNoScript: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
export const LazyLink: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']>
export const LazyBase: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']>
export const LazyTitle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']>
export const LazyMeta: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']>
export const LazyStyle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']>
export const LazyHead: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']>
export const LazyHtml: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']>
export const LazyBody: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']>
export const LazyNuxtIsland: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>>

export const componentNames: string[]
