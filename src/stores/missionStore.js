import { defineStore } from 'pinia'

export const useMissionStore = defineStore('auth', {
  state: () => ({ missions: null, mission: null }),

  actions: {
    async createMission(title, description, idAssociation) {
      const response = await fetch('http://localhost/3000/mission/', {
        method: 'POST',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title,
          description,
          idAssociation,
        }),
      })

      if (!response.ok) throw new Error('createMission Fail')

      const data = await response.json()
      this.mission = data
    },

    async getAllMissions() {
      const response = await fetch('http://localhost/3000/mission/all', {
        method: 'GET',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
      })

      console.log('get all mission')

      if (!response.ok) throw new Error('getMissions Fail')

      const data = await response.json()
      this.missions = data
    },

    async updateMission(id, title, description) {
      const response = await fetch('http://localhost/3000/mission/', {
        method: 'PUT',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title,
          description,
        }),
      })

      if (!response.ok) throw new Error('updateMission Fail')

      const data = await response.json()
      this.missions = data
    },
  },
})
