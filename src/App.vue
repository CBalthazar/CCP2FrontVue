<template>
  <div id="app">
    <header>
      <h1>Missions Benevoles</h1>
      <!-- Optionnel: Navigation pour naviguer entre les pages -->
      <nav>
        <router-link to="/">Accueil</router-link> |
        <router-link to="/article/new">Ajouter un article</router-link> |
        <router-link to="/login">Login</router-link> |
        <router-link to="/missions">Missions</router-link> |
        <router-link to="/register">signup</router-link> |
        <router-link to="/logout">logout</router-link>
      </nav>
    </header>

    <!-- Conteneur principal pour les vues dynamiques -->
    <main>
      <router-view />
    </main>
  </div>
</template>

<script setup>
// Aucun code spécifique ici, vue qu'il est géré par Vue Router et Pinia
</script>

<style>
/* Ajoute ici ton style global si nécessaire */
#app {
  display: flex;
  flex-direction: column;
  font-family: 'Arial', sans-serif;
  text-align: center;
}

header {
  background-color: #333;
  color: white;
  padding: 10px;
}

nav {
  margin-top: 10px;
}

nav a {
  color: white;
  text-decoration: none;
  margin: 0 10px;
}

nav a:hover {
  text-decoration: underline;
}
</style>
