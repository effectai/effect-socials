<template>
  <div class="container">
    <div class="columns">
      <div class="column">
        Get Started with Effect Socials
        <login v-if="!account" @account="setAccount"/>
        {{account}}
        <task-form :effectsdk="effectsdk" :account="account" v-if="account"/>
      </div>
    </div>
  </div>
</template>

<script>
import Login from '../components/Login.vue'
import TaskForm from '../components/Form.vue'
export default {
  data() {
    return {
      account: null,
      effectsdk: null,
    }
  },
  components: {
    Login,
    TaskForm
  },
  mounted () {
    
  },
  methods: {
    setAccount (account, sdk) {
      this.effectsdk = sdk
      this.account = account
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
