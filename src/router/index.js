import { createRouter, createWebHistory } from "vue-router";
import DefaultLayout from '../components/DefaultLayout.vue';
import GuestLayout from '../components/GuestLayout.vue';
import Home from '../views/Home.vue'
import MealsByIngredient from '../views/MealsByIngredient.vue'
import MealsByLetter from '../views/MealsByLetter.vue'
import MealsByName from '../views/MealsByName.vue'
import MealDetails from '../views/MealDetails.vue'
import Ingredients from '../views/Ingredients.vue'
import MealsByArea from '../views/MealsByArea.vue'
import MealsByCategory from '../views/MealsByCategory.vue'
import Category from '../views/Category.vue'


const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      {
        path: "/",
        name: "home",
        component: Home,
      },
      {
        path: "/by-name/:name?",
        name: "byName",
        component: MealsByName,
      },
      {
        path: "/by-letter/:letter?",
        name: "byLetter",
        component: MealsByLetter,
      },
      {
        path: "/ingredients",
        name: "ingredients",
        component: Ingredients,
      },
      {
        path: "/by-ingredient/:ingredient",
        name: "byIngredient",
        component: MealsByIngredient,
      },
      {
        path: '/drink/:id',
        name: 'mealDetails',
        component: MealDetails
      },
      {
        path: "/by-area/:area?",
        name: "byArea",
        component: MealsByArea,
      },
      {
        path: "/category/:category?",
        name: "categories",
        component: Category,
      },
      {
        path: "/by-category/:category",
        name: "byCategory",
        component: MealsByCategory,
      },
    ]
  },
  {
    path: '/guest',
    component: GuestLayout
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
