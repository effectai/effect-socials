<template>
  <div class="container pt-6">
    <div class="columns">
      <div class="column is-three-fifths is-offset-one-fifth">
        <div id="step-1" v-if="step === 1">
          <h2 class="title">1. What kind of interaction do you need?</h2>
          <div class="control">
            <label class="radio">
              <input type="radio" value="like" v-model="type" required>
              Likes
            </label>
            <br>
            <label class="radio">
              <input type="radio" value="retweet" v-model="type" required>
              Retweets
            </label>
            <br>
            <label class="radio">
              <input type="radio" value="follow" v-model="type" required>
              Follows
            </label>
          </div>
          <input type="submit" @click.prevent="nextStep()" class="button is-primary mt-3" value="Next step">
        </div>

        <task-form v-if="step === 2" :campaign="campaigns[type]" @error="setErrorMessage" @setBatch="setBatch" @previousStep="previousStep()" @nextStep="nextStep()"/>
        <login v-if="step === 3" 
          :loading="loading" 
          @previousStep="previousStep()" 
          @error="setErrorMessage" 
          @success="setSuccessMessage" 
          @account="setAccount" 
          @uploadBatch="uploadBatch" 
          :repetitions="repetitions" 
          :batch="batch" 
          :campaign="campaigns[type]"/>
        <a v-if="createdBatchId" :href="'/batch/' + createdBatchId" >
          Go to batch results >
        </a>
        <article class="message is-success mt-5" v-if="successMessage">
          <div class="message-body">
            {{successMessage}}
          </div>
        </article>

        <article class="message is-danger mt-5" v-if="errorMessage">
          <div class="message-body">
            {{errorMessage}}
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
import Login from '../components/Login.vue'
import TaskForm from '../components/Form.vue'
import * as effectsdk from '@effectai/effect-js'

export default {
  data() {
    return {
      loading: false,
      createdBatchId: null,
      batch: null,
      repetitions: 1,
      step: 1,
      account: null,
      effectsdk: null,
      efxAvailable: null,
      campaigns: {
        like: null,
        retweet: null,
        follow: null,
      },
      type: null,
      successMessage: null,
      errorMessage: null
    }
  },
  components: {
    Login,
    TaskForm
  },
  created () {
    this.getCampaigns();
  },
  computed: {
  },
  methods: {
    setSuccessMessage (msg) {
      this.successMessage = msg;
    },
    setErrorMessage (msg) {
      this.errorMessage = msg;
    },
    nextStep () {
      this.successMessage = null
      this.step += 1
    },
    previousStep () {
      this.errorMessage = null
      this.successMessage = null
      this.step -= 1
    },
     async getCampaigns () {
        try {
          this.effectsdk = new effectsdk.EffectClient('jungle')
          this.campaigns.like = await this.effectsdk.force.getCampaign(21)
          this.campaigns.retweet = await this.effectsdk.force.getCampaign(21)
          this.campaigns.follow = await this.effectsdk.force.getCampaign(21)
        } catch (error) {
          this.setErrorMessage(error)
          console.error(error)
        }
      },
    setAccount (account, sdk) {
      this.effectsdk = sdk
      this.account = account
    },
    setBatch (batch, repetitions) {
      this.batch = batch
      this.repetitions = repetitions
    },
    async uploadBatch () {
      try {
        this.loading = true
        const content = {
          tasks: this.batch
        }
        const result = await this.effectsdk.force.createBatch(this.campaigns[this.type].id, content, Number(this.repetitions))
        this.createdBatchId = await this.effectsdk.force.getBatchId(result.id, this.campaigns[this.type].id)
        this.setSuccessMessage('Tasks successfuly uploaded to Effect Force!')
      } catch (e) {
        this.setErrorMessage(e)
        console.error(e)
      }
      this.loading = false
    },
  }
}
</script>

<style lang="scss" scoped>
</style>
