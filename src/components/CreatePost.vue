<template>
  <div class="create-post">
    <h2>Create Post</h2>
    <form @submit.prevent="createPost" class="post-form">
      <div class="form-group">
        <label for="title">Title</label>
        <input type="text" id="title" v-model="newPost.title" required />
      </div>

      <div class="form-group">
        <label for="image">Image</label>
        <input
          type="file"
          id="image"
          accept="image/*"
          @change="onImageChange"
        />
      </div>

      <div class="form-group">
        <label for="text">Text</label>
        <textarea
          id="text"
          v-model="newPost.text"
          required
          rows="4"
          cols="30"
        ></textarea>
      </div>

      <button type="submit" class="submit-button">Create Post</button>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "CreatePost",
  setup() {
    const newPost = ref({
      title: "",
      image: null,
      text: "",
    });

    return {
      newPost,
    };
  },
};
</script>

<style scoped>
.create-post {
  max-width: 400px;
  margin: 0 auto;
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

label {
  font-weight: bold;
  margin-bottom: 5px;
}

input[type="text"],
textarea {
  width: 100%;
  padding: 10px;
  font-size: 16px;
}

.submit-button {
  padding: 10px 20px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
}

.submit-button:hover {
  background-color: #45a049;
}
</style>
