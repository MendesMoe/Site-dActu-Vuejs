import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import page2 from "../views/page2.vue";
import page3 from "../views/page3.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/page2",
    name: "page2",
    component: page2,
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
