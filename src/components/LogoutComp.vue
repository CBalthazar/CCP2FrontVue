<script setup>
import { useAuthStore } from '@/stores/authentification.js'
import { ref } from 'vue'
const authStore = useAuthStore()
const isLoggedOut = ref(false)
try {
  await authStore.logout()
  isLoggedOut.value = true
} catch (error) {
  console.error(error)
  alert('Logout failed')
}
</script>

<template>
  <h2 v-if="isLoggedOut">vous avez bien été déconnecté</h2>
</template>
