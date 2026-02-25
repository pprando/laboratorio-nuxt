export const useGlobalCounter = () => {
    const count = useState('globalCounter', () => 0)

    const increment = () => count.value++

    return { count, increment}
}