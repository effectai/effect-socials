<template>
  <div class="container pt-6">
    <div v-if="results">
      Results: {{results}}
    </div>
    <div v-else>
      No batch found
    </div>
  </div>
</template>

<script>
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
    }, 5000)
  },
  methods: {
    async getResults() {
      console.log('getting results...')
      this.effectsdk = new effectsdk.EffectClient('jungle')
      this.results = await this.effectsdk.force.getSubmissionsOfBatch(this.id)
    },
  },
  beforeDestroy() {
    clearInterval(this.timer)
  }
}
</script>

<style lang="scss" scoped>
</style>
