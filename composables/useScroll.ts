
export const useScroll = () => {
    const scrolled = useState('scrolled', () => false)

    const handleScroll = () => {
        scrolled.value = window.scrollY > 40
    }

    onMounted(() => {
        window.addEventListener('scroll', handleScroll)
        handleScroll() // Check initial state
    })

    onUnmounted(() => {
        window.removeEventListener('scroll', handleScroll)
    })

    return {
        scrolled
    }
}
