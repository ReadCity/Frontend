import { z } from 'zod'

export const AdminSchema = z.object({
  id: z.string(),
  username: z.string(),
  password: z.string()
})
export interface Admin extends z.infer<typeof AdminSchema> {}
