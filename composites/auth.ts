import { reactive, useStore, useRouter, computed } from '@nuxtjs/composition-api'
import { User } from '~/core/auth/user'

export const authComposite = () => {
    const store = useStore<any>()
    const router = useRouter()
    
    const form = reactive({
        username: "",
        email: "",
        password: "",
        isLoading: false,
    })
    
    const signup = (e: any) => {
        e.preventDefault()
        form.isLoading = true
        try {
            const user: User = {
                uid: '8uer38ru82',
                email: form.email,
                username: 'srgrcp',
            }
            store.commit("auth/setUser", user)
            router.push('/')
        } catch (error) {
            console.log(error)
        }
        form.isLoading = false
    }
    
    const user = computed(() => store.state.auth.user)
    
    return {
        form,
        signup,
        user,
    }
}
