<template>
  <div class="home-nav-bar">
    <div class="title">Mobile Trip</div>
  </div>
</template>

<script setup></script>

<style lang="less" scoped>
.home-nav-bar {
  display: flex;
  // 水平居中
  justify-content: center;
  // 垂直居中
  align-items: center;
  height: 46px;
  border: 1px solid #f2f2f2;

  .title {
    color: var(--primary-color);
    font-size: 16px;
    font-weight: 600;
  }
}
</style>
