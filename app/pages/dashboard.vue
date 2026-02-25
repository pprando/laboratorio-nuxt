<script setup lang="ts">
const { user } = useAuth()
</script>

<template>
    <div>
        <h1>Dashboard</h1>

        <div v-if="user">
            <p>Bem Vindo, {{ user.name }}</p>
        </div>

        <div v-else>
            <p> Voce nao esta logado!</p>
        </div>
    </div>
</template>