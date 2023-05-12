<template>
  <div>
    <h2>Edit Post</h2>
    <!-- <form @submit.prevent="updatePost">
      <label for="title">Title</label>
      <input type="text" id="title" v-model="post.title" required />
      <label for="text">Content</label>
      <textarea id="text" v-model="post.text" required></textarea>
      <button type="submit">Update</button>
    </form> -->
  </div>
</template>

<script>
import { ref, onMounted } from "vue";

export default {
  name: "EditPost",
  setup() {
    const post = ref(null);

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

    const updatePost = async () => {
      try {
        await fetch(`https://dummyapi.io/data/v1/post/${$route.params.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            "app-id": "645e1fa135277554efa9d769",
          },
          body: JSON.stringify(post.value),
        });
        // Handle success or redirect to post details page
      } catch (error) {
        console.error(error);
      }
    };

    onMounted(() => {
      fetchPost();
    });

    return {
      post,
      updatePost,
    };
  },
};
</script>
