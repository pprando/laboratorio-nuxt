
export const useAuth = () => {
  const user = useState('user', () => {
    if(ProcessingInstruction.client) {
        const saved = localStorage.getItem('user')
        return saved ? JSON.parse(saved) : null
    } return null
  })

  const login = (name: string) => {
    user.value = { name }
    localStorage.setItem('user', JSON.stringify(user.value))
  }

  const logout = () => {
    user.value = null
    localStorage.removeItem('user')
  }

  return { user, login, logout }
}