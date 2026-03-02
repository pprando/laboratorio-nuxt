<template>
    <div>
        <nav>
            <NuxtLink to="/">Home</NuxtLink>
            <NuxtLink to="/dashboard">Dashboard</NuxtLink>
            <NuxtLink to="/login">login</NuxtLink>
        </nav>

        <NuxtPage />
    </div>
</template>

<style>
nav {
  display: flex;
  justify-content: space-around;
  padding: 1rem;
  background-color: #f0f0f0;
}

nav a {
  text-decoration: none;
  color: #333;
}
</style>