<template>
  <div class="delete-post">
    <h2>Delete Post</h2>
    <div v-if="post" class="post-details">
      <h3>{{ post.title }}</h3>
      <p>{{ post.body }}</p>
      <button @click="deletePost">Delete</button>
    </div>
    <div v-else>
      <p>Loading post...</p>
    </div>
  </div>
</template>

<script src="./DeletePost.js"></script>

<style src="./DeletePost.css" scoped></style>
