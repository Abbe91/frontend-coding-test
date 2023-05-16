import { ref } from "vue";
import { appId } from "../ApiConnection/api";

export default {
  name: "CreatePost",
  setup() {
    const userId = "646330845f3ddc08319a9301";
    const newPost = ref({
      text: "",
      likes: 0,
      tags: [],
      owner: userId,
    });
    const tagInput = ref("");
    const showNotification = ref(false);
    const showNotificationFalse = ref(false);

    const createPost = async () => {
      try {
        const response = await fetch(
          "https://dummyapi.io/data/v1/post/create",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "app-id": appId,
            },
            body: JSON.stringify({
              ...newPost.value,
              tags: newPost.value.tags,
            }),
          }
        );

        if (!response.ok) {
          throw new Error("Failed to create post");
        }

        const createdPost = await response.json();
        console.log("Created Post ID:", createdPost.id);

        // Reset the newPost object
        newPost.value.text = "";
        newPost.value.likes = 0;
        newPost.value.tags = [];
        showNotification.value = true;
      } catch (error) {
        console.error(error);
        showNotificationFalse.value = true;
      }
    };

    const addTag = () => {
      const tag = tagInput.value.trim();
      if (tag) {
        newPost.value.tags.push(tag);
        tagInput.value = "";
      }
    };

    const removeTag = (index) => {
      newPost.value.tags.splice(index, 1);
    };

    return {
      newPost,
      tagInput,
      showNotification,
      showNotificationFalse,
      createPost,
      addTag,
      removeTag,
    };
  },
};
