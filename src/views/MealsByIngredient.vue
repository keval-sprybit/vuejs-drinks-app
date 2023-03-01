<template>
  <div class="p-8 pb-0">
    <h1 class="text-4xl font-bold mb-4 text-orange-500">Drinks for {{ ingredient.strIngredient1 }}</h1>
  </div>

  <Meals :meals="meals" />
</template>

<script setup>
import { computed } from "@vue/reactivity";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import store from "../store";
import Meals from '../components/Meals.vue'

const route = useRoute();
const ingredient = computed(() => store.state.ingredient)
const meals = computed(() => store.state.mealsByIngredient)

onMounted(() => {
  console.log(ingredient)
  store.dispatch('searchMealsByIngredient', route.params.ingredient)
})

</script>
