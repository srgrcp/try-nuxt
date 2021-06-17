import { User } from "~/core/auth/user"

export type AuthState = {
    user: User | undefined
}

export const state = (): AuthState => ({
    user: undefined
})

export const mutations = {
    setUser(state: AuthState, user: User | undefined) {
        state.user = user
    }
}
