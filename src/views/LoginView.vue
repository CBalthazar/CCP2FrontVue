<template>
  <div>
    <h2>Login Page</h2>
    <form @submit.prevent="handleLogin">
      <input v-model="mail" />
      <input v-model="password" />
      <button type="submit">login</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/authentification'

const authStore = useAuthStore()
const mail = ref('')
const password = ref('')
const router = useRouter()

const handleLogin = async () => {
  try {
    const user = await authStore.login(mail.value, password.value)
    console.log('login : ')
    console.log(user)
    router.push('/home')
  } catch (error) {
    console.error(error)
    alert('Login failed')
  }
}
</script>
