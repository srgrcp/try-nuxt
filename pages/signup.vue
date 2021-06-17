<template>
  <div class="flex justify-center">
    <form class="container py-4" @submit="signup($event)">
      <h1 class="text-xl mb-4">Sign Up</h1>
      <div class="space-y-4">
        <!-- <div>
                    <label for="username">Username</label>
                    <input type="text" id="username" required v-model.trim="username">
                </div> -->
        <div>
          <label for="email">Email</label>
          <input type="email" id="email" required v-model.trim="email" />
        </div>
        <div>
          <label for="password">Password</label>
          <input type="password" id="password" required v-model="password" />
        </div>
        <div>
          <button class="signup" :disabled="isLoading">Sign Up</button>
        </div>
        <div>
          <p v-if="isLoading">Loading...</p>
        </div>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import firebase from "firebase/app";
import "firebase/auth";

export default Vue.extend({
  data() {
    return {
      username: "",
      email: "",
      password: "",
      isLoading: false,
    };
  },
  methods: {
    async signup(e: any) {
      e.preventDefault();
      this.isLoading = true;
      try {
        const userCredential = await firebase
          .auth()
          .createUserWithEmailAndPassword(this.email, this.password);
        if (! userCredential.user) return
        const { uid, email } = userCredential.user
        console.log(uid, email);
        this.$store.commit("auth/setUser", { uid, email });
        this.$router.push('/')
      } catch (error) {
        console.log(error);
      }
      this.isLoading = false;
    },
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
