<template>
  <div class="post">
    <h2 class="title">Post</h2>
    <h3 class="subtitle">Comments</h3>
    <ul>
      <li v-for="comment in comments" :key="comment.id" class="comment">
        <p class="comment-author">
          {{ comment.owner.firstName }} {{ comment.owner.lastName }}:
        </p>
        <p class="comment-message">{{ comment.message }}</p>
      </li>
    </ul>
    <h3 class="subtitle">Create Comment</h3>
    <textarea
      v-model="newComment"
      class="comment-input"
      rows="3"
      cols="30"
    ></textarea>
    <button @click="addComment" class="comment-button">Add Comment</button>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { fetchPosts } from "../../api";

export default {
  name: "PostDetails",
  setup() {
    const post = ref(null);
    const posts = ref(null);
    const comments = ref([]);
    const newComment = ref("");

    const fetchPostsData = async () => {
      try {
        posts.value = await fetchPosts();
      } catch (error) {
        console.error(error);
      }
    };

    const fetchComments = async () => {
      try {
        posts.value = await fetchPosts();
      } catch (error) {
        console.error(error);
      }
    };

    const addComment = async () => {
      try {
        const response = await fetch(
          `https://dummyapi.io/data/v1/post/${$route.params.id}/comment`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "app-id": "645e1fa135277554efa9d769",
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

    onMounted(() => {
      fetchPostsData();
      fetchComments();
    });

    return {
      post,
      comments,
      newComment,
      addComment,
    };
  },
};
</script>

<style>
.post {
  max-width: 400px;
  margin: 0 auto;
}
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.box {
  max-width: 400px;
  padding: 20px;
  background-color: #f5f5f5;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
}

.subtitle {
  font-size: 18px;
  margin-bottom: 10px;
}

.comment {
  margin-bottom: 10px;
}

.comment-author {
  font-weight: bold;
}

.comment-message {
  margin-left: 20px;
}

.comment-input {
  width: 100%;
  height: 80px;
  resize: vertical;
  margin-bottom: 10px;
  padding: 5px;
}

.comment-button {
  padding: 10px 20px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
}

.comment-button:hover {
  background-color: #45a049;
}
</style>
