<script lang="ts" setup>
const { t } = useI18n({ useScope: 'local' })

definePageMeta({
  layout: 'default',
})
</script>

<template>
  <PageWrapper class="container flex flex-col">
    <PageTitle
      :text="t('title')"
      class="mb-4 text-center capitalize"
    />
    <PageBody>
      <div class="article container-xs">
        <div class="grid items-center justify-center">
          <NuxtImg
            :style="{ objectFit: 'contain' }"
            src="/img/pages/about-junglershop.png"
            :width="960"
            :height="600"
            alt="junglershop"
            loading="eager"
            format="png"
            quality="100"
            preload
          />
        </div>
        <p
          class="
            text-primary-950

            dark:text-primary-50
          "
        >
          Tο junglershop ειναι ηλεκτρονικό κατάστημα
        </p>
      </div>
    </PageBody>
  </PageWrapper>
</template>

<i18n lang="yaml">
el:
  title: Τι Είναι Το junglershop
</i18n>
