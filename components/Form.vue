<template>
  <div>
    <div id="step-2">
      <h2 class="title">2. Add Links</h2>
      <div class="field">
        <div class="box">
          <div style="background: #fff; border-radius: 8px" class="p-2">
            <table class="table mx-auto">
              <thead>
                <tr>
                  <th v-for="placeholder in placeholders" :key="placeholder" class="task-placeholder-value has-text-left">
                    <!-- <input v-model="newTask[placeholder]" type="text" class="input"> -->
                    {{ placeHolderTitle(placeholder) }}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(task, index) in paginatedTasks" :key="task.id">
                  <td v-for="placeholder in placeholders" :key="placeholder" class="task-placeholder-value has-text-left">
                    <a :href="task[placeholder]" target="_blank" rel="noopener noreferrer" v-if="placeholder==='tweet_id'">{{ task[placeholder] }}</a>
                    <span v-else>{{ task[placeholder] }}</span>
                  </td>
                  <td>
                    <button class="button is-danger is-outlined is-small is-rounded" @click.prevent="tasks.splice(index, 1)">
                      <font-awesome-icon class="icon is-small" icon="fa-solid fa-trash-can" />
                    </button>
                  </td>
                </tr>
                <tr>
                  <td v-for="(placeholder, placeindex) in placeholders" :key="placeholder" class="task-placeholder-value">
                    <input
                      :ref="`placeholder-${placeindex}`"
                      v-model="newTask[placeholder]"
                      type="url"
                      pattern="https?://.+"
                      class="input is-info task-placeholder-value"
                      placeholder="https://twitter.com/username/status/12345"
                      @keydown.enter.prevent="createTask"
                      required
                      v-if="placeholder === 'tweet_id'"
                    >
                    <input
                      :ref="`placeholder-${placeindex}`"
                      v-model="newTask[placeholder]"
                      v-else
                      class="input is-info task-placeholder-value"
                      :placeholder="placeHolderTitle(placeholder)"
                      @keydown.enter.prevent="createTask"
                      required
                    >
                  </td>
                </tr>
              </tbody>
            </table>
            <pagination
              v-if="tasks"
              :items="tasks.length"
              :page="page"
              :per-page="perPage"
              @setPage="setPage"
            />
          </div>
          <div class="control has-text-centered mt-5">
            <button class="button is-primary is-wide" @click.prevent="createTask">
              Add Task
            </button>
            <div v-if="placeholderError" class="notification is-danger is-light mt-5">
              {{ placeholderError }}
            </div>
          </div>
        </div>
        <div v-if="tasks.length === 0" class="box is-centered">
          <!-- <div class="columns is-centered"> -->
            <!-- <div class="column is-4 has-text-centered py-0">
              <h2 class="subtitle is-6 has-text-weight-bold mb-3">
                Upload tasks
              </h2>
              <div class="file is-boxed mt-3">
                <label class="file-label" style="width: 100%">
                  <input class="file-input" type="file" name="csvtasks" @change="uploadFile">
                  <span class="file-cta" @dragover="dragover" @dragleave="dragleave" @drop="drop">
                    <span class="file-icon">
                      <font-awesome-icon class="is-small" icon="fa-solid fa-upload" />
                    </span>
                    <span class="file-label has-text-grey is-size-7">
                      Drag and drop or browse<br>to choose a CSV file
                    </span>
                  </span>
                </label>
              </div>
              <div>
                <a ref="csvfiledownload" class="is-size-7" href="" :download="`example.csv`">Download example CSV</a>
              </div>
              <p v-if="file.name" class="has-text-success mt-2">
                Imported file: {{ file.name }}
              </p>
              <p v-if="error" class="has-text-danger">
                {{ error }}
              </p>
            </div> -->


            <div v-if="campaign && campaign.info" class=" is-6 py-0 px-2 batch-info">
              <div class="box">
                <span>
                  Amount: 
                </span>
                <span>
                  <strong>{{ repetitions }}</strong>
                </span>
                <input class="slider is-fullwidth is-info" step="1" min="1" max="20" v-model="repetitions" type="range">
                Total Cost
                <strong>{{ parseFloat(campaign.info.reward * tasks.length * repetitions).toFixed(4) }} EFX</strong>
              </div>
            </div>
          <!-- </div> -->
        </div>
      </div>

      <form>
        <div class="field is-grouped is-justify-content-center mt-6">
          <div class="control">
            <button class="button is-outlined is-primary is-wide" @click="cancel">
              Back
            </button>
            <button @click="nextStep" type="submit" :class="{'is-loading': loading}" class="button button is-primary is-wide mr-4" :disabled="!tasks.length">
              Next step
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import Pagination from './Pagination.vue'

function getMatches (string, regex, index) {
  index || (index = 1) // default to the first capturing group
  const matches = []
  let match
  while ((match = regex.exec(string))) {
    matches.push(match[index])
  }
  return matches
}

export default Vue.extend({
  props: ['campaign'],
  data() {
    return {
      step: 1,
      repetitions: 1,
      tempCounter: 0,
      newTask: {
        id: null,
        link: null
      },
      tasks: [],
      file: {
        name: null,
        content: null
      },
      error: null,
      loading: false,
      page: 1,
      perPage: 10,
      type: null,
      placeholders: ['link'],
      placeholderError: null,
      likeCampaign: {id: Number(process.env.NUXT_ENV_CAMPAIGN_LIKE_ID), title: 'Like', },
      followCampaign: {id: Number(process.env.NUXT_ENV_CAMPAIGN_LIKE_ID), title: 'Follow', parameter: 'username' },
      retweetCampaign: {id: Number(process.env.NUXT_ENV_CAMPAIGN_LIKE_ID), title: 'Follow', parameter: 'username' },
      replyCampaign: {id: Number(process.env.NUXT_ENV_CAMPAIGN_LIKE_ID), title: 'Follow', parameter: 'username' }, 
      InstagramCampaign: {id: Number(process.env.NUXT_ENV_CAMPAIGN_LIKE_ID), title: 'instagram', parameter: 'link' }, 
    }
  },
  computed: {
    paginatedTasks () {
      const start = (this.page - 1) * this.perPage
      if (this.tasks) {
        return this.tasks.slice(start, start + this.perPage)
      }
      return []
    },
  },
  components: {Pagination},
  mounted () {
    this.getPlaceholders(this.campaign.info.template)
    this.$nextTick(() => {
      // this.generateCsvData(this.placeholders)
    })
    this.newTask = this.getEmptyTask(this.placeholders)
  },
  created () {
  },
  methods: {
    setPage (newPage) {
      this.page = newPage
    },
    dragover (event) {
      event.preventDefault()
      event.currentTarget.classList.add('dragover')
    },
    dragleave (event) {
      event.currentTarget.classList.remove('dragover')
    },
    onChange () {
      this.filelist = [...this.$refs.file.files]
    },
    createTask () {
      // TODO refactor this into manageable chunks
      
      // Check that all of the placeholders have been filled in. 
      for (const key in this.newTask) {
        if (Object.hasOwnProperty.call(this.newTask, key)) {
          const element = this.newTask[key];
          if (element === null || element === '') {
            this.placeholderError = `Please fill in all the placeholders`
            setTimeout(() => this.placeholderError = null, 5e3)
            return
          }
        }
      }

      let url
      // figure out which campaign is used.
      console.log(this.campaign.id, parseInt(process.env.NUXT_ENV_CAMPAIGN_FOLLOW_ID))
      if (this.campaign.id === parseInt(process.env.NUXT_ENV_CAMPAIGN_INSTAGRAM_ID)) {
        
        try {
          // Make sure the url is constructed correctly.
            if (this.newTask.instagramLink.includes('https://') || this.newTask.instagramLink.includes('http://')) {
              url = new URL(this.newTask.instagramLink)
            } else {
              url = new URL(`https://${this.newTask.instagramLink}`)
            }
        } catch (error) {
            console.error(error)
            this.placeholderError = `Please fill in all the placeholders`
            setTimeout(() => this.placeholderError = null, 5e3)
        }

        console.log(url, !url.pathname.includes('/p/'), !url.pathname.includes('/reel/'))
        if (url.hostname !== 'www.instagram.com') {
          this.placeholderError = `Please enter a valid instagram link.`
          setTimeout(() => this.placeholderError = null, 10e3)
          return
        } else if (!url.pathname.includes('/p/') && !url.pathname.includes('/reel/')) {
          this.placeholderError = `Please enter a valid instagram link: https://www.instagram.com/reel/Chg66lVlP2J/ or https://www.instagram.com/p/Chg66lVlP2J/`
          setTimeout(() => this.placeholderError = null, 10e3)
          return
        } else {
          this.newTask.instagramLink = `https://www.instagram.com${url.pathname}`
          this.tasks.push(this.newTask)
        }

      } else if (this.campaign.id === parseInt(process.env.NUXT_ENV_CAMPAIGN_FOLLOW_ID)) {

        try {
          if (this.newTask.twitter_handle.includes('https://') || this.newTask.twitter_handle.includes('http://')) {
            url = new URL(this.newTask.twitter_handle)
          } else {
            url = new URL(`https://${this.newTask.twitter_handle}`)
          }
          
        } catch (error) {
          console.error(error)
          this.placeholderError = `Please fill in all the placeholders`
          setTimeout(() => this.placeholderError = null, 5e3)
        }
        
        if (url.hostname !== 'twitter.com') {
          this.placeholderError = `Please enter a valid twitter handle: https://twitter.com/username`
          setTimeout(() => this.placeholderError = null, 10e3)
          return
        } else {
          this.newTask.twitter_handle = `https://www.twitter.com${url.pathname}`
          this.tasks.push(this.newTask)
        }


      } else {
        // Twitter campaignsfaw
        // Check that the link is valid.
        // users are instructed to pass in a url. but the template expects a tweet_id
        try {
          if (this.newTask.tweet_id.includes('https://') || this.newTask.tweet_id.includes('http://')) {
            // console.debug('protocol already included  ')
            url = new URL(this.newTask.tweet_id)
          } else {
            // console.debug('add protocol to tweet_id')
            url = new URL(`https://${this.newTask.tweet_id}`)
          }
        } catch (error) {
          console.error(error)
          this.placeholderError = `Please enter a valid twitter.com url`
          setTimeout(() => this.placeholderError = null, 5e3)
          return
        }
        if (url.hostname !== 'twitter.com' || !url.pathname.includes('/status/') || url.pathname.split('/')[3].length === 0) {
          this.placeholderError = `Please enter a valid tweet url: https://twitter.com/username/status/123456789`
          setTimeout(() => this.placeholderError = null, 5e3)
          return
        } else {
          this.newTask.tweet_id = `${url.hostname}${url.pathname}`
          this.tasks.push(this.newTask)
        }
      }
      



      this.newTask.id = this.tempCounter++
      this.newTask = this.getEmptyTask(this.placeholders)
      this.$nextTick(() => {
        this.$refs['placeholder-0'][0].focus()
      })
    },
    drop (event) {
      event.preventDefault()
      this.uploadFile(event.dataTransfer.files ? event.dataTransfer.files : null, true)
      event.currentTarget.classList.remove('dragover')
    },
    uploadFile (event, drop) {
      this.file = {
        name: null,
        content: null
      }
      this.error = null
      const file = drop ? event[0] : event.target.files[0]
      if (file) {
        this.file.name = file.name
        const reader = new FileReader()
        reader.onload = (e) => {
          this.file.content = this.csvToJson(e.target.result)
          this.file.content.forEach((element) => {
            this.newTask = element
            this.createTask()
            let containsPlaceholder = false
            this.placeholders.forEach((placeholder) => {
              if (element[placeholder]) {
                containsPlaceholder = true
              }
            })
            if (!containsPlaceholder) {
              this.$emit('error', 'Placeholder not found in CSV')
            }
          })
        }
        reader.readAsText(file)
      } else {
        this.$emit('error', 'Could not find file')
        this.file = null
      }
    },
    /**
     * From: https://stackoverflow.com/questions/59218548/what-is-the-best-way-to-convert-from-csv-to-json-when-commas-and-quotations-may/59219146#59219146
     * Takes a raw CSV string and converts it to a JavaScript object.
     */
    csvToJson (string, headers, quoteChar = '"', delimiter = ',') {
      const regex = new RegExp(`\\s*(${quoteChar})?(.*?)\\1\\s*(?:${delimiter}|$)`, 'gs')
      const match = string => [...string.matchAll(regex)].map(match => match[2])
        .filter((_, i, a) => i < a.length - 1) // cut off blank match at end
      const lines = string.split('\n')
      const heads = headers || match(lines.splice(0, 1)[0])
      return lines.map(line => match(line).reduce((acc, cur, i) => ({
        ...acc,
        [heads[i] || `extra_${i}`]: (cur.length > 0) ? (Number(cur) || cur) : null
      }), {}))
    },
    getPlaceholders (template) {
      const placeholders = getMatches(
        template,
        /\$\{\s?(\w+)\s?\|?\s?(\w*)\s?\}/g
      )
      const unique = [...new Set(placeholders)]
      this.placeholders = unique
    },
    generateCsvData (placeholders) {
      const link = this.$refs.csvfiledownload
      let csvContent = 'data:text/csv;charset=utf-8,'
      csvContent += [
        Object.values(placeholders).join(','),
        placeholders.map(item => item + '-value-task-1'),
        placeholders.map(item => item + '-value-task-2'),
        placeholders.map(item => item + '-value-task-3')
      ].join('\n')
        .replace(/(^\[)|(\]$)/gm, '')
      link.href = encodeURI(csvContent)
    },
    getEmptyTask (placeholders) {
      const emptyTask = {}
      placeholders.forEach((placeholder) => {
        emptyTask[placeholder] = ''
      })
      return emptyTask
    },
    nextStep () {
      this.$emit('nextStep')
      this.$emit('setBatch', this.tasks, this.repetitions)
    },
    cancel () {
      this.$emit('previousStep')
    },
    /**
     * What are the placeholder values that can appear?
     * placeholders => twitter campaigns
     * `tweet_id` => like
     * `follow_handle` => follow
     * `tweet_instructions`  + `tweet_id` => retweet, reply
     */
    placeHolderTitle (placeholder) {
      switch (placeholder) {
        case 'tweet_id':
          return 'Link to Tweet';
        case 'twitter_handle':
          return 'Twitter Handle';
        case 'tweet_instructions':
          return 'Tweet Instructions';
        default:
          return placeholder;
      }
    },
  }
})
</script>
<style lang="scss" scoped>
.is-boxed {
  .file-cta {
    background: #fff;
    border: none;
    background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='8' ry='8' stroke='%23A9B1BD' stroke-width='4' stroke-dasharray='6%2c14' stroke-dashoffset='10' stroke-linecap='square'/%3e%3c/svg%3e");
  }
}
.dragover {
  background-color: #e7f3ff !important;
}
table {
  background: transparent;
  border-spacing: 10px;
  width: 100%;
  text-align: center;
  border-radius: 8px;
  td {
    border-top: 1px solid #E8EEFF;
  }
  th {
    border: none;
  }
}
div.box {
  background: #F7F9FB;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: none;
}
.button.is-wide {
  min-width: 220px;
}
.batch-info {
  padding-right: 0;
  .box {
    width: 100%;
    height: auto;
    padding: 1rem;
    background: #fff;
    button {
      font-size: .9rem;
    }
  }
}
</style>