import { z } from 'zod'

export const BaseResponseSchema = z.object({
  status: z.number(),
  msg: z.string()
})

export interface BaseResponse extends z.infer<typeof BaseResponseSchema> {}
