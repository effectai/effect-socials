<template>
  <div class="clouds mt-6">
    <div class="has-background-white">
      <div class="container">
        <h1 class="has-text-centered is-size-1 mb-6">Why Effect&#8226;ive?</h1>
        <div class="columns">
          <div class="column">
            <div class="media">
              <div class="media-left">
                <div class="icon-circle has-background-accent">
                  <img :src="require('@/assets/images/icons/like.png')" />
                </div>
              </div>
              <div class="media-content has-text-primary">
                <h3>ENGAGEMENT RATE</h3>
                <div  class="has-text-justified">
                  The most effective way to have the social media algorithms work for you is to increase your engagement rate.
                  Quality engagement is rewarded 80% more than anything else.
                </div>
              </div>
            </div>
          </div>
          <div class="column">
            <div class="media">
              <div class="media-left">
                <div class="icon-circle has-background-accent">
                  <img :src="require('@/assets/images/icons/fans.png')" />
                </div>
              </div>
              <div class="media-content has-text-primary">
                <h3>FANS FOR YOUR BRAND</h3>
                <div  class="has-text-justified">
                  <b>Real Humans!</b> We never use bots. We have a network of thousands of people from all over the globe.
                  Our matching algorithm connects you with genuine fans who are rewarded for high quality engagement on your channels.
                </div>
              </div>
            </div>
          </div>
          <div class="column">
            <div class="media">
              <div class="media-left">
                <div class="icon-circle has-background-accent">
                  <img :src="require('@/assets/images/icons/ai.png')" />

                </div>
              </div>
              <div class="media-content has-text-primary">
                <h3>THE POWER OF AI</h3>
                <div  class="has-text-justified">
                  Our social media algorithms make sure to direct engagement where it will benefit you the most. Our AI system is proven to drive more organic traffic to your brand.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-6 has-text-centered">
          <a href="https://docs.google.com/forms/d/e/1FAIpQLScBLihxn5gk94MoT-scoy1HNDT6YQXkH_hgeRPydgjFbCexlw/viewform" target="_blank" class="button is-medium is-primary is-rounded is-wide is-uppercase has-text-weight-medium">Request Demo</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
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
</style>
