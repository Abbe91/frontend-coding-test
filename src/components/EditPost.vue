<template>
  <div v-if="post" class="edit-post">
    <h2>Edit Post</h2>
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

<script>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

export default {
  name: "EditPost",
  setup() {
    const post = ref(null);
    const route = useRoute();
    const postId = route.params.id;

    const fetchPost = async () => {
      try {
        const response = await fetch(
          `https://dummyapi.io/data/v1/post/${postId}`,
          {
            headers: {
              "app-id": "6460e28743cff745b792ba3d",
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
        await fetch(`https://dummyapi.io/data/v1/post/${postId}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            "app-id": "6460e28743cff745b792ba3d",
          },
          body: JSON.stringify(post.value.text),
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
<style scoped>
.edit-post {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

h2 {
  font-size: 24px;
  margin-bottom: 20px;
}

.post-form {
  display: flex;
  flex-direction: column;
}

.form-group {
  margin-bottom: 20px;
}

.form-label {
  font-size: 18px;
  font-weight: bold;
}

.form-input,
.form-textarea {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.btn-submit {
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.btn-submit:hover {
  background-color: #0056b3;
}
</style>
