<template>
  <div class="create-post">
    <h2>Create Post</h2>
    <form @submit.prevent="createPost" class="post-form">
      <div class="form-group">
        <label for="title">Title</label>
        <input type="text" id="title" v-model="newPost.title" required />
      </div>

      <div class="form-group">
        <label for="image">Image</label>
        <input
          type="file"
          id="image"
          accept="image/*"
          @change="onImageChange"
        />
      </div>

      <div class="form-group">
        <label for="text">Text</label>
        <textarea
          id="text"
          v-model="newPost.text"
          required
          rows="4"
          cols="30"
        ></textarea>
      </div>

      <button type="submit" class="submit-button">Create Post</button>
    </form>

    <div v-for="post in posts" :key="post.id" class="created-post">
      <h3>Created Post</h3>
      <p><strong>Title:</strong> {{ post.title }}</p>
      <img :src="post.image" alt="Created Post Image" />
      <p><strong>Text:</strong> {{ post.text }}</p>
    </div>
  </div>
</template>

<script src="./CreatPost.js"></script>

<style src="./CreatePost.css" scoped></style>
