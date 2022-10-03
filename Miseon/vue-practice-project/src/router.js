import { createWebHistory, createRouter } from "vue-router";
import Main from './components/Main.vue';
import Content from './components/Content.vue';

const routes = [
  {
    path: "/",
    component: Main,
  },
  {
    path: "/detail",
    component: Content,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 