<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <header class="header">
    <div class="container">
      <nav class="nav">
        <router-link to="/" class="nav-link">Home</router-link>
        <router-link to="/create" class="nav-link">Create Post</router-link>
        <router-link to="post/:id/edit/" class="nav-link"
          >Edit Post</router-link
        >
      </nav>
    </div>
  </header>
</template>

<style src="./Header.css" scoped></style>
