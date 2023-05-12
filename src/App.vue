<template>
  <div id="app">
    <CreatePost />
    <!-- <EditPost /> -->
    <!-- <PostDetails /> -->
    <Post />
    <Home />
  </div>
</template>

<script>
import PostDetails from "./components/PostDetails.vue";
import Post from "./components/Post.vue";
import EditPost from "./components/EditPost.vue";
import CreatePost from "./components/CreatePost.vue";
import Home from "./components/Home.vue";

export default {
  name: "App",
  components: {
    Post,
    EditPost,
    PostDetails,
    CreatePost,
    Home,
  },
};
</script>
