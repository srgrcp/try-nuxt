<template>
    <nav class="navbar">
        <div class="nav-container">
            <div>
                <NuxtLink class="brand" to="/">SRG</NuxtLink>
            </div>
            <div class="flex justify-end" v-if="!user">
                <NuxtLink class="login" to="/login">Login</NuxtLink>
                <NuxtLink class="signup" to="/signup">Sign Up</NuxtLink>
            </div>
        </div>
    </nav>
</template>

<script lang="ts">
import Vue from 'vue'
import { User } from '~/core/auth/user'
import { AuthState } from '~/store/auth'

export default Vue.extend({
    computed: {
        userState(): AuthState {
            return this.$store.state.auth
        },
        user(): User | undefined {
            return  this.userState.user
        }
    }
})
</script>

<style lang="postcss" scoped>
.navbar {
    @apply border-b border-gray-200 bg-gray-100 flex justify-center
}
.nav-container {
    @apply flex justify-between py-4 container
}
.brand {
    @apply text-xl font-bold text-gray-600
}
.signup {
    @apply flex items-center justify-center rounded-full bg-purple-100 text-purple-500 font-semibold py-1 px-4
}
.signup:hover {
    @apply underline
}
.signup:focus {
    @apply ring ring-purple-200
}
.login {
    @apply text-purple-500 font-semibold flex py-1 px-4
}
.login:hover, .login:focus {
    @apply underline
}
</style>
