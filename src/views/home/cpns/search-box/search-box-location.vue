<template>
  <div class="search-box-loaction bottom-gray-line">
    <!-- 选择城市 -->
    <div class="city" @click="cityClick">{{ currentCity.cityName }}</div>
    <!-- 获取定位信息 -->
    <div class="position" @click="positionClick">
      <span class="text">我的位置</span>
      <img src="@/assets/img/home/icon_location.png" alt="" />
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import useCityStore from '@/stores/modules/city'
import { storeToRefs } from 'pinia'

/**
 * 跳转到选择城市界面
 */
const router = useRouter()
const cityClick = () => {
  router.push('/city')
}

/**
 * 获取当前位置
 */
const positionClick = () => {
  navigator.geolocation.getCurrentPosition(
    res => {
      console.log('位置获取成功', res)
    },
    err => {
      console.log('位置获取失败', err)
    }
  )
}

/**
 * 通过store动态显示当前城市
 */
const cityStore = useCityStore()
const { currentCity } = storeToRefs(cityStore)
</script>

<style lang="less" scoped>
.search-box-loaction {
  display: flex;
  align-items: center;
  height: 46px;
  padding: 0 20px;

  .city {
    flex: 1;
    font-size: 15px;
    color: #333;
  }

  .position {
    width: 74px;
    display: flex;
    align-items: center;

    .text {
      position: relative;
      top: 1px;
      font-size: 12px;
      color: #666;
    }

    img {
      margin-left: 5px;
      width: 18px;
      height: 18px;
    }
  }
}
</style>
