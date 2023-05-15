import { ref } from "vue";
import { appId } from "../ApiConnection/api";
export default {
  name: "CreateUser",
  setup() {
    const newUser = ref({
      firstName: "",
      lastName: "",
      email: "",
    });
    const showNotification = ref(false);
    const showNotificationFalse = ref(false);
    const createUser = async () => {
      try {
        const response = await fetch(
          "https://dummyapi.io/data/v1/user/create",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "app-id": appId,
            },
            body: JSON.stringify(newUser.value),
          }
        );

        if (!response.ok) {
          throw new Error("Failed to create user");
        }

        const responseData = await response.json();
        console.log("Created User ID:", responseData.id);
        showNotification.value = true;
        // Handle success or redirect to appropriate page
      } catch (error) {
        showNotificationFalse.value = true;

        console.error(error);
      }
    };
    return {
      newUser,
      createUser,
      showNotification,
      showNotificationFalse,
    };
  },
};
