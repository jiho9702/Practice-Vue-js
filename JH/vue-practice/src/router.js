import { createWebHistory, createRouter } from "vue-router"
import Detail from "./components/Detail.vue"
import Home from "./components/Home.vue"

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/detail",
    component: Detail,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;