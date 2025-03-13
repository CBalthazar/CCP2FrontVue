<template>
  <h2>Home page</h2>
  <div>
    <ul>
      <li v-for="mission in missions" :key="mission.title">
        <h2>{{ mission.title }}</h2>
        <p>{{ mission.description }}</p>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useMissionStore } from '@/stores/missionStore.js'
console.log('home 1')
console.log(useMissionStore())

try {
  await useMissionStore().getAllMissions()
} catch (err) {
  console.log('home')
  console.log(err)
}
</script>
