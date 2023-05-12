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

      <button type="submit" class="submit-button">Create</button>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import makeRequest from "./api.js";

export default {
  name: "CreateUser",
  setup() {
    const newUser = ref({
      firstName: "",
      lastName: "",
      email: "",
    });

    const createUser = async () => {
      try {
        const response = await makeRequest(
          "POST",
          "https://dummyapi.io/data/v1/user/create",
          newUser.value
        );
        console.log("User created:", response);
        // Handle the response or perform further actions
      } catch (error) {
        console.error("Failed to create user:", error);
        // Handle the error appropriately
      }
    };

    return {
      newUser,
      createUser,
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
