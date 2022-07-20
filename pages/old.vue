<template>
  <div class="homepage">
    <div class="banner py-6">
      <canvas id="star-canvas" width="100%" height="100%"></canvas>
      <Rocket class="rocket" :class="{'land': !fly}" />
      <div class="container">
        <div class="is-size-6 has-text-weight-light is-flex is-align-items-center">
          <span class="">AN </span>
          <span class="mx-2 has-text-weight-normal is-size-4"> EFFECT.NETWORK </span>
          <span>COMPANY</span>
        </div>
        <img src="~assets/images/effect-socials_h100.png" class="mt-6" />
        <br>
        <span class="is-size-3 has-text-weight-light"><b>I</b>nnovative</span>
        <span class="is-size-3 has-text-weight-light"><b>V</b>iral</span>
        <span class="is-size-3 has-text-weight-light"><b>E</b>ngagement</span>
        <div class="is-size-5 has-text-weight-light">Grow your brand with <b>Effective</b> social media engagement</div>
        <br><br>
        <button @click.prevent="scrollToElement('why')" class="button is-medium is-accent is-rounded is-wide is-uppercase has-text-weight-medium">Learn More</button>
      </div>
      <div ref="why">
        <Why />
      </div>
      <div ref="how">
        <How />
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
    },
    scrollToElement(ref) {
      const el = this.$refs[ref];

      if (el) {
        // Use el.scrollIntoView() to instantly scroll to the element
        el.scrollIntoView({behavior: 'smooth'});
      }
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

    background-image: url('~assets/images/socials-and-stars_bg.png');
    background-size: 100% auto;
    min-height: 700px;
    position: relative;
    z-index: 1;
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

  .media-left {
    .icon-circle {
      margin-top:-10px;
    }
  }
</style>
