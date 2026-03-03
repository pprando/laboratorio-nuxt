<script setup lang="ts">
const { users, loading, error, fetchUsers, createUser, deleteUser } = useUsers()

const name = ref('')

onMounted(fetchUsers)
</script>

<template>
  <div>
    <h1>Users</h1>

    <div>
      <input v-model="name" placeholder="Novo Usuario" />
      <button @click="createUser(name)">Criar</button>
    </div>

    <p v-if="loading">Carregando...</p>
    <p v-if="loading">{{ error }}</p>

    <ul>
      <li v-for="user in users" :key="user.id">
        {{ user.name }}
        <button @click="deleteUser">X</button>
      </li>
    </ul>
  </div>
</template>