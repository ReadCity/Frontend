import { type Author } from '@src/interfaces'
import type BaseModel from './base'

export interface AuthorModel extends Author, BaseModel {
  img: string
}
