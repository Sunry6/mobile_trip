<template>
  <div class="city-group">
    <van-index-bar :sticky="false" :index-list="indexList">
      <!-- 热门城市 -->
      <van-index-anchor index="热门" />
      <div class="list">
        <template v-for="(city, index) in groupData.hotCities">
          <div class="city" @click="cityClick(city)">{{ city.cityName }}</div>
        </template>
      </div>
      <!-- 所有城市 -->
      <template v-for="(group, index) in groupData.cities" :key="index">
        <van-index-anchor :index="group.group" />
        <template v-for="(city, indey) in group.cities" :key="indey">
          <van-cell :title="city.cityName" @click="cityClick(city)" />
        </template>
      </template>
    </van-index-bar>
  </div>
</template>

<script setup>
import { computed } from '@vue/reactivity'
import { useRouter } from 'vue-router'
import useCityStore from '@/stores/modules/city'

// 拿到父组件传过来的city数据
const props = defineProps({
  groupData: {
    type: Object,
    default: () => ({}),
  },
})

/**
 * 动态索引
 */
const indexList = computed(() => {
  const list = props.groupData.cities.map(item => item.group)
  list.unshift('#')
  return list
})

const cityStore = useCityStore()

const router = useRouter()
const cityClick = city => {
  cityStore.currentCity = city
  router.back()
}
</script>

<style lang="less" scoped>
.list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 10px;
  padding-right: 20px;

  .city {
    width: 70px;
    height: 28px;
    border-radius: 14px;
    font-size: 12px;
    color: #000;
    text-align: center;
    line-height: 28px;
    background-color: #fff4ec;
    margin: 6px 0;
  }
}
</style>
