<template>
  <section class="section">
    <div class="container">
      <div>
        <div class="py-2">
          <h2 class="title is-4 mt-6 is-spaced">
            Dashboard
          </h2>
          <p>Recent Orders <sup>*</sup></p>
          <div v-if="!transactionsIsEmpty" class="box table-container mt-5">
            <table class="table" style="width: 100%">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Type</th>
                  <!-- <th>Date</th> -->
                  <th>Workers</th>
                  <th>Total</th>
                  <!-- <th>Status</th> -->
                  <th>Actions</th>

                </tr>
              </thead>
              <tbody>
                <tr v-for="(tx, idx) in paginatedTransactions" :key="tx.idx">

                  <!-- <td>{{ tx }}</td> -->
                 
                  <td>
                    {{ idx + 1 }}
                  </td>
                  <td>
                    {{ tx.campaign.title }}
                  </td>
                  <!-- <td>
                    {{ tx.date }}
                  </td> -->
                  <td>
                    {{ tx.repetitions }}
                  </td>
                  <td>
                    {{ tx.totalCost }} EFX
                  </td>
                  <!-- <td> -->
                    <!-- <progress class="progress is-large"></progress> -->
                  <!-- </td> -->
                  <td>
                    <div class="buttons">
                      <nuxt-link :to="`/batch/${tx.batchId}`" class="button is-info is-small is-rounded">
                        <span class="icon-text is-vcentered">
                          <span>Details</span>
                          <span class="icon is-small">
                            <font-awesome-icon icon="fa-solid fa-eye" />
                          </span>
                        </span>
                      </nuxt-link>
                      <button class="button is-small is-danger is-rounded" @click="removeTransaction(tx)">
                        <font-awesome-icon class="icon is-small" icon="fa-solid fa-trash-can" />
                      </button>
                    </div>
                  </td>

                </tr>
              </tbody>
            </table>
          </div>
          <div v-else class="box has-text-centered">
            <p class="is-size-5">No orders found</p>
          </div>
          <pagination
            v-if="transactions"
            :items="transactions.length"
            :page="page"
            :per-page="perPage"
            @setPage="setPage"
          />
          <p class="is-size-7">
            <sup>*</sup> Note that when the localstorage is cleared all orders will be cleared as well.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { mapState, mapGetters, mapActions } from 'vuex'
import Pagination from '@/components/Pagination.vue'

export default {
  components: { Pagination },
  filters: {},
  middleware: [],
  data () {
    return {
      loading: null,
      page: 1,
      perPage: 10,
      pages: []
    }
  },
  computed: {
    ...mapGetters({
      transactionById: 'transactionById',
      allTransactions: 'transaction/allTransactions',
      transactionsIsEmpty: 'transaction/transactionsIsEmpty'
    }),
    ...mapState({
      transactions: state => state.transactions
    }),
    paginatedTransactions () {
      const start = (this.page - 1) * this.perPage
      if (this.allTransactions) {
        return this.allTransactions.slice(start, start + this.perPage)
      }
      return []
    }
  },
  methods: {
    ...mapActions({
      removeTransaction: 'transaction/removeTransaction'
    }),
    setPage (newPage) {
      this.page = newPage
    }
  }
}
</script>
