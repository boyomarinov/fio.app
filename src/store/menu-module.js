import { getActiveMenu } from '@/services/rest/menu-service';
import { createOrder } from '@/services/rest/orders-service';

export const menuModule = {
    state: {
        activeMenu: {},
        currentSelection: {},
        currentSelectionComplete: false
    },

    mutations: {
        loadActiveMenu(state, activeMenu) {
            state.activeMenu = activeMenu;
        },
        addSelection(state, { day, selectedMeal}) {
            state.currentSelection[day.date] = selectedMeal.id;
            state.activeMenu.days.find((d) => d.date === day.date).complete = true;
        },
        setSelectionComplete(state) {
            const activeMenuDays = state.activeMenu.days;
            state.currentSelectionComplete = activeMenuDays.filter((d) => d.complete).length === activeMenuDays.length;
        },
        submitMenuChoice(state) {
            for (let index in state.currentSelection) {
                createOrder({
                    menu: { id: state.activeMenu.id },
                    day: { id: index },
                    user: { id: 1 },
                    meal: { id: state.currentSelection[index] }
                });
            }
        }
    },

    actions: {
        async loadActiveMenu({ commit }) {
            const activeMenu = await getActiveMenu();
            if (activeMenu) {
                commit('loadActiveMenu', activeMenu)
            }
        },
        addSelection({ commit }, { day, selectedMeal }) {
            commit('addSelection', { day, selectedMeal});
        },
        setSelectionComplete({ commit }) {
            commit('setSelectionComplete');
        },
        submitMenuChoice({ commit }) {
            commit('submitMenuChoice');
        }
    },

    getters: {
        activeMenu: state => state.activeMenu,
        currentSelection: state => state.currentSelection,
        currentSelectionComplete: state => state.currentSelectionComplete
    }
};
