<template>
  <div class="section pt-6">
    <div class="container is-max-desktop">
      <div class="columns">
        <div class="column">
          <div id="step-1" v-if="step === 1">
            <h2 class="title">1. Select Engagment</h2>
            <div class="control">

              <div class="buttons is-centered px-3 mx-6" ref="step1">
                <h3 class="title mt-5 mb-3">Twitter</h3>
                <button :disabled="loading" :class="{'is-loading': loading}" class="button is-link is-light mt-3 is-fullwidth is-large" @click.prevent="type='like'; nextStep()">
                  <span><font-awesome-icon class="mx-2 icon is-small" icon="fa-solid fa-heart" /></span>
                  <span>&nbsp;Likes</span>
                </button>
                <br><br><br>
                <button :disabled="loading" :class="{'is-loading': loading}" class="button is-link is-light mt-3 is-fullwidth is-large has-tooltip-arrow has-tooltip-top has-tooltip-info" @click.prevent="type='retweet'; nextStep()">
                  <span><font-awesome-icon class="mx-2 icon is-small" icon="fa-solid fa-retweet" /></span>
                  <span>&nbsp;Retweets</span>
                </button>
                <br><br><br>
                <button :disabled="loading" :class="{'is-loading': loading}" class="button is-link is-light mt-3 is-fullwidth is-large" @click.prevent="type='follow'; nextStep()">
                  <span><font-awesome-icon class="mx-2 icon is-small" icon="fa-solid fa-user-group" /></span>
                  <span>&nbsp;Follows</span>
                </button>
                <br><br><br>
                <button :disabled="loading" :class="{'is-loading': loading}" class="button is-link is-light mt-3 is-fullwidth is-large" @click.prevent="type='reply'; nextStep()">
                  <span><font-awesome-icon class="mx-2 icon is-small" icon="fa-solid fa-reply" /></span>
                  <span>&nbsp;Replies</span>
                </button>

                <h3 class="title mt-6 mb-3">Instagram</h3>
                <button :disabled="loading" :class="{'is-loading': loading}" class="button is-link is-light mt-3 is-fullwidth is-large" @click.prevent="type='instagram'; nextStep()">
                  <span><font-awesome-icon class="mx-2 icon is-small" icon="fa-solid fa-heart" /></span>
                  <span>&nbsp;Hearts</span>
                </button>
                <br><br><br>
                <button :disabled="loading" :class="{'is-loading': loading}" class="button is-link is-light mt-3 is-fullwidth is-large" @click.prevent="type='instagramFollow'; nextStep()">
                  <span><font-awesome-icon class="mx-2 icon is-small" icon="fa-solid fa-user-group" /></span>
                  <span>&nbsp;Follows</span>
                </button>

                <h3 class="title mt-6 mb-3">YouTube</h3>
                <button :disabled="loading" :class="{'is-loading': loading}" class="button is-link is-light mt-3 is-fullwidth is-large" @click.prevent="type='youtubeLike'; nextStep()">
                  <span><font-awesome-icon class="mx-2 icon is-small" icon="fa-solid fa-thumbs-up" /></span>
                  <span>&nbsp;Likes</span>
                </button>
                <br><br><br>
                <button :disabled="loading" :class="{'is-loading': loading}" class="button is-link is-light mt-3 is-fullwidth is-large" @click.prevent="type='youtubeSubscribe'; nextStep()">
                  <span><font-awesome-icon class="mx-2 icon is-small" icon="fa-solid fa-user-group" /></span>
                  <span>&nbsp;Subscribers</span>
                </button>
              </div>
            </div>
          </div>

          <task-form v-if="step === 2" :campaign="campaigns[type]" @error="setErrorMessage" @setBatch="setBatch" @previousStep="previousStep()" @nextStep="nextStep()"/>
          <login 
            v-if="step === 3"
            @previousStep="previousStep()" 
            @error="setErrorMessage" 
            @success="setSuccessMessage" 
            @account="setAccount"  
            :repetitions="repetitions" 
            :batch="batch" 
            :campaign="campaigns[type]"
          />
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
  </div>
</template>

<script>
import Login from '../components/Login.vue'
import TaskForm from '../components/Form.vue'
// import * as effectsdk from '@effectai/effect-js'
import { mapState, mapActions } from 'vuex'

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
        reply: null,
        instagram: null,
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
  mounted () {
    this.$nextTick(() => {
      const tour = this.$shepherd({
        useModalOverlay: true,
        defaultStepOptions: {
          cancelIcon: {
            enabled: true
          },
          classes: 'shadow-md bg-purple-dark',
          scrollTo: false
        }
      })

      tour.addStep({
        attachTo: { element: this.$refs.step1, on: 'bottom' },
        title: 'Choose Platform',
        text: 'Choose the platform and interaction. Here you can select the social media platform and the interaction you want. Choose one to begin.',
        buttons: [
          {
            text: 'Done',
            action: tour.complete
          }
        ]
      })

      if (this.shepherd){
        this.tour.start()
      }

    })
  },
  computed: {
    ...mapState({
      shepherd: state => state.shepherd
    })
  },
  methods: {
    ...mapActions({
      disableShepherd: 'view/disableShepherd'
    }),
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
      this.loading = true;
        try {
          // this.effectsdk = new effectsdk.EffectClient(process.env.NUXT_ENV_EOS_ENV)
          this.campaigns.retweet = await this.$effect.force.getCampaign(parseInt(process.env.NUXT_ENV_CAMPAIGN_RETWEET_ID))
          this.campaigns.like = await this.$effect.force.getCampaign(parseInt(process.env.NUXT_ENV_CAMPAIGN_LIKE_ID))
          this.campaigns.reply = await this.$effect.force.getCampaign(parseInt(process.env.NUXT_ENV_CAMPAIGN_REPLY_ID))
          this.campaigns.follow = await this.$effect.force.getCampaign(parseInt(process.env.NUXT_ENV_CAMPAIGN_FOLLOW_ID))
          this.campaigns.instagram = await this.$effect.force.getCampaign(parseInt(process.env.NUXT_ENV_CAMPAIGN_INSTAGRAM_ID))
          this.campaigns.instagramFollow = await this.$effect.force.getCampaign(parseInt(process.env.NUXT_ENV_CAMPAIGN_INSTAGRAM_FOLLOW_ID))

          this.campaigns.youtubeLike = await this.$effect.force.getCampaign(parseInt(process.env.NUXT_ENV_CAMPAIGN_YOUTUBE_LIKE_ID))
          this.campaigns.youtubeSubscribe = await this.$effect.force.getCampaign(parseInt(process.env.NUXT_ENV_CAMPAIGN_YOUTUBE_SUBSCRIBE_ID))
          console.log('this.campaigns.', this.campaigns)
          
        } catch (error) {
          this.setErrorMessage(error)
          console.error(error)
        }
        this.loading = false;
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
