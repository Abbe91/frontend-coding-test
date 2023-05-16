<template>
  <div class="create-user">
    <h2>Create User</h2>
    <form @submit.prevent="createUser" class="create-user-form">
      <div class="form-group">
        <label for="title">Title</label>
        <select id="title" v-model="newUser.title" required>
          <option value="mr">Mr</option>
          <option value="ms">Ms</option>
          <option value="mrs">Mrs</option>
          <option value="miss">Miss</option>
          <option value="dr">Dr</option>
        </select>
      </div>
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
        <label for="picture">Picture (URL)</label>
        <input type="text" id="picture" v-model="newUser.picture" />
      </div>
      <div class="form-group">
        <label for="dateOfBirth">Date of Birth</label>
        <input
          type="date"
          id="dateOfBirth"
          v-model="newUser.dateOfBirth"
          required
        />
      </div>
      <button type="submit">Create User</button>
    </form>

    <div v-if="showNotification" class="notification success">
      <p>User created successfully!</p>
      <p>Created User ID: {{ createdUserId }}</p>
    </div>

    <div v-if="showNotificationFalse" class="notification error">
      <p>Failed to create user.</p>
    </div>
  </div>
</template>

<script src="./CreateUser.js"></script>

<style src="./CreateUser.css" scoped></style>
