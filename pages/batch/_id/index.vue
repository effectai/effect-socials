<template>
  <div class="section pt-6">
    <div class="columns">
      <div class="column is-three-fifths is-offset-one-fifth">
        <h2 class="title">Order</h2>
        <nav class="breadcrumb" aria-label="breadcrumbs">
          <ul>
            <li><nuxt-link to="/">Home</nuxt-link></li>
            <li><nuxt-link to="/batch">Order History</nuxt-link></li>
            <li class="is-active"><nuxt-link to="#" aria-current="page">Order</nuxt-link></li>
          </ul>
        </nav>
        <div v-if="loading" class="loading-text">
          Loading
        </div>
        <div v-else>
          <div v-if="batch && campaign">

            <br>
            <div class="box media">
              <figure class="media-left">
                <p class="image is-128x128 is-square">
                  <img :src="campaign.info.image">
                </p>
              </figure>
              <div class="media-content">
                <div class="content">
                  <p class="subtitle">
                    <a :href="`https://app.effect.network/campaigns/${batch.campaign_id}`" target="_blank" rel="noopener noreferrer">
                      <span class="icon-text">
                        <span>{{ campaign.info.title }}</span>
                        <span><font-awesome-icon class="mx-1 icon is-small" icon="fa-solid fa-arrow-up-right-from-square" /></span>
                      </span>
                    </a>
                  </p>
                  <hr>

                  <p class="subtitle">Order</p>
                  <div class="px-6">
                    <table class="table is-narrow is-centered">
                        <thead></thead>
                        <tbody>
                            <tr>
                                <td>Order-ID</td>
                                <td>
                                  <a :href="`https://app.effect.network/campaigns/4{batch.campaign_id}/${id}`" target="_blank" rel="noopener noreferrer">
                                  <span class="icon-text">
                                    <span>{{ id }}</span>
                                    <span><font-awesome-icon class="mx-1 icon is-small" icon="fa-solid fa-arrow-up-right-from-square" /></span>
                                  </span>
                                  </a>
                                </td>
                            </tr>
                            <tr>
                                <td>Order-Status</td>
                                <td>{{ batchPercentageDone }}%</td>
                            </tr>
                            <tr>
                                <td>Tasks</td>
                                <td>{{batch.num_tasks}}&nbsp;×</td>
                            </tr>
                            <tr>
                                <td>Amount</td>
                                <td>{{batch.repetitions}}&nbsp;×</td>
                            </tr>
                            <tr>
                                <td>Cost per Task</td>
                                <td><strong>{{campaign.info.reward}} EFX</strong> </td>
                            </tr>
                        </tbody>

                        <tfoot>
                            <tr>
                                <td>Total Cost</td>
                                <td><strong>{{campaign.info.reward * batch.repetitions}} EFX</strong> </td>
                            </tr>
                            <tr class="is-size-7">
                              <td>
                                  <span>Network Fee</span>
                                  <span class="icon is-small" data-tooltip="10% of the transaction is sent to the Effect Network DAO. Already included.">
                                      <font-awesome-icon icon="fa-solid fa-circle-info"/>
                                  </span>
                              </td>
                              
                              <!-- TODO retrieve fee percentage from force settings table or effect-js config -->
                              <td>{{ campaign.info.reward * batch.repetitions * 0.10}} <i>EFX</i></td>
                          </tr>
                        </tfoot>
                    </table>                

                  </div>
                  <hr>

                  <p class="subtitle">Tasks</p>
                  <table class="table is-narrow">
                    <thead></thead>
                    <tbody>
                      <tr v-for="task in batchIpfs.tasks" :key="task.link_id">
                        <td>{{task.tweet_id}}</td>
                      </tr>
                    </tbody>
                  </table>

                  <!-- <div id="tweet"></div> -->

                  <hr>

                  <p class="subtitle">Results ({{ batch.tasks_done }}/{{ batch.num_tasks * batch.repetitions }})</p>
                  <div v-if="results && results.length > 0">
                    <table class="table" style="width: 100%">
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th>Result</th>
                          <th>Submitted on</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr
                          v-for="r in results"
                          :key="r.id"
                        >
                          <td>{{ r.id }}</td>
                          <td>{{ r.data }}</td>
                          <td>{{ r.submitted_on }}</td>
                        </tr>
                      </tbody>
                    </table>
                    <br>
                    <div class="buttons is-centered">
                      <button class="button is-primary mx-auto is-centered" @click.prevent="downloadTaskResults()">
                        Download results
                      </button>
                    </div>
                  </div>
                  <div v-else>
                    No results yet, please wait while someone starts working on your order.
                  </div>                
                </div>
              </div>
            </div>
          </div>
          <div v-else>
            <p>No batch found</p>
          </div>          
        </div>

      </div>
    </div>
  </div>
</template>

<script>
const jsonexport = require('jsonexport/dist')
import * as effectsdk from '@effectai/effect-js'

export default {
  data() {
    return {
      loading: true,
      effectsdk: null,
      id: parseInt(this.$route.params.id),
      tasks: null,
      results: null,
      timer: null,
      batch: null,
      batchIpfs: null,
      campaign: null,
    }
  },
  mounted () {
    this.effectsdk = new effectsdk.EffectClient(process.env.NUXT_ENV_EOS_ENV)
    this.getBatch()
    this.getResults()
    this.timer = setInterval(() => {
      this.getResults()
    }, 30e3)
  },
  computed: {
    batchPercentageDone() {
      if (this.batch) {
        return Math.round((this.batch.tasks_done / (this.batch.num_tasks * this.batch.repetitions)) * 100)
      }
      return 0
    }
  },
  methods: {
    async getBatch () {
      this.loading = true
      this.batch = await this.effectsdk.force.getBatchById(this.id)
      this.batchIpfs = await this.effectsdk.force.getIpfsContent(this.batch.content.field_1)
      this.campaign = await this.effectsdk.force.getCampaign(this.batch.campaign_id)
      this.loading = false
      console.log('getBatch', this.batch, this.batchIpfs, this.campaign)
    },
    async getResults() {
      console.log('getting results...')
      let oldResultsLength = 0
      if (this.results){
        oldResultsLength = this.results.length
      }
      this.results = await this.effectsdk.force.getSubmissionsOfBatch(this.id)
      console.log('results', this.results)
      // check if results changed
      if (this.results.length !== oldResultsLength) {
        console.log('results changed')
        this.getBatch()
      }
    },
    async downloadTaskResults () {
      try {
        // add columns from data object to the submission object itself
        const parsedSubmissions = await Promise.all(this.results.map(async (x) => {
          const sub = {}
          sub.data = JSON.parse(x.data)

          // add answers as seperate columns
          for (const result of Object.keys(sub.data)) {
            x[result] = sub.data[result]
          }

          // remove unnecassary keys for csv
          delete x.content
          delete x.batch_id
          delete x.id
          delete x.leaf_hash
          delete x.paid

          // put these attributes first
          const columnOrder = {
            link_id: null,
            account_id: null
          }
          x = Object.assign(columnOrder, x)

          return x
        }))
        await jsonexport(parsedSubmissions, (err, csv) => {
          if (err) {
            return console.error(err)
          }
          const filename = `task_results_${this.id}.csv`
          const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' })
          if (navigator.msSaveBlob) { // IE 10+
            navigator.msSaveBlob(blob, filename)
          } else {
            const link = document.createElement('a')
            if (link.download !== undefined) { // feature detection
              // Browsers that support HTML5 download attribute
              const url = URL.createObjectURL(blob)
              link.setAttribute('href', url)
              link.setAttribute('download', filename)
              link.style.visibility = 'hidden'
              document.body.appendChild(link)
              link.click()
              document.body.removeChild(link)
            }
          }
        })
      } catch (error) {
        console.error(error)
      }
    }
  },
  beforeDestroy() {
    clearInterval(this.timer)
  }
}
</script>

<style lang="scss" scoped>
</style>
