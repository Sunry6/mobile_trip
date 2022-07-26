/**
 * city页面的状态管理文件
 * (数据,数据处理,网络请求)
 */

import { getCityAllData } from '@/services'
import { defineStore } from 'pinia'

const useCityStore = defineStore('city', {
  state: () => ({
    allCities: {},

    currentCity: {
      cityName: '广州',
    },
  }),

  actions: {
    async fetchAllCitiesData() {
      const res = await getCityAllData()
      this.allCities = res.data
    },
  },
})

export default useCityStore
