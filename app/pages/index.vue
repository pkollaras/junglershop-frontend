<script lang="ts" setup>
const config = useRuntimeConfig()
const { isMobileOrTablet } = useDevice()
const { t } = useI18n()

const appTitle = computed(() => config.public.appTitle as string)

const items = computed(() => [
  isMobileOrTablet ? '/img/main-banner-mobile.png' : '/img/main-banner.png',
])

const bannerWidth = ref(isMobileOrTablet ? 510 : 1194)
const bannerHeight = ref(isMobileOrTablet ? 638 : 418)

definePageMeta({
  layout: 'default',
})

useHead({
  titleTemplate: '%s',
})

useSeoMeta({
  titleTemplate: '%s',
})
</script>

<template>
  <PageWrapper>
    <section
      :class="{
        'grid': isMobileOrTablet,
        'flex': !isMobileOrTablet,
        'flex-col': !isMobileOrTablet,
      }"
      class="
        gap-4 pt-4
        md:gap-8
      "
    >
      <div
        class="
          grid gap-4
          md:gap-8
        "
      >
        <UCarousel
          v-slot="{ item }"
          :items="items"
          :ui="{ item: 'basis-full items-center justify-center justify-items-center' }"
          class="
            mx-auto max-w-(--container-main)
            md:!p-0
          "
          indicators
        >
          <NuxtImg
            v-if="item && typeof item === 'string'"
            :alt="appTitle"
            :src="item"
            :style="{ objectFit: 'contain' }"
            :height="bannerHeight"
            :width="bannerWidth"
            sizes="xs:382px sm:352px md:545px lg:1194px xl:1194px xxl:1194px 2xl:1194px"
            fit="cover"
            quality="100"
            class="rounded-lg"
            format="webp"
            loading="eager"
            fetchpriority="high"
            preload
          />
        </UCarousel>

        <section
          class="
            mx-auto max-w-(--container-main) space-y-6
            md:!p-0
          "
        >
          <div class="flex items-center justify-between">
            <h2
              class="
                text-2xl font-bold text-primary-950
                md:text-3xl
                dark:text-primary-50
              "
            >
              {{ t('shop_by_category') }}
            </h2>
          </div>
          <MobileOrTabletOnly>
            <ProductCategoriesSlider />
          </MobileOrTabletOnly>
          <DesktopOnly>
            <ProductCategoriesSlider />
          </DesktopOnly>
        </section>

        <section
          class="
            mx-auto w-full max-w-(--container-main) space-y-6 overflow-hidden
            md:!p-0
          "
        >
          <div
            class="
              flex items-center justify-between px-4
              md:px-0
            "
          >
            <h2
              class="
                text-2xl font-bold text-primary-950
                md:text-3xl
                dark:text-primary-50
              "
            >
              {{ t('featured_products') }}
            </h2>
          </div>
          <ProductsSlider
            :page-size="6"
            :show-arrows="true"
            :show-dots="false"
          />
        </section>
      </div>
    </section>
  </PageWrapper>
</template>

<i18n lang="yaml">
el:
  shop_by_category: Κατηγορία
  featured_products: Προϊόντα
</i18n>
