<template>
  <div class="home">
    <h2>Posts</h2>
    <ul>
      <li v-for="post in posts" :key="post.id" class="post-item">
        <router-link :to="`/${post.id}`" class="post-title">{{
          post.owner.title
        }}</router-link>

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
      </li>
    </ul>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { fetchPosts } from "../../api";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Home",
  setup() {
    const posts = ref([]);
    const fetchPostsData = async () => {
      try {
        posts.value = await fetchPosts();
      } catch (error) {
        console.error("Failed to fetch posts:", error);
      }
    };

    onMounted(() => {
      fetchPostsData();
    });

    const formatDate = (dateString) => {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(dateString).toLocaleDateString(undefined, options);
    };

    return {
      posts,
      formatDate,
    };
  },
};
</script>

<style scoped>
.home {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.post-item {
  margin-bottom: 20px;
  padding: 20px;
  border-radius: 8px;
  background-color: #f0f4f8;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.post-title {
  font-size: 24px;
  font-weight: bold;
  color: #333;
  text-decoration: none;
  margin-bottom: 10px;
}

.publish-date {
  color: #777;
  font-size: 14px;
  margin-bottom: 8px;
}

.owner-info {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.owner-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
}

.owner-name {
  font-size: 16px;
  font-weight: bold;
  color: #333;
}

.post-text {
  font-size: 16px;
  color: #555;
  margin-bottom: 10px;
}

.post-tags {
  font-size: 14px;
  color: #777;
}

ul {
  list-style-type: none;
  padding: 0;
}
</style>
