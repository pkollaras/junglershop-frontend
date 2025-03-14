import * as z from 'zod'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const accessToken = await requireAllAuthAccessToken()
  try {
    const body = await readValidatedBody(event, z.object({
      notificationUserIds: z.array(z.number()),
    }).parse)
    const response = await $fetch(`${config.apiBaseUrl}/notification/user/mark_as_seen`, {
      method: 'POST',
      body,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    return await parseDataAs(response, z.object({
      success: z.boolean(),
    }))
  }
  catch (error) {
    await handleError(error)
  }
})
