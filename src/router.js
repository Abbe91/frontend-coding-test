import { createRouter, createWebHistory } from "vue-router";
import Home from "./components/Home/Home.vue";
import PostDetails from "./components/PostDetails/PostDetails.vue";
import CreatePost from "./components/CreatePost/CreatePost.vue";
import PostEdit from "./components/EditPost/EditPost.vue";
import CreateUser from "./components/CreateUser/CreateUser.vue";
import DeletePost from "./components/DeletePost/DeletePost.vue";

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
    path: "/create",
    name: "CreatePost",
    component: CreatePost,
  },
  {
    path: "/createuser",
    name: "CreateUser",
    component: CreateUser,
  },
  {
    path: "/deletepost",
    name: "DeletePost",
    component: DeletePost,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
