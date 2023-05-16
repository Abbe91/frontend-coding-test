<template>
  <div v-if="post" class="edit-post">
    <h2>Edit Post</h2>
    <p>
      Please make sure you have the right id in the url to be sure your action
      is correct:
    </p>
    <form @submit.prevent="updatePost" class="post-form">
      <div class="form-group">
        <label for="title" class="form-label">Title</label>
        <input
          type="text"
          id="title"
          v-model="post.title"
          required
          class="form-input"
        />
      </div>
      <div class="form-group">
        <label for="text" class="form-label">Content</label>
        <textarea
          id="text"
          v-model="post.text"
          required
          class="form-textarea"
        ></textarea>
      </div>
      <button type="submit" class="btn-submit">Update</button>
    </form>
  </div>
</template>

<script src="./EditPost.js"></script>

<style src="./EditPost.css" scoped></style>
