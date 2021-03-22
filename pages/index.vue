<template>
  <div class="banner">
    <canvas id="star-canvas" width="100%" height="100%"></canvas>
    <home-banner  />
    <div ref="why" id="why">
      <Why />
    </div>
    <div ref="how" id="how">
      <How />
    </div>
  </div>
</template>

<script>
  import HomeBanner from '@/components/HomeBanner';
  import stars from '@/assets/js/stars.js'
  // import ThreeBlocks from '@/components/ThreeBlocks';
  // import Force from '@/components/Force';
  // import Services from '@/components/Services';
  // import Efx from '@/components/Efx';
  // import Clients from '@/components/Clients';
  // import MailingList from '@/components/MailingList';

  export default {
    components: {
      HomeBanner,

      // ThreeBlocks,
      // Force,
      // Services,
      // Efx,
      // Clients,
      // MailingList
    },
    mounted () {
      stars.start();
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

<style lang="scss" scoped>
#star-canvas {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}
.banner {

  //background-image: url('~assets/images/socials-and-stars_bg.png');
  //background-size: 100% auto;
  min-height: 600px;
  position: relative;
  z-index: 1;
}
</style>
