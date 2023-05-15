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

<script src="./CreateUser.js"></script>

<style src="./CreateUser.css" scoped></style>
