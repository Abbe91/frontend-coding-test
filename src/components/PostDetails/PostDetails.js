import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { appId } from "../ApiConnection/api";
export default {
  name: "PostDetails",
  props: {
    postId: {
      type: String,
      required: true,
    },
  },
  setup() {
    const post = ref(null);
    const comments = ref([]);
    const newComment = ref("");
    const route = useRoute();
    const router = useRouter();
    const postId = route.params.id;
    const fetchPost = async () => {
      try {
        console.log("postId:", postId);

        const response = await fetch(
          `https://dummyapi.io/data/v1/post/${postId}`,
          {
            headers: {
              "app-id": appId,
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
            "app-id": appId,
          },
        });
        // Handle success or redirect to appropriate page

        router.push(`/`);
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
      deletePost,
      showNotification,
      showNotificationFalse,
    };
  },
};
