import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";

export default {
  name: "EditPost",
  setup() {
    const post = ref(null);
    const route = useRoute();
    const router = useRouter();
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
          body: JSON.stringify(post.value),
        });
        // Handle success or redirect to post details page
        router.push(`/post/${postId}`);
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
