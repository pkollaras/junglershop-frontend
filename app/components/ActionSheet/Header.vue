<script lang="ts" setup>
defineProps({
  text: {
    type: String,
    default: '',
  },
})
defineSlots<{
  default(props: object): any
}>()
</script>

<template>
  <div
    class="
      text-center text-xs font-bold text-primary-950
      dark:text-primary-50
    "
  >
    <slot>{{ text }}</slot>
  </div>
</template>
