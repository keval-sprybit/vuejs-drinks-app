<template>
  <div class="p-8 pb-0">
    <h1 class="text-4xl font-bold mb-4 text-green-500">Category</h1>
  </div>
  <div class="px-8">
    <input
      type="text"
      v-model="keyword"
      class="rounded border-2 bg-white border-gray-200 focus:ring-green-500 focus:border-green-500 mb-3 w-full"
      placeholder="Search for Category"
    />
    <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
      <a href="#"
        @click.prevent="openCategory(category)"
        v-for="category of computedIngredients"
        :key="category.strCategory"
        class="block bg-white rounded p-3 mb-3 shadow"
      >
        <h3 class="text-2xl font-bold mb-2">{{ category.strCategory }}</h3>
      </a>
    </div>
  </div>
</template>

<script setup>
import { computed } from "@vue/reactivity";
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import axiosClient from "../axiosClient";
import store from "../store";

const router = useRouter();
const keyword = ref("");
const category = ref([]);
const computedIngredients = computed(() => {
  if (!computedIngredients) return category;
  return category.value.filter((i) =>
    i.strCategory.toLowerCase().includes(keyword.value.toLowerCase())
  );
});

function openCategory(category) {
store.commit('setCategory', category)
router.push({
    name: "byCategory",
    params: { category: category.strCategory },
  });

}

onMounted(() => {
  axiosClient.get("list.php?c=list").then(({ data }) => {
    category.value = data.drinks;
  });
});
</script>
