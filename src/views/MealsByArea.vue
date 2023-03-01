<template>
  <div class="p-8 pb-0">
    <h1 class="text-4xl font-bold mb-4 text-orange-500">Search Meals by Area</h1>
  </div>
  <div class="px-8 pb-3">
    <input
      type="text"
      v-model="keyword"
      class="rounded border-2 bg-white border-gray-200 focus:ring-orange-500 focus:border-orange-500 w-full"
      placeholder="Search for Meals by area"
      @change="searchArea"
    />
  </div>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
      <a href="#"
        @click.prevent="openCategory(category)"
        v-for="area of areas"
        :key="area.strArea"
        class="block bg-white rounded p-3 mb-3 shadow"
      >
        <h3 class="text-2xl font-bold mb-2">{{ area.strArea }}</h3>
      </a>
    </div>

  <Meals :meals="meals" />
</template>

<script setup>
import { computed } from "@vue/reactivity";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import store from "../store";
import Meals from '../components/Meals.vue'
import axiosClient from "../axiosClient";


const route = useRoute();
const keyword = ref("");
const meals = computed(() => store.state.searchedArea);
const areas = ref([]);

function searchArea() {
  if (keyword.value) {
    store.dispatch("searchArea", keyword.value);
  } else {
    store.commit("setMealsByArea", []);
  }
}

onMounted(() => {
  keyword.value = route.params.name
  if (keyword.value) {
    searchArea()
  }
  axiosClient.get("list.php?a=list").then(({ data }) => {
    areas.value = data.meals;
    
  });
})

// onMounted(() => {
  
// });
</script>
