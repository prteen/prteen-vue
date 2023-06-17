import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FriendshipView from '../views/FriendshipsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/RegisterView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/party/create',
      name: 'create-party',
      component: () => import('../views/CreatePartyView.vue')
    },
    {
      path: '/friendships',
      name: 'friendships',
      component: () => FriendshipView
    },
    {
      path: '/friendships/new',
      name: 'new_friendship',
      component: () => import('../views/NewFriendshipView.vue')
    },
    {
      path: '/parties',
      name: 'parties',
      component: () => import('../views/PartiesView.vue')
    },
    {
      path: '/parties/id/:id',
      name: 'party-details',
      component: () => import('../views/PartyDetailsView.vue')
    },
  ]
})

export default router
