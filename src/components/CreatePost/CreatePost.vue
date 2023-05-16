<template>
  <div class="create-post">
    <h2>Create Post</h2>

    <label for="title">Title</label>
    <input type="text" id="title" v-model="newPost.title" required />

    <label for="text">Text</label>
    <textarea id="text" v-model="newPost.text" required></textarea>

    <label for="image">Image URL</label>
    <input type="text" id="image" v-model="newPost.image" required />

    <label for="tags">Tags (separated by commas)</label>
    <input type="text" id="tags" v-model="tagInput" @keydown.enter="addTag" />
    <div class="tags-container">
      <div v-for="(tag, index) in newPost.tags" :key="index" class="tag">
        {{ tag }}
        <span class="tag-remove" @click="removeTag(index)">x</span>
      </div>
    </div>

    <button @click="createPost">Create Post</button>
  </div>
</template>

<script src="./CreatPost.js"></script>

<style src="./CreatePost.css" scoped></style>
