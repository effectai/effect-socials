<template>
  <div class="section pt-6">
    <div class="columns">
      <div class="column is-three-fifths is-offset-one-fifth">
        <h2 class="title">Order</h2>
        <nav class="breadcrumb" aria-label="breadcrumbs">
          <ul>
            <li><nuxt-link to="/">Home</nuxt-link></li>
            <li><nuxt-link to="/batch">Dashboard</nuxt-link></li>
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

                  <p class="subtitle has-text-black">Order</p>
                  <div class="px-6">
                    <p>Status: {{ batchPercentageDone }}%</p>
                    <progress class="progress is-info" :value="batchPercentageDone"></progress>
                  </div>
                  <br>
                  <div class="px-6 is-centered table-container">
                    <table class="table is-narrow is-centered px-6">
                        <thead></thead>
                        <tbody>
                            <tr>
                                <td>Order-ID</td>
                                <td>
                                  <a :href="`https://app.effect.network/campaigns/${batch.campaign_id}/${id}`" target="_blank" rel="noopener noreferrer">
                                  <span class="icon-text">
                                    <span>{{ id }}</span>
                                    <span><font-awesome-icon class="mx-1 icon is-small" icon="fa-solid fa-arrow-up-right-from-square" /></span>
                                  </span>
                                  </a>
                                </td>
                            </tr>
                            <tr>
                              <td>BlockExplorer</td>
                              <td>
                                <a :href="`https://bloks.io/transaction/${transaction.eos.transaction.transaction_id}`" class="" target="_blank" rel="noopener noreferrer">
                                <span class="icon-text">
                                  <span>BlockExplorer</span>
                                  <span><font-awesome-icon class="mx-1 icon is-small" icon="fa-solid fa-arrow-up-right-from-square" /></span>
                                </span>
                                </a>
                              </td>
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
                                <td><strong>{{campaign.info.reward * batch.num_tasks * batch.repetitions}} EFX</strong> </td>
                            </tr>
                            <tr class="is-size-7">
                              <td>
                                  <span>Network Fee</span>
                                  <span class="icon is-small" data-tooltip="10% of the transaction is sent to the Effect Network DAO. Already included.">
                                      <font-awesome-icon icon="fa-solid fa-circle-info"/>
                                  </span>
                              </td>
                              <td>{{ campaign.info.reward * batch.num_tasks * batch.repetitions * 0.10}} <i>EFX</i></td>
                          </tr>
                        </tfoot>
                    </table>                

                  </div>
                  <hr>

                  <p class="subtitle has-text-black">Links</p>
                  <div class="px-6">
                    <vsa-list v-if="campaign.id === 14 || campaign.id === 16 || campaign.id === 17">
                      <vsa-item v-for="(task, idx) in batchIpfs.tasks" :key="idx">
                        <vsa-heading>
                          <span class="icon-text">
                            <span>{{ idx }}:&nbsp;{{ task.tweet_id }}</span>
                            <!-- <span><font-awesome-icon class="mx-1 icon is-small" icon="fa-solid fa-arrow-up-right-from-square" /></span> -->
                          </span>
                        </vsa-heading>

                        <vsa-content>
                          <Tweet :id="task.tweet_id" :options="{ cards: 'hidden' }" >
                            <div class="mx-auto is-centered">
                              <progress class="progress mx-auto is-info"></progress>
                            </div>
                          </Tweet>
                        </vsa-content>

                      </vsa-item>
                    </vsa-list>

                    <vsa-list v-else-if="campaign.id === 15">
                      <vsa-item v-for="(task, idx) in batchIpfs.tasks" :key="idx">
                        <vsa-heading>
                          <span class="icon-text">
                            <span>{{ task.twitter_handle }}</span>
                            <!-- <span><font-awesome-icon class="mx-1 icon is-small" icon="fa-solid fa-arrow-up-right-from-square" /></span> -->
                          </span>
                        </vsa-heading>

                        <vsa-content>
                          <Timeline :id="task.twitter_handle" sourceType="profile" :options="{ tweetLimit: '1' }" >
                            <progress class="progress mx-auto is-info"></progress>
                          </Timeline>
                        </vsa-content>
                      </vsa-item>
                    </vsa-list>

                    <vsa-list v-else>
                      <vsa-item v-for="(task, idx) in batchIpfs.tasks" :key="idx">
                        <vsa-heading>
                          <span class="icon-text">
                            <span>{{ idx }}</span>
                            <!-- <span><font-awesome-icon class="mx-1 icon is-small" icon="fa-solid fa-arrow-up-right-from-square" /></span> -->
                          </span>
                        </vsa-heading>

                        <vsa-content>
                          {{ task }}
                        </vsa-content>
                      </vsa-item>
                    </vsa-list>


                  </div>

                  <hr>

                  <p class="subtitle has-text-black">Results ({{ batch.tasks_done }}/{{ batch.num_tasks * batch.repetitions }})</p>
                  <div v-if="results && results.length > 0" class="table-container px-6">
                    <table class="table" style="width: 100%">
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th>Worker-ID</th>
                          <th>Submitted on</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr
                          v-for="r in results"
                          :key="r.id"
                        >
                          <!-- <td>{{r}}</td> -->
                          <td>{{ r.id }}</td>
                          <td>
                            {{ r.account_id }}
                            <!-- <a :href="`https://app.effect.network/profile/${r.account_id}`" target="_blank" rel="noopener noreferrer"> -->
                              <!-- {{ r.account_id }} -->
                              <!-- <span class="icon-text"> -->
                                <!-- <span><font-awesome-icon class="mx-1 icon is-small" icon="fa-solid fa-arrow-up-right-from-square" /></span> -->
                              <!-- </span> -->
                            <!-- </a> -->
                          </td>
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
                  <div v-else class="has-text-centered">
                    <br>
                    <p>
                      No results yet.
                      <br>
                      Please wait while someone starts working on your order.
                    </p>
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
import { Tweet, Timeline } from 'vue-tweet-embed'
import { mapGetters } from 'vuex'

export default {
  components: {
    Tweet,
    Timeline
  },
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
      transaction: null
    }
  },
  mounted () {
    this.effectsdk = new effectsdk.EffectClient(process.env.NUXT_ENV_EOS_ENV)
    this.transaction = this.transactionByBatchId(this.id)
    this.getBatch()
    this.getResults()
    this.timer = setInterval(() => {
      this.getResults()
    }, 30e3)
  },
  computed: {
    ...mapGetters({
      transactionByBatchId: 'transaction/transactionByBatchId',
    }),
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
