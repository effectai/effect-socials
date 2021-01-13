<template>
  <div class="homepage">
    <div class="banner has-text-white">
      <canvas id="star-canvas" width="100%" height="100%"></canvas>
      <Rocket class="rocket" :class="{'land': !fly}" />
      <div class="container">
        <div class="has-text-white is-size-6 has-text-weight-light is-flex is-align-items-center">
          <span class="">AN </span>
          <span class="mx-2 has-text-weight-normal is-size-4"> EFFECT.AI </span>
          <span>COMPANY</span>
        </div>
        <div id="title-big" class="has-text-white">EFFECT&#xb7;IVE</div>
        <span class="is-size-3 has-text-white has-text-weight-light"><b>I</b>nnovative</span>
        <span class="is-size-3 has-text-white has-text-weight-light"><b>V</b>iral</span>
        <span class="is-size-3 has-text-white has-text-weight-light"><b>E</b>ngagement</span>
        <div class="is-size-5 has-text-white has-text-weight-light">For <b>Your</b> Social Media <b>Success</b></div>
        <br><br>
        <a href="mailto:ive@effect.ai" target="_blank" class="button is-medium is-accent is-rounded is-wide is-uppercase has-text-weight-medium">Learn More</a>
      </div>
      <div class="clouds mt-6">
        <div class="has-background-white py-6">
          <div class="container py-6">
            <div class="columns">
              <div class="column">
                <div class="media">
                  <div class="media-left">
                    <div class="icon-circle has-background-accent has-text-white">
                      <img :src="require('@/assets/images/icons/ai.png')" />
                    </div>
                  </div>
                  <div class="media-content has-text-primary">
                    <h3>HUMANS AND AI TOGETHER</h3>
                    <div>
                      We combine the power of AI with the expert knowledge of real humans to ensure the most high-quality content, tailored to your brand and community, is placed within your online channels.                </div>
                  </div>
                </div>
              </div>
              <div class="column">
                <div class="media">
                  <div class="media-left">
                    <div class="icon-circle has-background-accent has-text-white">
                      <img :src="require('@/assets/images/icons/social-media.png')" />
                    </div>
                  </div>
                  <div class="media-content has-text-primary">
                    <h3>QUALITY ENGAGEMENT</h3>
                    <div>
                      With nearly 5 million tasks completed on our platform by real humans, our proven workforce is dedicated to helping you reach your goals. Our influencers add and enhance interaction across your channels, not detract from it.                 </div>
                  </div>
                </div>
              </div>
              <div class="column">
                <div class="media">
                  <div class="media-left">
                    <div class="icon-circle has-background-accent has-text-white">
                      <img :src="require('@/assets/images/icons/worldwide.png')" />

                    </div>
                  </div>
                  <div class="media-content has-text-primary">
                    <h3>INTERNATIONAL COVERAGE</h3>
                    <div>
                      We go beyond borders and enrich your content in more than 10 languages.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import stars from '@/assets/js/stars.js'
export default {
  data () {
    return {
      fly : false
    }
  },
  mounted () {
    stars.start();
    setTimeout(() => {
      this.fly = true
    }, 500);
    window.addEventListener('resize', this.onResize)
  },
  beforeDestroy() {
    // Unregister the event listener before destroying this Vue instance
    window.removeEventListener('resize', this.onResize)
  },
  methods: {
    onResize(event) {
      stars.start()
    }
  }
}
</script>

<style lang="scss">
  #star-canvas {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }
  .banner {
    background: rgb(37,89,205);
    background: linear-gradient(-45deg, rgba(37,89,205,1) 0%, rgba(15,56,193,1) 100%);
    background-image: url('~assets/images/socials-and-stars_bg.png'), linear-gradient(-45deg, rgba(37,89,205,1) 0%, rgba(15,56,193,1) 100%);
    background-size: 100% auto;
    min-height: 700px;
    padding-bottom: calc(10% + 50px);
    position: relative;
    z-index: 1;
    padding-top: 50px;
    #title-big {
      font-size: 80px;
      margin-top: 50px;
      word-break: break-word;
    }
  }

  .rocket {
    transition: all 1.5s;
    left: calc(65% - 220px);
    top: 175px;
    position: absolute;
    max-width: calc(100% - 1.5rem);
    &.land {
      transform: translate(-500px, 700px) rotate(-30deg);
    }
  }

  .clouds {
    background: url('~assets/images/clouds.png') no-repeat;
    background-size: 100% auto;
    background-position: top left;
    padding-top: 13%;
    position: relative;
    z-index: 2;
    &:after {
      content: "";
      margin-top: -1px;
      display: block;
      background: url('~assets/images/clouds.png') no-repeat;
      background-size: 100% auto;
      background-position: top left;
      transform: scaleY(-1);
      padding-bottom: 13%;
    }
  }
  .media-left {
    .icon-circle {
      margin-top:-10px;
    }
  }
</style>
