<template>
  <div class="section pt-6">
    <div class="columns">
      <div class="column is-three-fifths is-offset-one-fifth">
        <h2 class="title">Task results</h2>
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
          <button class="button is-primary" @click.prevent="downloadTaskResults()">
            Download results
          </button>
        </div>
        <div v-else>
          No tasks found
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
      effectsdk: null,
      id: parseInt(this.$route.params.id),
      results: null,
      timer: null,
    }
  },
  created () {
    this.getResults();
    this.timer = setInterval(() => {
      this.getResults();
    }, 500000)
  },
  methods: {
    async getResults() {
      console.log('getting results...')
      this.effectsdk = new effectsdk.EffectClient(process.env.NUXT_ENV_EOS_ENV)
      this.results = await this.effectsdk.force.getSubmissionsOfBatch(this.id)
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
    },
  },
  beforeDestroy() {
    clearInterval(this.timer)
  }
}
</script>

<style lang="scss" scoped>
</style>
