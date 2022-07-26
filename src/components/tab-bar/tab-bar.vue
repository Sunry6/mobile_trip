<script setup>
import tabbarData from '@/assets/data/tabbar'
import { getAssetUrl } from '@/utils/load_assets'
import { ref } from 'vue'

const currentIndex = ref(0)
</script>

<template>
  <div class="tab-bar">
    <van-tabbar v-model="currentIndex" active-color="#ff9854">
      <template v-for="(item, index) in tabbarData">
        <van-tabbar-item :to="item.path">
          <template #default>
            <span>{{ item.text }}</span>
          </template>
          <template #icon>
            <img v-if="currentIndex !== index" :src="getAssetUrl(item.image)" alt="" />
            <img v-else :src="getAssetUrl(item.imageActive)" alt="" />
          </template>
        </van-tabbar-item>
      </template>
    </van-tabbar>
  </div>
</template>

<style lang="less" scoped></style>
