import { z } from "zod";

export const OrderSchema = z.object({
  name: z.string().min(1, "Please fill in your name"),
  email: z.string().email().optional(),
  phone: z.string().min(9, "Invalid phone number!"),
  bookId: z.string(),
  location: z.string().optional()
});
