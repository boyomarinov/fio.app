import * as mealService from '../services/rest/meal-service'; 

export const mealsModule = {
    state: {
        meals: []
    },

    mutations: {
        setMeals(state, meals) {
            state.meals = meals;
        },
        
        addMeal(state, meal) {
            state.meals.push(meal);
        },

        removeMeal(state, meal) {
            state.meals.splice(state.meals.indexOf(meal), 1);
        }
    },
    
    actions: {
        async loadMeals({ commit }) {
            const meals = await mealService.getMeals();
            if (meals) {
                commit('setMeals', meals);
            }
        },

        async createMeal({ commit }, _meal) {
            const meal = await mealService.createMeal(_meal);
            if (meal) {
                commit('addMeal', meal)
            }
        },

        async removeMeal({ commit }, meal) {
            await mealService.removeMeal(meal.id);
            commit('removeMeal', meal);
        }
    },

    getters: {
        meals: state => state.meals
    }
};