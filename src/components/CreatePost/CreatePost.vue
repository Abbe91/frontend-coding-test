<template>
  <div class="create-post">
    <h2>Create Post</h2>
    <form @submit.prevent="createPost">
      <div>
        <label for="text">Text</label>
        <textarea id="text" v-model="newPost.text" required></textarea>
      </div>
      <div>
        <label for="likes">Likes</label>
        <input type="number" id="likes" v-model="newPost.likes" required />
      </div>
      <div>
        <label for="tags">Tags</label>
        <input
          type="text"
          id="tags"
          v-model="tagInput"
          @keyup.enter="addTag"
          placeholder="Enter a tag and press Enter"
        />
        <ul class="tag-list">
          <li v-for="(tag, index) in newPost.tags" :key="index">
            {{ tag }}
            <button class="tag-remove-btn" @click="removeTag(index)">X</button>
          </li>
        </ul>
      </div>
      <button type="submit">Create Post</button>
    </form>

    <div v-if="showNotification">
      <p>Post created successfully!</p>
      <p>Created Post ID: {{ createdPostId }}</p>
    </div>

    <div v-if="showNotificationFalse">
      <p>Failed to create post.</p>
    </div>
  </div>
</template>

<script src="./CreatPost.js"></script>

<style src="./CreatePost.css" scoped></style>
