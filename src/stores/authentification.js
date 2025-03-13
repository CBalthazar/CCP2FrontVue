import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({ user: null }),

  actions: {
    async login(mail, password) {
      const response = await fetch('http://localhost:3000/user/login', {
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
      const response = await fetch('http://localhost:3000/user/register', {
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
      await fetch('http://localhost:3000/user/logout', {
        method: 'POST',
        credentials: 'include',
      })
      this.user = null
    },
  },
})
