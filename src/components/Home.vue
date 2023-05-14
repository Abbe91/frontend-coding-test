<template>
  <div class="home">
    <CreatePost @post-created="handlePostCreated" />
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

<script>
import CreatePost from "./CreatePost.vue";
import { ref, onMounted } from "vue";
import { fetchPosts } from "../../api";
import { useRouter } from "vue-router";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Home",
  components: {},
  setup() {
    const posts = ref([]);
    const expandedPosts = ref([]);
    const router = useRouter();
    const handlePostCreated = (post) => {
      // Add the new post to the list of posts
      posts.value.push(post);
    };

    const fetchPostsData = async () => {
      try {
        posts.value = await fetchPosts();
        posts.value.forEach((post) => {
          console.log("Owner Data:", post);
        });
      } catch (error) {
        console.error(error);
      }
    };
    const formatDate = (dateString) => {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(dateString).toLocaleDateString(undefined, options);
    };

    const togglePostDetails = (postId) => {
      if (expandedPosts.value.includes(postId)) {
        expandedPosts.value = expandedPosts.value.filter((id) => id !== postId);
      } else {
        expandedPosts.value.push(postId);
      }
    };

    const goToPostDetails = (postId) => {
      router.push(`/post/${postId}`);
    };

    onMounted(() => {
      fetchPostsData();
    });

    return {
      posts,
      expandedPosts,
      formatDate,
      togglePostDetails,
      goToPostDetails,
      handlePostCreated,
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
}

.post-box {
  cursor: pointer;
  padding: 20px;
  border-radius: 8px;
  background-color: #f0f4f8;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.post-box:hover {
  background-color: #e3e8eb;
}

.post-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
}

.post-name {
  font-size: 16px;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
}

.post-details {
  margin-top: 10px;
  padding-top: 10px;
  border-top: 1px solid #ccc;
}

.post-details h2 {
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
}

.post-date {
  color: #777;
  font-size: 14px;
  margin-bottom: 8px;
}

.post-info {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
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

.view-details-button {
  display: inline-block;
  padding: 8px 16px;
  background-color: #555;
  color: #fff;
  text-decoration: none;
  border-radius: 4px;
  margin-top: 10px;
}

.view-details-button:hover {
  background-color: #333;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
