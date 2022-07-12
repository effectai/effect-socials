<template>
  <div class="container pt-6">
    <div class="columns">
      <div class="column">
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
          <input type="submit" @click.prevent="nextStep()" class="button button-primary" value="Next step">
        </div>

        <task-form v-if="step === 2" :campaign="campaigns[type]" @setBatch="setBatch" @previousStep="previousStep()" @nextStep="nextStep()"/>
        <login v-if="step === 3" @previousStep="previousStep()" @account="setAccount" @uploadBatch="uploadBatch" :repetitions="repetitions" :batch="batch" :campaign="campaigns[type]"/>

        <a v-if="createdBatchId" :href="'/batch/' + createdBatchId" >
          Go to batch results >
        </a>
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
      createdBatchId: null,
      batch: null,
      repetitions: 1,
      step: 1,
      account: null,
      effectsdk: null,
      campaigns: {
        like: null,
        retweet: null,
        follow: null,
      },
      type: null
    }
  },
  components: {
    Login,
    TaskForm
  },
  created () {
    this.getCampaigns();
  },
  methods: {
    nextStep () {
      this.step += 1
    },
    previousStep () {
      this.step -= 1
    },
     async getCampaigns () {
        try {
          this.effectsdk = new effectsdk.EffectClient('jungle')
          this.campaigns.like = await this.effectsdk.force.getCampaign(20)
          this.campaigns.retweet = await this.effectsdk.force.getCampaign(20)
          this.campaigns.follow = await this.effectsdk.force.getCampaign(20)
        } catch (error) {
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
      } catch (e) {
        console.error(e)
      }
      this.loading = false
    },
  }
}
</script>

<style lang="scss" scoped>
</style>
