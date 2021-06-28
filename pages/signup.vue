<template>
  <div class="flex justify-center">
    <form class="container py-4" @submit="signup($event)">
      <h1 class="text-xl mb-4">Sign Up</h1>
      <div class="space-y-4">
        <div>
            <label for="username">Username</label>
            <input type="text" id="username" required v-model.trim="form.username">
        </div>
        <div>
          <label for="email">Email</label>
          <input type="email" id="email" required v-model.trim="form.email" />
        </div>
        <div>
          <label for="password">Password</label>
          <input type="password" id="password" required v-model="form.password" />
        </div>
        <div>
          <button class="signup" :disabled="form.isLoading">Sign Up</button>
        </div>
        <div>
          <p v-if="form.isLoading">Loading...</p>
        </div>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { authComposite } from '~/composites/auth'

export default defineComponent({
  setup() {
    return authComposite()
  },
  middleware: ["unloggedin"],
});
</script>

<style lang="postcss" scoped>
label {
  @apply font-semibold block;
}
input {
  @apply border rounded-sm px-2 py-1;
}
.signup {
  @apply flex items-center justify-center rounded-full bg-purple-100 text-purple-500 font-semibold py-1 px-4;
}
.signup:hover {
  @apply underline;
}
.signup:focus {
  @apply ring ring-purple-200;
}
</style>
