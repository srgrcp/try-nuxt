<template>
  <div>
    <p v-if="user">{{ user.email }}</p>
    <hr v-if="user">
    <User />
  </div>
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
  },
  middleware: ['authorization'],
})
</script>
