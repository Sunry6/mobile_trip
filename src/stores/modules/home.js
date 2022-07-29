/**
 * search-box页面的状态管理文件
 * (数据,数据处理,网络请求)
 */
import { getHomeHotSuggests, getHomeCategories, getHomeHouseList } from '@/services'
import { defineStore } from 'pinia'

const useHomeStore = defineStore('home', {
  state: () => ({
    hotSuggests: [],
    categories: [],
    currentPage: 1,
    houseList: [],
  }),
  actions: {
    async fetchHotSuggestData() {
      const res = await getHomeHotSuggests()
      this.hotSuggests = res.data
    },
    async fetchCategoriesData() {
      const res = await getHomeCategories()
      this.categories = res.data
    },
    async fetchHouseListData() {
      const res = await getHomeHouseList(this.currentPage)
      // data中的数据直接push会把整个对象加进去,
      this.houseList.push(...res.data)
      this.currentPage++
    },
  },
})

export default useHomeStore
