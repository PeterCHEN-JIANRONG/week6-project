import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('../views/Home.vue'),
    children: [
      {
        path: '',
        name: '首頁',
        component: () => import('../views/Index.vue'),
      },
      {
        path: 'products',
        name: '產品列表',
        component: () => import('../views/Products.vue'),
      },
      {
        path: 'product/:id',
        name: '產品詳細頁',
        component: () => import('../views/Product.vue'),
      },
      {
        path: 'carts',
        name: '購物車',
        component: () => import('../views/Carts.vue'),
      },
      {
        path: 'about',
        name: '關於我們',
        component: () => import('../views/About.vue'),
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
