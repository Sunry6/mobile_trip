import { onMounted, onUnmounted, ref } from 'vue'
import { throttle } from 'underscore'

export default function useScroll() {
  const isReachBottom = ref(false)

  const clientHeight = ref(0)
  const scrollTop = ref(0)
  const scrollHeight = ref(0)

  // 监听屏幕滚动,并添加节流功能
  const scrollListenerHandler = throttle(() => {
    clientHeight.value = document.documentElement.clientHeight
    scrollTop.value = document.documentElement.scrollTop
    scrollHeight.value = document.documentElement.scrollHeight
    if (clientHeight.value + scrollTop.value >= scrollHeight.value) {
      isReachBottom.value = true
    }
  }, 100)

  // 在组件挂载后监听滚动事件
  onMounted(() => {
    window.addEventListener('scroll', scrollListenerHandler)
  })

  // 在组件卸载后取消监听滚动事件
  onUnmounted(() => {
    window.removeEventListener('scroll', scrollListenerHandler)
  })

  return { isReachBottom, clientHeight, scrollTop, scrollHeight }
}
