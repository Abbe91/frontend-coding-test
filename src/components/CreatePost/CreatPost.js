import { ref } from "vue";
import { appId } from "../ApiConnection/api";
export default {
  name: "CreatePost",
  setup() {
    const newPost = ref({
      title: "",
      image: null,
      text: "",
    });
    const posts = ref([]);
    const createPost = async () => {
      try {
        const userId = "64623489927aeb277b70ac29";
        const response = await fetch(
          "https://dummyapi.io/data/v1/post/create",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "app-id": appId,
            },
            body: JSON.stringify({
              owner: userId,
              post: {
                title: newPost.value.title,
                image: newPost.value.image,
                text: newPost.value.text,
              },
            }),
          }
        );

        if (!response.ok) {
          throw new Error("Failed to create post");
        }

        const createdPost = await response.json();
        console.log("Created Post:", createdPost);

        // Reset the newPost object
        newPost.value.title = "";
        newPost.value.image = null;
        newPost.value.text = "";
      } catch (error) {
        console.error("Failed to create post:", error);
      }
    };

    const onImageChange = (event) => {
      const file = event.target.files[0];
      newPost.value.image = URL.createObjectURL(file);
    };

    return {
      newPost,
      posts,
      createPost,
      onImageChange,
    };
  },
};
