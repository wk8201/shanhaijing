import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";

// 导入视图组件
const Home = () => import("@/views/Home.vue");

// 定义路由配置
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
];

// 创建路由实例
const router = createRouter({
  // 使用空字符串作为基础路径，让Vercel自动处理
  history: createWebHistory("/"),
  routes,
});

export default router;
