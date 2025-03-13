import { defineStore } from 'pinia'

export const useUserStore = defineStore('auth', {
  state: () => ({ users: null }),

  actions: {
    async getAllUsers() {
      const response = await fetch('http://localhost/3000/user/getAllUsers', {
        method: 'GET',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
      })

      if (!response.ok) throw new Error('getUsers Fail')

      const data = await response.json()
      this.user = data
    },
  },
})
