import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { appID } from "../ApiConnection/api";

export default {
  name: "DeletePost",
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
              "app-id": appID,
            },
          }
        );
        const data = await response.json();
        post.value = data;
      } catch (error) {
        console.error(error);
      }
    };

    const deletePost = async () => {
      try {
        await fetch(`https://dummyapi.io/data/v1/post/${postId}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            "app-id": appID,
          },
        });
        // Handle success or redirect to appropriate page
        router.push("/posts");
      } catch (error) {
        console.error(error);
      }
    };

    onMounted(() => {
      fetchPost();
    });

    return {
      post,
      deletePost,
    };
  },
};
