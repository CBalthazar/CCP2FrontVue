<template>
  <div>
    <h2>Sign Up</h2>
    <form @submit.prevent="handleSignUp">
      <input v-model="firstname" type="text" placeholder="John" required />

      <input v-model="name" type="text" placeholder="Smith" required />

      <input v-model="mail" type="text" placeholder="john.smith@mail.com" required />

      <input v-model="password" type="password" placeholder="Password" required />

      <input v-model="role" type="text" placeholder="benevole | association" required />

      <button type="submit">Sign Up</button>
    </form>
  </div>
</template>

<style scope>
form {
  display: flex;
  flex-direction: column;
}
</style>

<script setup>
import { useAuthStore } from '@/stores/authentification.js'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
console.log(useAuthStore)
const authStore = useAuthStore()
console.log(authStore)
const firstname = ref('')
const name = ref('')
const mail = ref('')
const password = ref('')
const role = ref('')
const router = useRouter()

const handleSignUp = async () => {
  try {
    const user = await authStore.signup(
      firstname.value,
      name.value,
      mail.value,
      password.value,
      role.value,
    )
    console.log(user)
    router.push('/login')
  } catch (error) {
    console.error(error)
    alert('Signup failed')
  }
}
</script>
