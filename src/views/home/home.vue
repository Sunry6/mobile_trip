<template>
  <div class="home">
    <!-- 导航标题 -->
    <home-nav-bar></home-nav-bar>
    <!-- 导航图片 -->
    <home-nav-img></home-nav-img>
    <!-- 导航搜索框 -->
    <home-search-box></home-search-box>
    <!-- 分类 -->
    <home-categories></home-categories>
    <!-- 滚动搜索栏 -->
    <div class="search-bar" v-if="isShowSearchBar">
      <search-bar />
    </div>
    <!-- 内容 -->
    <home-content></home-content>
  </div>
</template>

<script setup>
import homeNavBar from './cpns/home-nav-bar.vue'
import homeNavImg from './cpns/home-nav-img.vue'
import homeSearchBox from './cpns/home-search-box.vue'
import homeCategories from './cpns/home-categories.vue'
import homeContent from './cpns/home-content.vue'
// import searchBar from '@/components/search-bar/search-bar.vue'
import useHomeStore from '@/stores/modules/home'
import { watch, computed } from 'vue'
import useScroll from '@/hooks/useScroll'

// 一进入home页面,就发送网络请求,去请求需要home页面需要用到的全部数据
const homeStore = useHomeStore()
homeStore.fetchHotSuggestData()
homeStore.fetchCategoriesData()
homeStore.fetchHouseListData()

// 监听内容滚动刷新
const { isReachBottom, scrollTop } = useScroll()
watch(isReachBottom, newValue => {
  if (newValue) {
    homeStore.fetchHouseListData().then(() => {
      isReachBottom.value = false
    })
  }
})

// 根据滚动位置控制searchBar的显示
const isShowSearchBar = computed(() => {
  return scrollTop.value >= 360
})
</script>

<style lang="less" scoped>
.search-bar {
  position: fixed;
  z-index: 9;
  top: 0;
  left: 0;
  right: 0;
  height: 45px;
  padding: 16px 16px 10px;
  background-color: #fff;
}
</style>
