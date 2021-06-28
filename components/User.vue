<template>
    <div>
        <h2 v-if="user">{{ user.name }} {{ user.lastname }}</h2>
    </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { authComposite } from '~/composites/auth'

export default defineComponent({
  setup() {
    return authComposite()
  },
})
</script>
