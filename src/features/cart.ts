import { type BookModel } from "@src/models/book"
import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

interface CartItem {
  id: BookModel["id"]
}
interface CartState {
  books: CartItem[] | never[]
  addBook: (id: BookModel["id"]) => void,
  removeBook: (id: BookModel["id"]) => void,
  clearBooks: () => void;
}

const useCart = create<CartState>()(
  devtools(
    persist(
      (set) => ({
        books: [],
        addBook: (id) => {
          set((state) => {
            const book = state.books.find(book => book.id === id);
            if (book) return { books: state.books };
            return {
              books: [...state.books, { id }]
            }
          });
        },
        removeBook: (id) => {
          set((state) => {
            const books = state.books.filter(book => book.id !== id);
            return {
              books
            }
          })
        },
        clearBooks: () => {
          set(() => {
            return {
              books: []
            }
          })
        }
      }),
      {
        name: 'bear-storage'
      }
    )
  )
)

export default useCart
