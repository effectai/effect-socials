<template>
  <div>
    <div id="step-2">
      <h2 class="title">2. Create your batch of tasks</h2>
      <div class="field">
        <div class="box">
          <div style="background: #fff; border-radius: 8px" class="p-2">
            <table class="table mx-auto">
              <thead>
                <tr>
                  <th v-if="tasks.length">
                    Index
                  </th>
                  <th v-for="placeholder in placeholders" :key="placeholder" class="task-placeholder-value">
                    <!-- <input v-model="newTask[placeholder]" type="text" class="input"> -->
                    {{ placeholder }}
                  </th>
                  <th v-if="tasks.length">
                    Remove
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(task, index) in paginatedTasks" :key="task.id">
                  <td>{{ task.id }}</td>
                  <td v-for="placeholder in placeholders" :key="placeholder" class="task-placeholder-value">
                    {{ task[placeholder] }}
                  </td>
                  <td>
                    <button class="button is-danger is-outlined is-small is-rounded" @click.prevent="tasks.splice(index, 1)">
                      <font-awesome-icon class="icon is-small" icon="fa-solid fa-trash-can" />
                    </button>
                  </td>
                </tr>
                <tr>
                  <td v-if="tasks.length" />
                  <td v-for="(placeholder, placeindex) in placeholders" :key="placeholder" class="task-placeholder-value">
                    <input
                      :ref="`placeholder-${placeindex}`"
                      v-model="newTask[placeholder]"
                      type="text"
                      class="input is-info task-placeholder-value"
                      placeholder="Type here"
                      @keydown.enter.prevent="createTask"
                    >
                  </td>
                  <td v-if="tasks.length" />
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
          </div>
        </div>
        <div class="box">
          <div class="columns">
            <div class="column is-3 has-text-centered py-0">
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
            </div>

            <div class="column is-3 py-0">
              <div class="field">
                <label class="label">Repetitions</label>
                <div class="control">
                  <input v-model="repetitions" class="input" type="number" min="1" required>
                </div>
              </div>
            </div>

            <div v-if="campaign && campaign.info" class="column is-3 py-0 columns batch-info">
              <div class="column">
                <div class="box">
                  <h2>Total Cost</h2>
                  <strong>{{ parseFloat(campaign.info.reward * tasks.length * repetitions).toFixed(4) }} EFX</strong>
                </div>
              </div>
            </div>
          </div>
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
      this.generateCsvData(this.placeholders)
    })
    this.newTask = this.getEmptyTask(this.placeholders)
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
      // An temp id is needed for :key=task.id
      this.newTask.id = this.tempCounter++
      this.tasks.push(this.newTask)
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
              this.error = 'Placeholder not found in CSV'
            }
          })
        }
        reader.readAsText(file)
      } else {
        this.error = 'Could not find file'
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
      console.log('TEST', csvContent)
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
    }
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