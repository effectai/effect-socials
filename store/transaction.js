export default {
    namespaced: true,
    modules: {},
    mutations: {
      ADD_TRANSACTION (state, transaction) {
        if (state.transactions === null) { state.transactions = {} }
        if (transaction) {
            state.transactions.push(transaction)
        }
      }
    },
    getters: {
      transactionById (state) {
        return id => state.transactions ? state.transactions.find(c => c.id === id) : null
      },
      transactionsByUser (state) {
        return userId => state.transactions ? state.transactions[userId] : null
      }
    },
    actions: {
      addTransaction ({ commit }, transaction) {
        if (transaction) {
          commit('ADD_TRANSACTION', transaction)
        }
      }
    },
    state: () => {
      return {
        transactions: {}
      }
    }
  }
  