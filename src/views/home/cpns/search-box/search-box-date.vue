<template>
  <div class="search-box-date">
    <div class="section date-range bottom-gray-line" @click="showCalendar = true">
      <div class="start">
        <div class="date">
          <span class="tip">入住</span>
          <span class="time">{{ startDate }}</span>
        </div>
      </div>
      <div class="stay">共{{ stayCount }}晚</div>
      <div class="end">
        <div class="date">
          <span class="tip">离店</span>
          <span class="time">{{ endDate }}</span>
        </div>
      </div>
    </div>
    <van-calendar v-model:show="showCalendar" type="range" color="#ff9854" @confirm="onConfirm" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import searchBoxLocation from './search-box-location.vue'
import { formatMonthDay, getDiffDays } from '@/utils/format_date'

// 获取当前日期
const nowDate = new Date()
const newDate = new Date()
// 默认将入住日期和离店日期的间隔设置为1天
newDate.setDate(nowDate.getDate() + 1)

// 入住时间
const startDate = ref(formatMonthDay(nowDate))
// 离店时间
const endDate = ref(formatMonthDay(newDate))
// 入住时长
const stayCount = ref(getDiffDays(nowDate, newDate))

// 控制日期框弹出,默认为false
const showCalendar = ref(false)

/**
 * 选择入住和离店时间后,监听确定或取消按钮
 * value: 日历组件有一个回调参数, 这个参数的类型为 Date | Date[], value是一个数组,里面包含2个日期,一个入住日期,一个离店日期
 */
const onConfirm = value => {
  // 从回调参数中拿到入住时间
  const selectStartDate = value[0]
  // 从回调参数中拿到离店时间
  const selectEndDate = value[1]
  // 给入住时间进行格式化
  startDate.value = formatMonthDay(selectStartDate)
  // 给离店时间进行格式化
  endDate.value = formatMonthDay(selectEndDate)
  // 计算入住时长
  stayCount.value = getDiffDays(selectStartDate, selectEndDate)
  // 完成上面操作后,隐藏日历
  showCalendar.value = false
}
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

.date-range {
  height: 45px;
  --van-calendar-popup-height: 100% !important;

  .stay {
    flex: 1;
    text-align: center;
    font-size: 12px;
    color: #666;
  }
}
</style>
