import { create } from 'zustand'

interface OrderDialogState {
  showModal: boolean
  toggle: () => void
}

const useOrderDialogStore = create<OrderDialogState>((set) => ({
  showModal: false,
  toggle: () => { set((state) => ({ showModal: !state.showModal })) }
}))

export default useOrderDialogStore
