export const useUsers = () => {
  const users = ref([])
  const loading = ref(false)
  const error = ref(null)

  const fetchUsers = async () => {
    try {
      loading.value = true
      error.value = null
      users.value = await $fetch('https://jsonplaceholder.typicode.com/users')
    } catch (err: any) {
      error.value = err.message
    } finally {
      loading.value = false
    }
  }

  const createUser = async (name: string) => {
    const newUser = await $fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'POST',
      body: { name }
    })

    users.value.push(newUser)
  }

  const deleteUser = async (id: number) => {
    await $fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: 'DELETE'
    })

    users.value = users.value.filter(u => u.id !== id)
  }

  return {
    users,
    loading,
    error,
    fetchUsers,
    createUser,
    deleteUser
  }
}