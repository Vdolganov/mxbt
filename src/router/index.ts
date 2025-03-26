import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import { Cocktails, CocktailsScreen } from '@/modules/cocktails';
import { ECocktails } from '@/service/cocktails/enums';
import { allCocktails } from '@/config/constants';
import notFound from '@/components/not-found.vue';
import { routeNames } from './route-names';

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    name: routeNames.cocktailsMain,
    component: Cocktails,
    redirect: {
      name: 'cocktail-item',
      params: { id: ECocktails.Margarita },
    },

    children: [
      {
        path: '/:id',
        name: routeNames.cocktailItem,
        component: CocktailsScreen,
        props: (route) => ({ cocktailCode: route.params.id }),
        beforeEnter: (to, from, next) => {
          if (!to.params.id || !allCocktails.includes(to.params.id as string)) {
            return next({ name: '404' });
          }
          return next();
        },
      },
    ],
  },
  {
    name: '404',
    path: '/404',
    component: notFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
