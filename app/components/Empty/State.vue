<script lang="ts" setup>
defineProps({
  title: {
    type: String,
    required: false,
    default: 'Empty',
  },
  description: {
    type: String,
    required: false,
    default: '',
  },
})

defineSlots<{
  actions(props: object): any
  icon(props: object): any
}>()
</script>

<template>
  <div
    class="
      empty-state text-primary-950 border-primary-500 flex flex-col items-center
      justify-center gap-4 rounded-lg border p-4 text-center

      dark:text-primary-50 dark:border-primary-500

      md:p-8
    "
  >
    <div class="flex items-center gap-2 empty-state-title text-xl font-semibold">
      <slot name="icon" />
      {{ title }}
    </div>
    <div
      v-if="description"
      class="empty-state-description text-sm"
    >
      {{ description }}
    </div>
    <slot name="actions" />
  </div>
</template>
