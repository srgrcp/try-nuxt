<template>
  <div>
    <p v-if="user">{{ user.email }}</p>
    <hr v-if="user">
    <User />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { authComposite } from '~/composites/auth'

export default defineComponent({
  setup() {
    return authComposite()
  },
  middleware: ['authorization'],
})
</script>
