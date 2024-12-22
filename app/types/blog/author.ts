import { z } from 'zod'

import { ZodUserAccount } from '~/types/user/account'
import { ZodOrderingQuery } from '~/types/ordering'
import { ZodPaginationQuery } from '~/types/pagination'
import { ZodLanguageQuery, ZodTimeStampModel, ZodUUIDModel } from '~/types'

const ZodBlogAuthorTranslations = z.record(
  z.object({
    bio: z.string().nullish(),
  }),
)

export const ZodBlogAuthor = z.object({
  translations: ZodBlogAuthorTranslations,
  id: z.number().int(),
  user: z.union([z.number(), z.lazy(() => ZodUserAccount)]),
  website: z.string().nullish(),
  numberOfPosts: z.number().int(),
  totalLikesReceived: z.number().int(),
}).merge(ZodUUIDModel).merge(ZodTimeStampModel)

export const ZodBlogAuthorQuery = z
  .object({
    id: z.string().nullish(),
    user: z.string().nullish(),
  })
  .merge(ZodLanguageQuery)
  .merge(ZodOrderingQuery)
  .merge(ZodPaginationQuery)

export const ZodBlogAuthorParams = z.object({
  id: z.string(),
})

export type BlogAuthor = z.infer<typeof ZodBlogAuthor>
