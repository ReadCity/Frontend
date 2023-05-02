import { Author, type Book, type Category, type Image } from '@src/interfaces'
import type BaseModel from './base'
import { type AuthorModel } from './author'

export interface BookModel extends Book, BaseModel {
  author: AuthorModel
  category: Category
  image: Image
}
