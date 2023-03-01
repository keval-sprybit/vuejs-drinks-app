import axiosClient from '../axiosClient';

export function searchMeals({ commit }, keyword) {
  axiosClient.get(`search.php?s=${keyword}`)
    .then(({ data }) => {
      commit('setSearchedMeals', data.drinks)
    })
}
export function searchArea({ commit }, letter) {
  axiosClient.get(`filter.php?a=${letter}`)
    .then(({ data }) => {
      commit('setMealsByArea', data.drinks)
    })
}

export function searchMealsByLetter({ commit }, letter) {
  
  axiosClient.get(`search.php?f=${letter}`)
    .then(({ data }) => {
      commit('setMealsByLetter', data.drinks)
    })
}

export function searchMealsByIngredient({ commit }, ing) {
  axiosClient.get(`filter.php?i=${ing}`)
    .then(({ data }) => {
      commit('setMealsByIngredients', data.drinks)
    })
}
export function searchMealsByCategory({ commit }, category) {
  axiosClient.get(`filter.php?c=${category}`)
    .then(({ data }) => {
      commit('setMealsByIngredients', data.drinks)
    })
}