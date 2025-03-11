export function useAuthPreviewMode() {
  const { user } = useUserSession()

  return usePreviewMode({
    shouldEnable: () => {
      return true
    },
    onEnable: () => {
      console.info('Preview mode enabled')
    },
    onDisable: () => {
      console.info('Preview mode disabled')
    },
  })
}
