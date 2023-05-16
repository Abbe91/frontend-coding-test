<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="home" id="scroll-animate">
    <!-- Display the newly created post -->
    <div v-if="newPost" class="new-post">
      <h3>New Post:</h3>
      <p><strong>Title:</strong> {{ newPost.title }}</p>
      <p><strong>Image:</strong> {{ newPost.image }}</p>
      <p><strong>Text:</strong> {{ newPost.text }}</p>
    </div>
    <!-- Display the newly created post -->
    <h1>Latest Posts</h1>
    <ul>
      <li v-for="post in posts" :key="post.id" class="post-item">
        <div class="post-box" @click="togglePostDetails(post.id)">
          <img
            :src="post.owner ? post.owner.picture : ''"
            :alt="post.owner ? post.owner.firstName : ''"
            class="post-avatar"
          />
          <p class="post-name">
            {{
              post.owner ? post.owner.title + ", " + post.owner.firstName : ""
            }}
          </p>
          <p class="post-date">{{ formatDate(post.publishDate) }}</p>
          <h2>{{ post.title }}</h2>
          <transition name="fade">
            <div class="post-details" v-if="expandedPosts.includes(post.id)">
              <p class="post-date">{{ formatDate(post.publishDate) }}</p>
              <p class="post-name">{{ post.owner.title }}</p>

              <div class="post-info">
                <img
                  :src="post.owner.picture"
                  :alt="post.owner.firstName"
                  class="post-avatar"
                />
                <p class="post-creator">
                  By {{ post.owner.firstName }} {{ post.owner.lastName }}
                </p>
              </div>
              <p class="post-text">{{ post.text }}</p>
              <p class="post-tags" v-if="post.tags">
                Tags: {{ post.tags.join(", ") }}
              </p>
              <router-link :to="`/post/${post.id}`" class="view-details-button"
                >Write Comment</router-link
              >
            </div>
          </transition>
        </div>
      </li>
    </ul>
  </div>
</template>

<script src="./Home.js"></script>

<style src="./Home.css" scoped></style>
