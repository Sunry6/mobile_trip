<template>
  <div class="section search-btn">
    <div class="btn" @click="searchBtnClick">开始搜索</div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import useMainStore from '@/stores/modules/main'
import { storeToRefs } from 'pinia'

// 从store中取出时间数据
const mainStore = useMainStore()
const { startDate, endDate } = storeToRefs(mainStore)

const router = useRouter()
const searchBtnClick = () => {
  router.push({
    path: '/search',
    query: {
      startDate: startDate.value,
      endDate: endDate.value,
    },
  })
}
</script>

<style lang="less" scoped>
.section {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 0 20px;
  color: #999;
  height: 44px;

  .start {
    flex: 1;
    display: flex;
    height: 44px;
    align-items: center;
  }

  .end {
    min-width: 30%;
    padding-left: 20px;
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

.search-btn {
  .btn {
    width: 342px;
    height: 38px;
    max-height: 50px;
    font-weight: 500;
    font-size: 18px;
    line-height: 38px;
    text-align: center;
    border-radius: 20px;
    color: #fff;
    background-image: var(--theme-linear-gradient);
  }
}
</style>
