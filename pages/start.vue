<template>
  <div class="container">
    <div class="columns">
      <div class="column">
        {{account}}
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
          <input type="submit" @click.prevent="nextStep()" class="btn btn-primary">
        </div>

        <task-form v-if="step === 2" :campaign="campaigns[type]" @previousStep="previousStep()" @nextStep.prevent="nextStep()"/>
        <login v-if="step === 3" @account="setAccount"/>
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
      console.log('made this choice: ' + this.type)
      this.step += 1
    },
    previousStep () {
      this.step -= 1
    },
     async getCampaigns () {
        try {
          this.effectsdk = new effectsdk.EffectClient('jungle')
          this.campaigns.like = await this.effectsdk.force.getCampaign(1)
          this.campaigns.retweet = await this.effectsdk.force.getCampaign(2)
          this.campaigns.follow = await this.effectsdk.force.getCampaign(3)
          console.log('loaded all campaigns', this.campaigns)
        } catch (error) {
          console.error(error)
        }
      },
    setAccount (account, sdk) {
      this.effectsdk = sdk
      this.account = account
    },
    async uploadBatch () {
      try {
        this.loading = true
        const content = {
          tasks: this.tasks
        }
        const result = await this.effectsdk.createBatch(this.campaignId, content, Number(this.repetitions))
      } catch (e) {
        this.$blockchain.handleError(e)
      }
      this.loading = false
    },
  }
}
</script>

<style lang="scss" scoped>
</style>
