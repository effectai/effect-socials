<template>
  <div class="clouds">
    <div class="has-background-white">
      <div class="container">
        <h1 class="title has-text-centered is-size-1 mb-6 has-text-black pt-6">Why Effect Socials?</h1>
        <div class="columns">
          <div class="column">
            <div class="media">
              <div class="media-left">
                <div class="icon-circle has-background-accent">
                  <img :src="require('@/assets/images/icons/like.png')" />
                </div>
              </div>
              <div class="media-content">
                <h3 class="subtitle has-text-weight-bold has-text-black">ENGAGEMENT RATE</h3>
                <div  class="has-text-justified has-text-dark">
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
              <div class="media-content">
                <h3 class="subtitle has-text-weight-bold has-text-black">FANS FOR YOUR BRAND</h3>
                <div  class="has-text-justified has-text-dark">
                  <b>Real Humans!</b> We never use bots. We have a network of thousands of people from all over the globe.
                  Our matching algorithm connects you with genuine fans who are rewarded for high quality engagement on your channels.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .clouds {

    //background: url('~assets/images/clouds.png') no-repeat;
    background-size: 100% auto;
    background-position: top left;
    margin-top: -150px;
    padding-top: 13%;
    position: relative;
    z-index: 2;
    &:after {
      //content: "";
      margin-top: -1px;
      display: block;
      //background: url('~assets/images/clouds.png') no-repeat;
      background-size: 100% auto;
      background-position: top left;
      transform: scaleY(-1);
      padding-bottom: 13%;
    }
  }
  .icon-circle {
    border-radius: 100%;
    width: 60px;
    height: 60px;
    font-size: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    &.big {
      width: 75px;
      height: 75px;
    }
  }
</style>
