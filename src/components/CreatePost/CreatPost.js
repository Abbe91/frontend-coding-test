import { ref } from "vue";

export default {
  name: "CreatePost",
  setup() {
    const newPost = ref({
      title: "",
      image: null,
      text: "",
    });

    const posts = ref([]);

    const createPost = () => {
      const postId = generateId();
      // Perform the post creation logic
      // ...

      // Push the created post into the posts array
      posts.value.push({
        id: postId,
        title: newPost.value.title,
        image: newPost.value.image,
        text: newPost.value.text,
      });
      console.log("Created Post ID:", postId);

      // Reset the newPost object
      newPost.value.title = "";
      newPost.value.image = null;
      newPost.value.text = "";
    };

    const onImageChange = (event) => {
      const file = event.target.files[0];
      newPost.value.image = URL.createObjectURL(file);
    };

    const generateId = () => {
      return Math.random().toString(36).substring(2, 15);
    };

    return {
      newPost,
      posts,
      createPost,
      onImageChange,
      generateId,
    };
  },
};
