<template>
  <div>
    <Navbar />
    <Nuxt />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { startFirebaseApp } from '~/core/utils/firebase'

export default Vue.extend({
  beforeCreate() {
    startFirebaseApp()
  }
})
</script>
