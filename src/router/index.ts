import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import User from "../views/User.vue";

// https://next.router.vuejs.org/guide/essentials/passing-props.html#passing-props-to-route-components
// https://next.router.vuejs.org/guide/migration/#new-history-option-to-replace-mode

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/user/:name",
    name: "User",
    component: User,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
