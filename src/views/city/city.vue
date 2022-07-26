<template>
  <div class="city">
    <!-- 顶部搜索框 -->
    <div class="top">
      <!-- 搜索框 -->
      <van-search show-action shape="round" placeholder="城市/区域/位置" @cancel="onCancel" />
      <!-- 国内外城市的tab切换 -->
      <van-tabs v-model:active="tabActive" color="#ff9854">
        <template v-for="(value, key, index) in allCities" :key="key">
          <van-tab :title="value.title" :name="key"></van-tab>
        </template>
      </van-tabs>
    </div>

    <!-- 城市具体内容 -->
    <div class="content">
      <template v-for="(value, key, index) in allCities" :key="key">
        <city-group v-show="tabActive === key" :group-data="value"></city-group>
      </template>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import useCityStore from '@/stores/modules/city'
import CityGroup from './cpns/city-group.vue'

// 创建路由
const router = useRouter()
// 搜索框返回功能
const onCancel = () => {
  // 利用路由跳转
  router.back()
}

// tab切换国内外城市
const tabActive = ref()

// 从store中获取city页面需要的数据
const cityStore = useCityStore()
cityStore.fetchAllCitiesData()
const { allCities } = storeToRefs(cityStore)
</script>

<style lang="less" scoped>
.content {
  // 重写index bar侧边栏颜色的样式
  --van-index-bar-index-active-color: var(--primary-color);
}
</style>
