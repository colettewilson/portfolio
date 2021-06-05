import create from 'zustand'

export const useHeaderStore = create(set => ({
  scrollHeader: false,
  setScrollHeader: scrollHeader => set({ scrollHeader })
}))