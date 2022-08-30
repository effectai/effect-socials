<template>
  <div class="section pt-6">
    <div class="columns">
      <div class="column is-three-fifths is-offset-one-fifth">
        <div id="step-1" v-if="step === 1">
          <h2 class="title">1. Select <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a> engagement</h2>
          <div class="control">

            <div class="buttons is-centered px-6 mx-6">
              <button class="button is-link is-light mt-3 is-fullwidth is-large" @click.prevent="type='like'; nextStep()">
                <span><font-awesome-icon class="mx-2 icon is-small" icon="fa-solid fa-heart" /></span>
                <span>&nbsp;Twitter Likes</span>
              </button>
              <br><br><br>
              <button class="button is-link is-light mt-3 is-fullwidth is-large has-tooltip-arrow has-tooltip-top has-tooltip-info" @click.prevent="type='retweet'; nextStep()">
                <span><font-awesome-icon class="mx-2 icon is-small" icon="fa-solid fa-user-group" /></span>
                <span>&nbsp;Twitter Retweets</span>
              </button>
              <br><br><br>
              <button class="button is-link is-light mt-3 is-fullwidth is-large has-tooltip-arrow has-tooltip-top has-tooltip-info" data-tooltip="Coming Soon!" @click.prevent="type='follow'; nextStep()" disabled>
                <span><font-awesome-icon class="mx-2 icon is-small" icon="fa-solid fa-retweet" /></span>
                <span>&nbsp;Twitter Follows</span>
              </button>
              <br><br><br>
              <button class="button is-link is-light mt-3 is-fullwidth is-large has-tooltip-arrow has-tooltip-top has-tooltip-info" data-tooltip="Coming Soon!" @click.prevent="type='reply'; nextStep()" disabled>
                <span><font-awesome-icon class="mx-2 icon is-small" icon="fa-solid fa-reply" /></span>
                <span>&nbsp;Twitter Replies</span>
              </button>              
              <br><br><br>
              <button class="button is-link is-light mt-3 is-fullwidth is-large has-tooltip-arrow has-tooltip-top has-tooltip-info" data-tooltip="Coming Soon!" @click.prevent="type='hearts'; nextStep()" disabled>
                <span><font-awesome-icon class="mx-2 icon is-small" icon="fa-solid fa-heart" /></span>
                <span>&nbsp;Instagram Likes</span>
              </button>
            </div>
          </div>
        </div>

        <task-form v-if="step === 2" :campaign="campaigns[type]" @error="setErrorMessage" @setBatch="setBatch" @previousStep="previousStep()" @nextStep="nextStep()"/>
        <login v-if="step === 3"
          @previousStep="previousStep()" 
          @error="setErrorMessage" 
          @success="setSuccessMessage" 
          @account="setAccount"  
          :repetitions="repetitions" 
          :batch="batch" 
          :campaign="campaigns[type]"/>
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
      setTimeout(() => this.errorMessage = null, 5000);
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
          this.effectsdk = new effectsdk.EffectClient(process.env.NUXT_ENV_EOS_ENV)
          this.campaigns.retweet = await this.effectsdk.force.getCampaign(parseInt(process.env.NUXT_ENV_CAMPAIGN_RETWEET_ID))
          this.campaigns.like = await this.effectsdk.force.getCampaign(process.env.NUXT_ENV_CAMPAIGN_LIKE_ID)
          // this.campaigns.reply = await this.effectsdk.force.getCampaign(process.env.NUXT_ENV_CAMPAIGN_REPLY_ID)
          this.campaigns.follow = await this.effectsdk.force.getCampaign(process.env.NUXT_ENV_CAMPAIGN_FOLLOW_ID)
          this.campaigns.instagram = await this.effectsdk.force.getCampaign(process.env.NUXT_ENV_CAMPAIGN_INSTAGRAM_ID)
          
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
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
