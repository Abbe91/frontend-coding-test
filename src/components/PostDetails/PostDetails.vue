<template>
  <div class="post-details" v-if="post">
    <h2>{{ post.title }}</h2>
    <p class="publish-date">{{ formatDate(post.publishDate) }}</p>
    <div class="owner-info">
      <img :src="post.owner.picture" class="owner-avatar" />
      <p class="owner-name">
        By {{ post.owner.firstName }} {{ post.owner.lastName }}
      </p>
    </div>
    <p class="post-text">{{ post.text }}</p>
    <p class="post-tags" v-if="post.tags">Tags: {{ post.tags.join(", ") }}</p>
    <p class="post-text">Like/S : {{ post.likes }}</p>

    <h3>Comments</h3>
    <ul>
      <li v-for="comment in comments" :key="comment.id" class="comment">
        <p class="comment-author">
          {{ comment.firstName }} {{ comment.lastName }}
        </p>
        <p class="comment-message">{{ comment.message }}</p>
      </li>
    </ul>

    <h3>Create Comment</h3>
    <textarea
      v-model="newComment"
      class="comment-input"
      rows="3"
      cols="30"
    ></textarea>
    <button @click="deletePost" class="delete-button">Delete Post</button>
    <button @click="addComment" class="comment-button">Add Comment</button>
  </div>
</template>

<script src="./PostDetails.js"></script>

<style src="./PostDetails.css" scoped></style>
