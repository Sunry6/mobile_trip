<template>
  <div class="home-search-box bottom-gray-line">
    <!-- 选择城市和定位 -->
    <search-box-location />

    <!-- 选择入住时间和离店时间 -->
    <search-box-date />

    <!-- 人数/价格/关键字信息 -->
    <search-box-info />

    <!-- 热门推荐 -->
    <search-box-suggests />
  </div>
</template>

<script setup>
import searchBoxLocation from './search-box/search-box-location.vue'
import searchBoxDate from './search-box/search-box-date.vue'
import searchBoxInfo from './search-box/search-box-info.vue'
import searchBoxSuggests from './search-box/search-box-suggests.vue'
</script>

<style lang="less" scoped>
.home-search-box {
  --van-calendar-popup-height: 100%;
}
</style>
