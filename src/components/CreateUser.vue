<template>
  <div class="create-user">
    <h2>Create User</h2>
    <form @submit.prevent="createUser" class="user-form">
      <div class="form-group">
        <label for="firstName">First Name</label>
        <input
          type="text"
          id="firstName"
          v-model="newUser.firstName"
          required
        />
      </div>

      <div class="form-group">
        <label for="lastName">Last Name</label>
        <input type="text" id="lastName" v-model="newUser.lastName" required />
      </div>

      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" v-model="newUser.email" required />
      </div>

      <div class="form-group">
        <label for="picture">Profile Picture</label>
        <input
          type="file"
          id="picture"
          accept="image/*"
          @change="onFileChange"
        />
      </div>

      <button type="submit" class="submit-button">Create User</button>
    </form>
  </div>
</template>

<script>
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
              "app-id": "645e1fa135277554efa9d769",
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
</script>

<style scoped>
.create-user {
  max-width: 400px;
  margin: 0 auto;
}

h2 {
  font-size: 24px;
  margin-bottom: 20px;
}

.user-form {
  display: flex;
  flex-direction: column;
}

.form-group {
  margin-bottom: 20px;
}

label {
  font-weight: bold;
  margin-bottom: 5px;
}

input[type="text"],
input[type="email"] {
  width: 100%;
  padding: 10px;
  font-size: 16px;
}

.submit-button {
  padding: 10px 20px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
}

.submit-button:hover {
  background-color: #45a049;
}
</style>
