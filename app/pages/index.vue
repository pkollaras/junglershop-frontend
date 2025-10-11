<script lang="ts" setup>
const { t } = useI18n()
const localePath = useLocalePath()
const { $i18n } = useNuxtApp()
const { isMobileOrTablet } = useDevice()

const items = computed(() => [
  {
    to: localePath('index'),
    label: $i18n.t('breadcrumb.items.index.label'),
    icon: $i18n.t('breadcrumb.items.index.icon'),
  },
  {
    to: localePath('products'),
    label: t('breadcrumb.items.products.label'),
    current: true,
  },
])

useHead({
  title: t('title'),
})

definePageMeta({
  layout: 'default',
})
</script>

<template>
  <PageWrapper
    class="flex flex-col"
    :class="{ 'pb-24': isMobileOrTablet }"
  >
    <div
      class="flex gap-4 pt-4"
      :class="{
        'flex-col': isMobileOrTablet,
        'flex-row': !isMobileOrTablet,
      }"
    >
      <ProductsSidebar />
      <ProductsList />
    </div>
  </PageWrapper>
</template>

<i18n lang="yaml">
el:
  title: Προϊόντα
  breadcrumb:
    items:
      products:
        label: Προϊόντα
</i18n>
