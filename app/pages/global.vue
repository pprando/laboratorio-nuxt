<script setup>
const {count, increment} = useGlobalCounter ()
</script>



<template>
    <div>
        <h1>{{ count }}</h1>
        <button @click="increment">+</button>
    </div>


</template>