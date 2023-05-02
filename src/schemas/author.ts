import { z } from 'zod'

export const AuthorSchema = z.object({
  name: z.string(),
  dateOfBirth: z.string(),
  dateOfDeath: z.string().optional(),
  description: z.string(),
  file: z.unknown()
})
