import { defineStore } from 'pinia'

export const useuserstore = defineStore('auth', {
  state: () => ({ users: null, user: null }),

  actions: {
    async createUser(title, description, idAssociation) {
      const response = await fetch('http://localhost/3000/user/', {
        method: 'POST',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title,
          description,
          idAssociation,
        }),
      })

      if (!response.ok) throw new Error('createUser Fail')

      const data = await response.json()
      this.user = data
    },

    async getAllusers() {
      const response = await fetch('http://localhost/3000/user/all', {
        method: 'GET',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
      })

      if (!response.ok) throw new Error('getusers Fail')

      const data = await response.json()
      this.users = data
    },

    async updateUser(id, title, description) {
      const response = await fetch('http://localhost/3000/user/', {
        method: 'PUT',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title,
          description,
        }),
      })

      if (!response.ok) throw new Error('updateUser Fail')

      const data = await response.json()
      this.users = data
    },
  },
})
