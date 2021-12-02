import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import search from "../views/search.vue";
import page3 from "../views/page3.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/search",
    name: "search",
    component: search,
  },
  {
    path: "/page3",
    name: "page3",
    component: page3,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
