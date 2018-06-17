import * as menuService from '../services/rest/menu-service';

export const menusModule = {
    state: {
        menus: [],
        activeMenu: null
    },

    mutations: {
        setMenus(state, menus) {
            state.menus = menus;
        },

        setActiveMenu(state, activeMenu) {
            state.activeMenu = activeMenu;
        },
        
        addMenu(state, menu) {
            state.menus.push(menu);
        },

        removeMenu(state, menu) {
            state.menus.splice(state.menus.indexOf(menu), 1);
        }
    },
    
    actions: {
        async loadMenus({ commit }) {
            const menus = await menuService.getMenus();
            if (menus) {
                commit('setMenus', menus);
            }
        },

        async loadActiveMenu({ commit }) {
            const activeMenu = await menuService.getActiveMenu();
            if (activeMenu) {
                commit('setActiveMenu', activeMenu);
            }
        },

        async createMenu({ commit }, _menu) {
            const menu = await menuService.createMenu(_menu);
            if (menu) {
                commit('addMenu', menu)
            }
        },

        async removeMenu({ commit }, menu) {
            await menuService.removeMenu(menu.id);
            commit('removeMenu', menu);
        }
    },

    getters: {
        menus: state => state.menus,
        activeMenu: state => state.activeMenu
    }
};
