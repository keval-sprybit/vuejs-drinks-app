<template>
  <div
    class="bg-white  drop-shadow-xl rounded-xl hover:scale-105 transition-all"
  >
    <router-link :to="{ name: 'mealDetails', params: { id: meal.idDrink } }">
      <img
        :src="meal.strDrinkThumb"
        :alt="meal.idDrink"
        class="rounded-t-xl w-full hue-rotate-15 grayscale sepia-0 hover:filter-none hover:origin-top-left hover:saturate-200  object-cover"
      />
    </router-link>
    <div class="p-3 ">
      <h3 class="font-bold">{{ meal.strDrink }}</h3>
      <p class="mb-4 ">
        {{ $filters.truncateWords(meal.strInstructions, 20) }}
      </p>
      <!-- <div class="flex items-center justify-between">
        <YouTubeButton :href="meal.strYoutube" />
      </div> -->
    </div>
  </div>
</template>

<script setup>
import YouTubeButton from './YouTubeButton.vue';
const { meal } = defineProps({
  meal: {
    required: true,
    type: Object
  }
})

</script>
