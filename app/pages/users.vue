<script setup>
const { users, loading, fetchUsers } = useUsers ()

onMounted(fetchUsers)
</script>

<template>
<div>
  <p v-if="loading">Carregando...</p>
  <ul>
    <li v-for="user in users" :key="user.id">
      {{ user.name }}
    </li>
  </ul>
</div>
</template>