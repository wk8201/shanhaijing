<template>
  <div class="home min-h-screen bg-white" id="pullRefreshContainer">
    <!-- 下拉加载提示区域 -->
    <div id="pullRefreshIndicator" style="height: 0; overflow: hidden; transition: height 0.3s ease;">
      <div class="pull-refresh-content" style="display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 10px 0;">
        <div id="refreshSpinner" class="spinner" style="width: 24px; height: 24px; border: 2px solid #f3f3f3; border-top: 2px solid #3498db; border-radius: 50%; animation: spin 1s linear infinite; margin-bottom: 8px;"></div>
        <div id="refreshText" style="font-size: 14px; color: #666;">下拉刷新</div>
      </div>
    </div>
    
    <!-- 轮播图组件 -->
    <Carousel />

    <!-- 自定义文本信息 -->
    <div class="glass-text-container py-6 px-4 mx-4 rounded-xl">
      <div class="glass-text text-center">菲菲你好呀，这是一个全新的网站我称它为山海经-荒原</div>
    </div>

    <!-- 页面内容区域 -->
    <div class="content-container px-6 py-8">
      <h1 class="text-2xl font-bold text-gray-800 mb-6">欢迎来到首页</h1>
      <p class="text-gray-600 mb-4">这是一个全新的首页，包含了响应式轮播图功能。</p>
      <p class="text-gray-600">轮播图宽度占满屏幕，高度为第一屏的30%，支持自动播放和手动控制。</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import Carousel from '../components/Carousel.vue';

// 下拉刷新相关状态
const isRefreshing = ref(false);
const touchStartY = ref(0);
const currentY = ref(0);
const pullDistance = ref(0);
const maxPullDistance = 80; // 最大下拉距离
const pullRefreshThreshold = 60; // 触发刷新的阈值

// 下拉刷新事件处理函数
const handleTouchStart = (e: TouchEvent) => {
  // 只有在页面顶部且不在刷新中才能触发下拉刷新
  if (window.scrollY === 0 && !isRefreshing.value && e.touches && e.touches.length > 0) {
    touchStartY.value = e.touches[0]?.clientY || 0;
    currentY.value = touchStartY.value;
  }
};

const handleTouchMove = (e: TouchEvent) => {
  if (touchStartY.value > 0 && !isRefreshing.value && e.touches && e.touches.length > 0) {
    currentY.value = e.touches[0]?.clientY || 0;
    pullDistance.value = currentY.value - touchStartY.value;
    
    // 只允许向下拉
    if (pullDistance.value > 0) {
      // 限制最大下拉距离
      const displayDistance = Math.min(pullDistance.value * 0.5, maxPullDistance);
      
      const indicator = document.getElementById('pullRefreshIndicator');
      const refreshText = document.getElementById('refreshText');
      
      if (indicator) {
        indicator.style.height = `${displayDistance}px`;
      }
      
      if (refreshText) {
        // 根据下拉距离改变提示文本
        if (displayDistance >= pullRefreshThreshold) {
          refreshText.textContent = '释放刷新';
        } else {
          refreshText.textContent = '下拉刷新';
        }
      }
      
      // 阻止默认滚动行为
      e.preventDefault();
    }
  }
};

const handleTouchEnd = () => {
  if (touchStartY.value > 0 && !isRefreshing.value) {
    const displayDistance = Math.min(pullDistance.value * 0.5, maxPullDistance);
    const indicator = document.getElementById('pullRefreshIndicator');
    const refreshText = document.getElementById('refreshText');
    
    if (displayDistance >= pullRefreshThreshold) {
      // 触发刷新
      isRefreshing.value = true;
      if (indicator) {
        indicator.style.height = '60px';
      }
      if (refreshText) {
        refreshText.textContent = '刷新中...';
      }
      
      // 模拟加载过程
      setTimeout(() => {
        isRefreshing.value = false;
        if (indicator) {
          indicator.style.height = '0';
        }
        if (refreshText) {
          refreshText.textContent = '下拉刷新';
        }
      }, 1500);
    } else {
      // 恢复原位
      if (indicator) {
        indicator.style.height = '0';
      }
    }
    
    // 重置状态
    touchStartY.value = 0;
    currentY.value = 0;
    pullDistance.value = 0;
  }
};

// 组件挂载时
onMounted(() => {
  // 添加触摸事件监听
  const container = document.getElementById('pullRefreshContainer');
  if (container) {
    container.addEventListener('touchstart', handleTouchStart, { passive: false });
    container.addEventListener('touchmove', handleTouchMove, { passive: false });
    container.addEventListener('touchend', handleTouchEnd);
  }
});

// 组件卸载时
onUnmounted(() => {
  // 移除事件监听
  const container = document.getElementById('pullRefreshContainer');
  if (container) {
    container.removeEventListener('touchstart', handleTouchStart);
    container.removeEventListener('touchmove', handleTouchMove);
    container.removeEventListener('touchend', handleTouchEnd);
  }
});
</script>

<style>
/* 全局样式重置 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* 旋转动画定义 */
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* 下拉加载指示器样式 */
#pullRefreshIndicator {
  background-color: #f8f8f8;
  border-bottom: 1px solid #eee;
}

.pull-refresh-content {
  transform-origin: center;
  transition: transform 0.3s ease;
}

/* 增加页面内容，使页面可以滚动 */
.content-container {
  min-height: 200vh; /* 确保页面有足够高度可以滚动 */
}

/* 毛玻璃效果文本容器样式 */
.glass-text-container {
  background: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 12px;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.18);
  margin: 10px;
}

.glass-text {
  font-size: 1.25rem;
  font-weight: 600;
  background: linear-gradient(135deg, #00bcd4, #4caf50);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  padding: 10px;
}

/* 移动端优化 */
@media (max-width: 768px) {
  #pullRefreshIndicator {
    background-color: #f5f5f5;
  }
  
  .pull-refresh-content {
    padding: 15px 0;
  }
  
  #refreshSpinner {
    width: 20px !important;
    height: 20px !important;
    margin-bottom: 6px !important;
  }
  
  #refreshText {
    font-size: 13px !important;
  }
  
  .glass-text {
    font-size: 1.1rem !important;
  }
}


</style>