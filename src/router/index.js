import { createRouter, createWebHashHistory } from "vue-router";

import HomeView from "@/views/HomeView.vue";
import PressView from "@/views/PressView.vue";
import CategoryView from "@/views/CategoryView.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },

  {
    // path: "/press/info/:name",
    path: "/press/info/",
    name: "PressInfo",
    component: PressView,
  },
  {
    path: "/category/:name",
    name: "CategoryRanking",
    component: CategoryView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
