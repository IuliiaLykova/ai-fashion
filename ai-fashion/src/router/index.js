import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/',            name: 'home',     component: () => import('../pages/Home.vue') },
  { path: '/services',    name: 'services', component: () => import('../pages/Services.vue') },
  { path: '/use-cases',   name: 'cases',    component: () => import('../pages/UseCases.vue') },
  { path: '/showcase',    name: 'showcase', component: () => import('../pages/Showcase.vue') },
  { path: '/process',     name: 'process',  component: () => import('../pages/Process.vue') },
  { path: '/pricing',     name: 'pricing',  component: () => import('../pages/Pricing.vue') },
  { path: '/about',       name: 'about',    component: () => import('../pages/About.vue') },
  { path: '/contact',     name: 'contact',  component: () => import('../pages/Contact.vue') },
]

export default createRouter({ history: createWebHistory(), routes })