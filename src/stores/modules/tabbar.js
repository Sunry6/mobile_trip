import { defineStore } from 'pinia'

export const useTabbarStore = defineStore('tabbar', {
  state: () => ({
    currentIndex: 0,
    currentImgURL: '',
  }),
  actions: {},
})
