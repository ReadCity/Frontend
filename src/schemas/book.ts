import { z } from 'zod'

export const BookSchema = z.object({
  title: z.string(),
  desc: z.string(),
  file: z.any(),
  price: z.string(),
  rating: z.string(),
  count: z.string(),
  year: z.string(),
  pages: z.string(),
  categoryId: z.string(),
  authorId: z.string()
})
