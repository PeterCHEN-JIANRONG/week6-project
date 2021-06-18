import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('../views/Front.vue'),
    children: [
      {
        path: 'index',
        component: () => import('../views/Index.vue'),
      },
      {
        path: 'products',
        component: () => import('../views/Products.vue'),
      },
      {
        path: 'product/:id',
        component: () => import('../views/Product.vue'),
      },
      {
        path: 'carts',
        component: () => import('../views/Carts.vue'),
      },
      {
        path: 'about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
      },
    ],
  },
  {
    path: '/admin',
    component: import('../views/Dashboard.vue'),
    children: [
      {
        path: 'products',
        component: () => import('../views/admin/Products.vue'),
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    component: import('../views/NotFound.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
