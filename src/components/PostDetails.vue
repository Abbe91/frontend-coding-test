<template>
  <div>
    <h2>PostDetails</h2>
    <!-- <h2>{{ post.title }}</h2>
    <p>{{ post.publishDate }}</p>
    <p>By {{ post.owner.firstName }} {{ post.owner.lastName }}</p>
    <p>{{ post.text }}</p>
    <p>Tags: {{ post.tags.join(", ") }}</p>
    <h3>Comments</h3>
    <ul>
      <li v-for="comment in comments" :key="comment.id">
        <p>{{ comment.owner.firstName }} {{ comment.owner.lastName }}:</p>
        <p>{{ comment.message }}</p>
      </li>
    </ul>
    <h3>Create Comment</h3>
    <textarea v-model="newComment" rows="3" cols="30"></textarea>
    <button @click="addComment">Add Comment</button> -->
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
          `https://dummyapi.io/data/v1/post/${$route.params.id}/comment`,
          {
            headers: {
              "app-id": "645e1fa135277554efa9d769",
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
      fetchPost();
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
