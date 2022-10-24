import VuexPersistence from 'vuex-persist'

const vuexLocal = new VuexPersistence({
  storage: process.client ? window.localStorage : null,
  modules: ['transaction', 'view']
})

export const plugins = [vuexLocal.plugin]
