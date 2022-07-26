import { defineStore } from 'pinia'

/**
 * @description: tabbar的状态管理函数
 */
export const useTabbarStore = defineStore('tabbar', {
  state: () => ({
    currentIndex: 0,
    currentImgURL: '',
  }),
  actions: {},
})
