import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({ user: null }),

  actions: {
    async login(mail, password) {
      console.log(import.meta.env.VITE_BASE_START_URL)
      const response = await fetch(import.meta.env.VITE_BASE_START_URL + '/user/login', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          mail,
          password,
        }),
      })
      if (!response.ok) throw new Error('Login Failed')

      const data = await response.json()
      this.user = data
      return this.user
    },

    async signup(firstname, name, mail, password, role) {
      const response = await fetch(import.meta.env.VITE_BASE_START_URL + '/user/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstname,
          name,
          mail,
          password,
          role,
        }),
      })

      if (!response.ok) {
        throw new Error(response.body)
      }

      return await response.json()
    },

    async logout() {
      await fetch(import.meta.env.VITE_BASE_START_URL + '/user/logout', {
        method: 'POST',
        credentials: 'include',
      })
      this.user = null
    },
  },
})
