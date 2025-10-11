<script lang="ts" setup>
defineProps({
  disabled: {
    type: Boolean,
    required: false,
  },
})
defineSlots<{
  default(props: object): any
}>()
</script>

<template>
  <div
    class="
      card relative w-full overflow-hidden rounded border border-primary-500
      bg-primary-100 transition-colors duration-300
      dark:border-primary-500 dark:bg-primary-900
    "
  >
    <div
      v-if="disabled"
      class="
        absolute top-0 left-0 z-10 h-full w-full cursor-not-allowed
        bg-primary-800/[0.75]
      "
    />
    <slot />
  </div>
</template>
