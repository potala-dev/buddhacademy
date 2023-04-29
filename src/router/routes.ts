import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/HomePage.vue') },
      {
        path: '/texts/:title',
        name: 'texts',
        component: () => import('pages/TextPage.vue'),
      },
      { path: '/courses', component: () => import('pages/CoursesPage.vue') },
      { path: '/explore', component: () => import('pages/ExplorePage.vue') },
      { path: '/settings', component: () => import('pages/SettingsPage.vue') },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
