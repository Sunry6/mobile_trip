<template>
  <div class="search-box-info">
    <!-- 价格/人数选择 -->
    <div class="section price-counter bottom-gray-line">
      <div class="start">价格不限</div>
      <div class="end">人数不限</div>
    </div>
    <!-- 关键字 -->
    <div class="section keyword bottom-gray-line">关键字/位置/民宿名</div>
  </div>
</template>

<script setup></script>

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

.price-counter {
  .start {
    border-right: 1px solid var(--line-color);
  }
}
</style>
