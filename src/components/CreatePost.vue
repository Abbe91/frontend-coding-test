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
    });

    const createUser = async () => {
      try {
        const response = await fetch(
          "https://dummyapi.io/data/v1/user/create",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "app-id": "645e1fa135277554efa9d769", // Replace with your actual app ID
            },
            body: JSON.stringify(newUser.value),
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
  margin-bottom: 20 px;
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
