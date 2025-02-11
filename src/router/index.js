import { createWebHistory, createRouter } from 'vue-router';

const routes = [
  {
    path: '/',
    redirect: '/home',
    component: () => import('@/layout/index.vue'),
    children: [
        { path: 'home', component: () => import('@/views/home.vue') },
        { path: 'demo', component: () => import('@/views/demo2.vue') },
        { path: 'tinymce', component: () => import('@/views/tinymce-word.vue') }
    ],
  },
  { path: '/:pathMatch(.*)*', component: () => import('@/views/404.vue') },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
