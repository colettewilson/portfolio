import create from 'zustand'

export const useModalStore = create(set => ({
  modalDisplay: false,
  setModalDisplay: modalDisplay => set({ modalDisplay }),

  modalContent: null,
  setModalContent: modalContent => set({ modalContent}),

  closeModal: () =>
    set({
      modalDisplay: false,
      modalContent: null,
    }),
}))