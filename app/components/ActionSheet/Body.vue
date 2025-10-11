<script lang="ts" setup>
defineSlots<{
  default(props: object): any
}>()
</script>

<template>
  <div
    class="
      overflow-y-auto rounded bg-primary-100 p-4 backdrop-blur
      supports-backdrop-blur:bg-primary-100/60
      dark:bg-primary-900
    "
  >
    <slot />
  </div>
</template>
