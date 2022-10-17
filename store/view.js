/**
 * Store View
 * Used to determine if the user has already visted the site and we should load in the shepherd tour
 * The default state is true, and the user will be shown the tour
 * If the user has already visited the site, the state will be false and the tour will not be shown
 * This makes sense because the narrative is should shepherd be loaded in?
 * If the user has already visited the site, then the answer is no thus false
 * If the user has not visited the site, then the answer is yes thus true 
 * 
 * There should be a button in order to reset the state to false, so that the user can see the tour again
 * Or should the button be to restart the tour again without resetting the state?
 * I'm thinkin it should be the latter, so that the user can see the tour again without having to reset the state
 */

export default {
  namespaced: true,
  modules: {},
  mutations: {
    SET_SHEPHERD (state, value) {
      state.shepherd = false
    }
  },
  state: () => {
    return {
      shepherd: true
    }
  }
}
