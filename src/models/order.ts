import { type Order } from '@src/interfaces'
import type BaseModel from './base'
import type { BookModel } from "./book"

export interface OrderModel extends Order, BaseModel {

}

export interface ExtendedOrder extends OrderModel {
  book: BookModel
}
