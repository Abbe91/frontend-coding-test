import { ref } from "vue";

export default {
  name: "CreateUser",
  setup() {
    const newUser = ref({
      firstName: "",
      lastName: "",
      email: "",
      picture: null,
    });

    const createUser = async () => {
      try {
        const formData = new FormData();
        formData.append("firstName", newUser.value.firstName);
        formData.append("lastName", newUser.value.lastName);
        formData.append("email", newUser.value.email);
        formData.append("picture", newUser.value.picture);

        const response = await fetch(
          "https://dummyapi.io/data/v1/user/create",
          {
            method: "POST",
            headers: {
              "app-id": "6460e28743cff745b792ba3d",
            },
            body: formData,
          }
        );

        console.log("Response status:", response.status);
        console.log("Response body:", await response.text());

        if (!response.ok) {
          throw new Error("Failed to create user");
        }

        // Handle success or redirect to appropriate page
      } catch (error) {
        console.error(error);
      }
    };

    const onFileChange = (event) => {
      const file = event.target.files[0];
      newUser.value.picture = file;
    };

    return {
      newUser,
      createUser,
      onFileChange,
    };
  },
};
