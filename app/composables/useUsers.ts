export const useUsers = () => {
    const users = ref([])
    const loading = ref(false)

    const fetchUsers = async () => {
        loading.value = true
        users.value = await $fetch('http://jsonplaceholder.typicode.com/users')
        loading.value = false
    }

    return { users, loading, fetchUsers }
}