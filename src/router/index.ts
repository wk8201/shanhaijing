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
  // 使用相对路径以支持GitHub Pages部署
  history: createWebHistory(process.env.BASE_URL || "/"),
  routes,
});

export default router;
