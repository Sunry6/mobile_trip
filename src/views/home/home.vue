<template>
  <div class="home">
    <!-- 导航标题 -->
    <home-nav-bar></home-nav-bar>
    <!-- 导航图片 -->
    <home-nav-img></home-nav-img>
    <!-- 导航搜索框 -->
    <home-search-box></home-search-box>
  </div>
</template>

<script setup>
import HomeNavBar from './cpns/home-nav-bar.vue'
import HomeNavImg from './cpns/home-nav-img.vue'
import HomeSearchBox from './cpns/home-search-box.vue'
</script>

<style lang="less" scoped></style>
