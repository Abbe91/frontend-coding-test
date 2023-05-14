import { createRouter, createWebHistory } from "vue-router";
import Home from "./components/Home.vue";
import PostDetails from "./components/PostDetails.vue";
import CreatePost from "./components/CreatePost.vue";
import PostEdit from "./components/EditPost.vue";

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
  {
    path: "/post/:id/edit",
    name: "EditPost",
    component: PostEdit,
  },
  {
    path: "/createpost",
    name: "CreatePost",
    component: CreatePost,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
