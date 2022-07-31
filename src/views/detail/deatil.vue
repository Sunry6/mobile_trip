<template>
  <div class="detail top-page" ref="detailRef">
    <!-- 顶部导航条 -->
    <van-nav-bar title="房屋详情" left-text="旅途" left-arrow @click-left="onClickLeft" />

    <!-- tab选项卡 -->
    <div class="tabs">
      <tab-control
        v-if="showTabs"
        :titles="['描述', '设施', '房东', '评论', '须知', '周边']"
        @item-click="tabItemClick"
      />
    </div>

    <!-- 主要内容 -->
    <div class="main" v-if="infos.mainPart" v-memo="[infos.mainPart]">
      <!-- 轮播图 -->
      <detail-swiper :swiper-data="infos.mainPart.topModule.housePicture.housePics" />

      <!-- 内容信息 -->
      <detail-infos :ref="getContentRef" :top-module="infos.mainPart.topModule" />

      <!-- 房屋设施 -->
      <detail-facility
        :ref="getContentRef"
        :house-facility="infos.mainPart.dynamicModule.facilityModule.houseFacility"
      />

      <!-- 房东 -->
      <detail-landlord
        :ref="getContentRef"
        :landlord="infos.mainPart.dynamicModule.landlordModule"
      />

      <!-- 评论 -->
      <detail-comment :ref="getContentRef" :comment="infos.mainPart.dynamicModule.commentModule" />

      <!-- 预定须知 -->
      <detail-notice
        :ref="getContentRef"
        :order-rules="infos.mainPart.dynamicModule.rulesModule.orderRules"
      />

      <!-- 地图 -->
      <detail-map :ref="getContentRef" :position="infos.mainPart.dynamicModule.positionModule" />

      <!-- 价格说明 -->
      <detail-intro :intro="infos.mainPart.introductionModule" />
    </div>

    <!-- 底部 -->
    <div class="footer">
      <img src="@/assets/img/detail/icon_ensure.png" alt="" />
      <div class="text">Mobile Trip</div>
    </div>

    <!-- 交互功能 -->
    <detail-action-bar :current-house="infos.currentHouse" />
  </div>
</template>

<script setup>
import detailSwiper from './cpns/detail-swiper.vue'
import detailInfos from './cpns/detail-infos.vue'
import detailFacility from './cpns/detail-facility.vue'
import detailLandlord from './cpns/detail-landlord.vue'
import detailComment from './cpns/detail-comment.vue'
import detailNotice from './cpns/detail-notice.vue'
import detailMap from './cpns/detail-map.vue'
import detailIntro from './cpns/detail-intro.vue'
import detailActionBar from './cpns/detail-action-bar.vue'

import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import useScroll from '../../hooks/useScroll'
import { getDetailInfos } from '@/services/modules/detail'
import { useRouter } from 'vue-router'

// 返回首页
const router = useRouter()
const onClickLeft = () => {
  router.push('/home')
}

// 轮播图页面:获取houseID,通过houseID拿到商品对应的数据
const route = useRoute()
const houseId = route.params.id
// 拿到详情页面需要用到的数据
const infos = ref({})
getDetailInfos(houseId).then(res => {
  infos.value = res.data
})

// 内容
const contentEls = []
const getContentRef = el => {
  if (el) contentEls.push(el.$el)
}

// 通过监听滚动高度, 去控制tab选项卡的显示/隐藏
const detailRef = ref()
const { scrollTop } = useScroll(detailRef)
const showTabs = computed(() => {
  return scrollTop.value >= 300
})

// tab选项卡点击切换
const tabItemClick = index => {
  detailRef.value.scrollTo({
    top: contentEls[index].offsetTop - 40,
    behavior: 'smooth',
  })
}
</script>

<style lang="less" scoped>
.detail {
  position: relative;
  z-index: 9;
  height: 100vh;
  padding-bottom: 60px;
  background-color: #fff;
  overflow-y: auto;

  &:deep(.van-nav-bar__left) {
    font-size: 16px;
    font-weight: 600;
  }
}

.tabs {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 40px;
}

.footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 120px;

  img {
    width: 123px;
  }

  .text {
    margin-top: 12px;
    font-size: 12px;
    color: #7688a7;
  }
}
</style>
