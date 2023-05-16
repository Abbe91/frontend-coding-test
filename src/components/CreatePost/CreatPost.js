import { ref } from "vue";
import { appId } from "../ApiConnection/api";
export default {
  name: "CreatePost",
  setup() {
    const userId = "646330845f3ddc08319a9301";
    const newPost = ref({
      title: "",
      image: "",
      text: "",
      likes: 0,
      tags: [],
      owner: userId,
    });
    const tagInput = ref("");
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
        console.log("Created Post: 01", createdPost);

        // Push the created post into the posts array
        console.log("Created Post: 02", newPost.value);

        // Reset the newPost object
        newPost.value.title = "";
        newPost.value.image = "";
        newPost.value.text = "";
        newPost.value.tags = [];
      } catch (error) {
        console.error("Failed to create post:", error);
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

    const onImageChange = (event) => {
      const file = event.target.files[0];
      newPost.value.image = URL.createObjectURL(file);
    };

    return {
      newPost,
      createPost,
      onImageChange,
      addTag,
      removeTag,
    };
  },
};
