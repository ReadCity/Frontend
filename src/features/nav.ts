import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

type display = boolean;
interface NavState {
    display: display;
    toggleDisplay: () => void;
}

const useNavStore = create<NavState>((set) => ({
    display: true,
    toggleDisplay: () => set((state) => ({ display: !state.display })),
}));

export default useNavStore;
