<template>
  <div class="search-box-suggests">
    <div class="section hot-suggests">
      <template v-for="(item, index) in hotSuggests" :key="index">
        <div
          class="item"
          :style="{ color: item.tagText.color, background: item.tagText.background.color }"
        >
          {{ item.tagText.text }}
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
import useHomeStore from '@/stores/modules/home'
import { storeToRefs } from 'pinia'

// 获取热门推荐的数据
const homeStore = useHomeStore()
const { hotSuggests } = storeToRefs(homeStore)
</script>

<style lang="less" scoped>
.section {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 0 20px;
  color: #999;
  height: 45px;

  .start {
    flex: 1;
    display: flex;
    height: 45px;
    align-items: center;
  }

  .end {
    min-width: 22%;
    padding-left: 30px;
  }

  .date {
    display: flex;
    flex-direction: column;

    .tip {
      font-size: 12px;
      color: #999;
    }

    .time {
      margin-top: 3px;
      color: #333;
      font-size: 15px;
      font-weight: 500;
    }
  }
}

.hot-suggests {
  margin: 10px 0;
  // 自适应高度,把内容都显示出来
  height: auto;

  .item {
    padding: 4px 8px;
    margin: 4px;
    border-radius: 14px;
    font-size: 12px;
    line-height: 1;
  }
}
</style>
