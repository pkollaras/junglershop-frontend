export function useAuthPreviewMode() {
  const { user } = useUserSession()
  const shouldEnable = computed(() => {
    return true
  })

  return usePreviewMode({
    shouldEnable: () => {
      return shouldEnable.value
    },
    onEnable: () => {
      console.info('Preview mode enabled')
    },
    onDisable: () => {
      console.info('Preview mode disabled')
    },
  })
}
