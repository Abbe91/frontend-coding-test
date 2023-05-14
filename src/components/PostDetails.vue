<template>
  <div class="post-details">
    <!-- <h2>{{ post.title }}</h2>
    <p class="publish-date">{{ formatDate(post.publishDate) }}</p>
    <div class="owner-info">
      <img
        :src="post.owner.picture"
        :alt="post.owner.firstName"
        class="owner-avatar"
      />
      <p class="owner-name">
        By {{ post.owner.firstName }} {{ post.owner.lastName }}
      </p>
    </div>
    <p class="post-text">{{ post.text }}</p>
    <p class="post-tags">Tags: {{ post.tags.join(", ") }}</p>

    <h3>Comments</h3>
    <ul>
      <li v-for="comment in comments" :key="comment.id" class="comment">
        <p class="comment-author">
          {{ comment.owner.firstName }} {{ comment.owner.lastName }}:
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
    <button @click="addComment" class="comment-button">Add Comment</button> -->
  </div>
</template>

<script>
import { ref, onMounted } from "vue";

export default {
  name: "PostDetails",
  setup() {
    const post = ref(null);
    const comments = ref([]);
    const newComment = ref("");

    const fetchPost = async () => {
      try {
        const response = await fetch(
          `https://dummyapi.io/data/v1/post/${$route.params.id}`,
          {
            headers: {
              "app-id": "645e1fa135277554efa9d769",
            },
          }
        );
        const data = await response.json();
        post.value = data;
      } catch (error) {
        console.error(error);
      }
    };

    const fetchComments = async () => {
      try {
        const response = await fetch(
          `https://dummyapi.io/data/v1/post/${props.postId}/comment`,
          {
            headers: {
              "app-id": "6460e28743cff745b792ba3d",
            },
          }
        );
        const data = await response.json();
        comments.value = data.data;
      } catch (error) {
        console.error(error);
      }
    };

    const addComment = async () => {
      try {
        const response = await fetch(
          `https://dummyapi.io/data/v1/post/${props.postId}/comment`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "app-id": "6460e28743cff745b792ba3d",
            },
            body: JSON.stringify({
              message: newComment.value,
            }),
          }
        );
        const data = await response.json();
        comments.value.push(data);
        newComment.value = "";
      } catch (error) {
        console.error(error);
      }
    };
    const formatDate = (dateString) => {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(dateString).toLocaleDateString(undefined, options);
    };

    onMounted(() => {
      fetchPost();
      fetchComments();
    });

    return {
      post,
      comments,
      newComment,
      addComment,
      formatDate,
    };
  },
};
</script>
