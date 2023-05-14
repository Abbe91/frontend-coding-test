import { createRouter, createWebHistory } from "vue-router";
import Home from "./components/Home.vue";
import PostDetails from "./components/PostDetails.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/post/:id",
    name: "PostDetails",
    component: PostDetails,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
