<script setup lang="ts">
const name = ref('')
const { user, login, logout } = useAuth()
</script>

<template>
    <div>
        <h1>Login Fake</h1>

        <div v-if="!user">
            <input v-model="name" placeholder="Digite seu nome" />
            <button @click="login(name)">Entrar</button>
        </div>

        <div v-else>
            <p>Logado como {{ user.name }}</p>
            <button @click="logout">Sair</button>
        </div> <br> <br> <br>

        <div>
            <p>Entre em "/dashboard" para testar seu "login" =)</p>
        </div>

    </div>
</template>