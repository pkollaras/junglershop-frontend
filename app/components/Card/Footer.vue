<script lang="ts" setup>
defineSlots<{
  default(props: object): any
}>()
</script>

<template>
  <div
    class="
      card-footer border-t border-primary-500 bg-primary-100 px-6 py-2 text-sm
      dark:border-primary-500 dark:bg-primary-900
    "
  >
    <slot />
  </div>
</template>
