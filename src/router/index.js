import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import ManageView from '@/views/ManageView.vue';
import UserDetailsView from '@/views/UserDetailsView.vue';
import EditUserDetails from '@/components/EditUserDetails.vue';
import SongDetails from '@/components/SongDetails.vue';
import AuthView from '@/views/AuthView.vue';

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/song/:id',
      name: 'song',
      component: SongDetails,
    },
    {
      path: '/manage',
      name: 'manage',
      component: ManageView,
    },
    {
      path: '/user',
      name: 'user',
      component: UserDetailsView,
    },
    {
      path: '/edituserdetails/:id',
      name: 'edituserdetails',
      component: EditUserDetails,
    },
    {
      path: '/auth',
      name: 'auth',
      component: AuthView,
    },
  ],
});

export default router;
