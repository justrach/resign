import create from 'zustand'

const useStore = create(set => ({
  content: {},
  setContent: (content:any) => set(() => ({ content }))
}))

export default useStore;
