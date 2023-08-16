import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import Gaming from "../pages/Gaming.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: "ElementBuilds - Home",
    }
  },
  {
    path: "/gaming",
    name: "Gaming",
    component: Gaming,
    meta: {
      title: "ElementBuilds - Gaming PC's",
    }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title}`;
  next();
});

export default router;