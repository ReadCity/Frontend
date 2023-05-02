import { type AuthorSchema } from '@src/schemas/author'
import { type BookSchema } from '@src/schemas/book'
import { type CategorySchema } from '@src/schemas/category'
import { type OrderSchema } from '@src/schemas/order'
import { type z } from 'zod'
import { type imgSchema } from '@src/schemas/image'

export * from './filter'

export interface Author extends z.infer<typeof AuthorSchema> {}
export interface Book extends z.infer<typeof BookSchema> {}
export interface Category extends z.infer<typeof CategorySchema> {}
export interface Order extends z.infer<typeof OrderSchema> {}

export interface Image extends z.infer<typeof imgSchema> {}
