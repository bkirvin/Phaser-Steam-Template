const routes = [
  {
    path: '/',
    component: () => import('pages/TitlePage.vue')
  },
  {
    path: '/play',
    component: () => import('pages/IndexPage.vue')
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
