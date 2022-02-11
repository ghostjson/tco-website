import create from 'zustand';

type StoreT = {
  isModelOpen: boolean;
  toggleModel: () => void;
};

const useStore = create<StoreT>((set) => ({
  isModelOpen: false,
  toggleModel: () =>
    set((state) => ({
      isModelOpen: !state.isModelOpen,
    })),
}));

export default useStore;
