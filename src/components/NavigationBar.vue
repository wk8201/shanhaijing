<template>
  <div class="navigation-bar fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-2 z-10">
    <div class="flex justify-around items-center">
      <router-link 
        to="/" 
        class="nav-item flex flex-col items-center" 
        active-class="active"
      >
        <div class="w-6 h-6 flex items-center justify-center mb-1">
          <svg viewBox="0 0 24 24" class="w-6 h-6" :class="{ 'text-blue-500': $route.path === '/' }">
            <path fill="currentColor" d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z" />
          </svg>
        </div>
        <span class="text-xs" :class="{ 'text-blue-500': $route.path === '/' }">首页</span>
      </router-link>

      <router-link 
        to="/feed" 
        class="nav-item flex flex-col items-center" 
        active-class="active"
      >
        <div class="w-6 h-6 flex items-center justify-center mb-1 relative">
          <svg viewBox="0 0 24 24" class="w-6 h-6" :class="{ 'text-blue-500': $route.path === '/feed' }">
            <path fill="currentColor" d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4C16.42,4 20,7.58 20,12C20,16.42 16.42,20 12,20C7.58,20 4,16.42 4,12C4,7.58 7.58,4 12,4M12,6A6,6 0 0,1 18,12A6,6 0 0,1 12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6M12,8A4,4 0 0,0 8,12A4,4 0 0,0 12,16A4,4 0 0,0 16,12A4,4 0 0,0 12,8M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10Z" />
          </svg>
        </div>
        <span class="text-xs" :class="{ 'text-blue-500': $route.path === '/feed' }">动态</span>
      </router-link>

      <router-link 
        to="/messages" 
        class="nav-item flex flex-col items-center" 
        active-class="active"
      >
        <div class="w-6 h-6 flex items-center justify-center mb-1 relative">
          <svg viewBox="0 0 24 24" class="w-6 h-6" :class="{ 'text-blue-500': $route.path === '/messages' }">
            <path fill="currentColor" d="M20,2H4A2,2 0 0,0 2,4V22L6,18H20A2,2 0 0,0 22,16V4C22,2.89 21.1,2 20,2Z" />
          </svg>
          <span v-if="showMessageBadge" class="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">3</span>
        </div>
        <span class="text-xs" :class="{ 'text-blue-500': $route.path === '/messages' }">消息</span>
      </router-link>

      <router-link 
        to="/profile" 
        class="nav-item flex flex-col items-center" 
        active-class="active"
      >
        <div class="w-6 h-6 flex items-center justify-center mb-1">
          <svg viewBox="0 0 24 24" class="w-6 h-6" :class="{ 'text-blue-500': $route.path === '/profile' }">
            <path fill="currentColor" d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z" />
          </svg>
        </div>
        <span class="text-xs" :class="{ 'text-blue-500': $route.path === '/profile' }">我的</span>
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// 显示消息徽章（模拟有未读消息）
const showMessageBadge = ref(true)
</script>

<style scoped>
.navigation-bar {
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.05);
}

.nav-item {
  width: 25%;
  padding: 4px 0;
  color: #666;
}

.nav-item.active {
  color: #3b82f6;
}
</style>