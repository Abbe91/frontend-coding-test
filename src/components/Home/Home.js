import { ref, onMounted } from "vue";
import { fetchPosts } from "../ApiConnection/api";
import { useRouter } from "vue-router";
export const newPost = ref(null);
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
