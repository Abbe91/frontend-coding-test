<template>
  <div id="app">
    <!-- <CreatePost /> -->
    <Header></Header>
    <router-view class="router-view-container" />
  </div>
</template>

<script>
// import CreatePost from "./components/CreatePost/CreatePost.vue";
import Header from "./components/Header/Header.vue";
export default {
  name: "App",
  components: {
    Header,
    // CreatePost,
  },
};
</script>
<style>
/* .app-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 20px;
  background-color: #f5f5f5;
  height: 100vh;
}
.router-view-container {
  width: 100%;
  max-width: 800px;
  margin-top: 90px;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
} */
</style>
