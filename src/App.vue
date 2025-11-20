<template>
  <div class="min-h-screen">
    <!-- 主内容区域，由路由视图控制 -->
    <main>
      <router-view />
    </main>
  </div>
</template>

<style>
/* 全局样式重置 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #f9fafb;
}

/* 防止路由视图切换时的闪烁 */
.router-view-enter-active,
.router-view-leave-active {
  transition: opacity 0.2s ease;
}

.router-view-enter-from,
.router-view-leave-to {
  opacity: 0;
}
</style>
