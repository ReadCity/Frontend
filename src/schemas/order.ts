import { z } from "zod";

export const OrderSchema = z.object({
  name: z.string().min(1, "Please fill in your name"),
  email: z.string().email().optional(),
  phone: z.string().length(9, "Invalid phone number!\nExample: 991234567"),
  bookId: z.string(),
  location: z.string().optional()
});
