<script lang="ts" setup>
const { t } = useI18n({ useScope: 'local' })

definePageMeta({
  layout: 'user',
})
</script>

<template>
  <PageWrapper
    class="
      container flex flex-col gap-4 !p-0

      md:gap-8
    "
  >
    <PageTitle
      :text="t('title')"
      class="hidden"
    />

    <Account2FaWebAuthnList>
      <AccountAuthSettingsNavigation />
    </Account2FaWebAuthnList>
  </PageWrapper>
</template>

<i18n lang="yaml">
el:
  title: Κλειδιά ασφαλείας
</i18n>
