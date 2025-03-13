import { createRouter, createWebHistory } from 'vue-router'
import App from '@/App.vue'
import NotFound from '@/views/404View.vue'
import LoginView from '@/views/LoginView.vue'
import HomeView from '@/views/HomeView.vue'
import MissionView from '@/views/MissionView.vue'
import Logout from '@/views/LogoutView.vue'
import SignUpView from '@/views/SignUpView.vue'
import { useAuthStore } from '@/stores/authentification'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_START_URL),
  routes: [
    {
      path: '/',
      name: 'app',
      component: App,
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/register',
      component: SignUpView,
    },
    {
      path: '/missions',
      name: 'missions',
      component: MissionView,
      meta: { requiresOrga: true },
    },
    {
      path: '/:pathMatch(.*)*',
      component: NotFound,
    },
    {
      path: '/logout',
      component: Logout,
      meta: { requiresAuth: true },
    },
  ],
})

router.beforeEach(async (to, from, next) => {
  const authStore = useAuthStore()
  const isLogged = !!authStore.user

  if (to.meta.requiresAuth && !isLogged) {
    next('/login')
  } else {
    next()
  }
})

export default router
