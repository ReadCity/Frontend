import { create } from 'zustand'

type display = boolean
interface NavState {
  display: display
  toggleDisplay: () => void
  changeDisplay: (display: boolean) => void
}

const useNavStore = create<NavState>((set) => ({
  display: true,
  toggleDisplay: () => { set((state) => ({ display: !state.display })) },
  changeDisplay: (display) => { set(() => ({ display })) }
}))

export default useNavStore
