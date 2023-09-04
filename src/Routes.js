import Router from 'vue-router';
import Vue from 'vue';



Vue.use(Router);

export default new Router({
  routes: [
    // path 1
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/components/Login/Login'),
    },
    // path 2
    {
      path: '/',
      name: 'Layout',
      component: () => import('@/components/Layout/Layout'),
      children: [
        {
          path: '/',
          name: 'Home',
          component: () => import('@/pages/Home/Home'),
        },
        {
          path: '/acerca',
          name: 'Acerca',
          component: () => import('@/pages/acerca/Acerca'),
        },
        {
          path: '/contacto',
          name: 'Contacto',
          component: () => import('@/pages/contacto/Contacto'),
        },
      ],
    },
    // here path 3 if need
    
    // path 4
    {
      path: '*',
      name: 'Error',
      component: () => import('@/components/Error/Error'),
    }
  ],
});
