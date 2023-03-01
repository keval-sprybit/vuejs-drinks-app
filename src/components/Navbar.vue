<template>
  <header class="bg-white shadow h-16 flex justify-between items-stretch">
    <router-link
      :to="{ name: 'home' }"
      class="inline-flex items-center h-full px-5 text-red-500 font-bold"
    >
      Home
    </router-link>
    <div class="flex items-center gap-1">
      <router-link
        :to="{ name: 'byName' }"
        class="inline-flex items-center px-2 h-full transition-colors hover:bg-red-500 hover:text-white"
      >
        Search Drinks
      </router-link>

      <router-link
        :to="{ name: 'byLetter' }"
        class="inline-flex items-center px-2 h-full transition-colors hover:bg-red-500 hover:text-white"
      >
        Drinks By Letter
      </router-link>
     
      <router-link
        :to="{ name: 'ingredients' }"
        class="inline-flex items-center px-2 h-full transition-colors hover:bg-red-500 hover:text-white"
      >
        Drinks By Ingredients
      </router-link>

      <router-link
        :to="{ name: 'categories' }"
        class="inline-flex items-center px-2 h-full transition-colors hover:bg-red-500 hover:text-white"
      >
        Meals By Category
      </router-link>
    </div>
  </header>
</template>
