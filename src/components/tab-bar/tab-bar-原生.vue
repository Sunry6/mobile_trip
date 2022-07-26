<template>
  <div class="tab-bar">
    <div
      class="tab-bar-item"
      v-for="(item, index) in bannerData"
      :key="index"
      @click="itemClick(item.path, index)"
      :class="{ active: index === tabbarStore.currentIndex }"
    >
      <img v-if="index !== tabbarStore.currentIndex" :src="getAssetUrl(item.image)" alt="" />
      <img v-else :src="getAssetUrl(item.imageAcitve)" alt="" />
      <span class="text">{{ item.text }}</span>
    </div>
  </div>
</template>

<script setup>
import bannerData from '@/assets/data/tabbar'
import { getAssetUrl } from '@/utils/load_assets'
import { useRouter } from 'vue-router'
import { useTabbarStore } from '@/stores/modules/tabbar'

const router = useRouter()
const tabbarStore = useTabbarStore()

const itemClick = (path, index) => {
  router.push(path)
  tabbarStore.currentIndex = index
}
</script>

<style lang="less" scoped>
.tab-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50px;
  display: flex;

  border-top: 1px solid #ccc;

  .tab-bar-item {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
      width: 36px;
    }
    .text {
      font-size: 12px;
      margin-top: 2px;
    }
  }

  .tab-bar-item.active {
    color: var(--primary-color);
  }
}
</style>
