import { getActiveMenu } from '@/services/rest/menu-service';

export const menuModule = {
    state: {
        activeMenu: {},
        currentSelection: {}
    },

    mutations: {
        loadActiveMenu(state, activeMenu) {
            state.activeMenu = activeMenu;
        },
        addSelection(state, { day, selectedMeal}) {
            state.currentSelection[day.date] = selectedMeal.id;
        },
        submitMenuChoice(state) {
            console.log(state.currentSelection);
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
        submitMenuChoice({ commit }) {
            commit('submitMenuChoice');
        }
    },

    getters: {
        activeMenu: state => state.activeMenu,
        currentSelection: state => state.currentSelection
    }
};
