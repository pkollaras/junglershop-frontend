<script lang="ts" setup>
const { t, locale } = useI18n({ useScope: 'local' })
const route = useRoute()

const categoryId = route.params.id

const { data: category } = await useFetch(
  `/api/products/categories/${categoryId}`,
  {
    key: `category${categoryId}`,
    method: 'GET',
    query: {
      language: locale.value,
    },
  },
)

if (!category.value) {
  throw createError({
    statusCode: 404,
    message: t('error.page.not.found'),
    fatal: true,
  })
}

definePageMeta({
  layout: 'default',
})
</script>

<template>
  <PageWrapper class="flex flex-col">
    <PageTitle
      :text="t('title')"
      class="capitalize"
    />
    <PageBody>
      <div v-if="category" />
    </PageBody>
  </PageWrapper>
</template>

<i18n lang="yaml">
el:
  title: Κατηγορία
</i18n>
