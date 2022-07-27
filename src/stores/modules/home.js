/**
 * search-box页面的状态管理文件
 * (数据,数据处理,网络请求)
 */
import { getHomeHotSuggests } from '@/services'
import { defineStore } from 'pinia'

const useHomeStore = defineStore('home', {
  state: () => ({
    hotSuggests: [],
    categories: [],
  }),
  actions: {
    async fetchHotSuggestData() {
      const res = await getHomeHotSuggests()
      this.hotSuggests = res.data
    },
  },
})

export default useHomeStore
