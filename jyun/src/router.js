import { createWebHistory, createRouter } from "vue-router";
import MemoList from './components/MemoList';
import MemoDetail from './components/MemoDetail';

const routes = [
  {
    path: "/",
    component: MemoList,
  },
  {
    path:"/detail",
    component: MemoDetail,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 