import { createRouter, createWebHistory } from "vue-router";
import Shop from "../views/shop.vue";
import Home from "../views/Home.vue";
import Detail from "../views/Detail.vue";
import Cart from "../views/Cart.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/shopping",
      name: "shop",
      component: Shop,
    },
    {
      path: "/detail/:id",
      name: "detail",
      component: Detail,
    },
    {
      path: "/cart",
      name: "cart",
      component: Cart,
    },
  ],
});

export default router;
