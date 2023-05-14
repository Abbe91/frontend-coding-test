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
    <button @click="addComment" class="comment-button">Add Comment</button>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

export default {
  name: "PostDetails",
  props: {
    postId: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const post = ref(null);
    const comments = ref([]);
    const newComment = ref("");
    const route = useRoute();
    const postId = route.params.id;

    const fetchPost = async () => {
      try {
        console.log("postId:", postId);

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

    const addComment = () => {
      const comment = {
        firstName: "Abdullah",
        lastName: "Abu-alhaijja",
        message: newComment.value,
      };
      comments.value.push(comment);
      newComment.value = "";
    };

    const formatDate = (dateString) => {
      if (!dateString || dateString === "Invalid Date") {
        return "Unknown";
      }

      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(dateString).toLocaleDateString(undefined, options);
    };

    onMounted(() => {
      fetchPost();
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

<style scoped>
.post-details {
  margin: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  background-color: #f9f9f9;
}

.owner-avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
}

.post-tags {
  font-style: italic;
}

.comment {
  margin-bottom: 10px;
}

.comment-author {
  font-weight: bold;
}

.comment-input {
  width: 100%;
  resize: vertical;
}

.comment-button {
  margin-top: 10px;
}
</style>
