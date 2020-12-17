<template>
  <div class="homepage">
    <div class="banner has-text-white">
        <Rocket class="rocket" :class="{'land': !fly}" />
      <div class="container">
        <div class="has-text-white is-size-5 has-text-weight-light">AN <span class="has-text-weight-normal is-size-2">EFFECT.AI</span> COMPANY</div>
        <div id="title-big" class="has-text-white">EFFECT.IVE</div>
        <div class="slogan is-size-1 has-text-white"><b>I</b>nnovative</div>
        <div class="slogan is-size-1 has-text-white"><b>V</b>iral</div>
        <div class="slogan is-size-1 has-text-white"><b>E</b>ngagement</div>
        <br><br>
        <button class="button is-medium is-accent is-rounded is-wide is-uppercase has-text-weight-medium">Learn More</button>
      </div>
    </div>
    <div class="clouds">
      <div class="container has-background-white">
        <div class="columns is-variable is-8">
          <div class="column">
            <div class="media">
              <div class="media-left">
                <div class="icon-circle has-background-accent has-text-white">

                </div>
              </div>
              <div class="media-content has-text-primary">
                <h3>Lorem Ipsum Dolor sit amet</h3>
                <div>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.
                </div>
              </div>
            </div>
          </div>
          <div class="column">
            <div class="media">
              <div class="media-left">
                <div class="icon-circle has-background-accent has-text-white">

                </div>
              </div>
              <div class="media-content has-text-primary">
                <h3>Lorem Ipsum Dolor sit amet</h3>
                <div>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.
                </div>
              </div>
            </div>
          </div>
          <div class="column">
            <div class="media">
              <div class="media-left">
                <div class="icon-circle has-background-accent has-text-white">

                </div>
              </div>
              <div class="media-content has-text-primary">
                <h3>Lorem Ipsum Dolor sit amet</h3>
                <div>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.
                </div>
              </div>
            </div>
          </div>
        </div>
        <br><br><br><br><br><br><br><br>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      fly : false
    }
  },
  mounted () {
    setTimeout(() => {
      this.fly = true
    }, 500);
  }
}
</script>

<style lang="scss">
  .banner {
    background: rgb(37,89,205);
    background: linear-gradient(-45deg, rgba(37,89,205,1) 0%, rgba(15,56,193,1) 100%);
    background-image: url('~assets/images/socials-and-stars_bg.png'), linear-gradient(-45deg, rgba(37,89,205,1) 0%, rgba(15,56,193,1) 100%);
    background-size: cover;
    min-height: 700px;
    padding-bottom: calc(10% + 50px);
    position: relative;
    z-index: 1;
    padding-top: 50px;
    #title-big {
      font-size: 90px;
      margin-top: 50px;
      word-break: break-word;
    }
    .slogan {
      line-height: 50px;
    }
  }

  .rocket {
    transition: all 1s;
    left: calc(65% - 220px);
    top: 175px;
    position: absolute;
    max-width: 100%;
    &.land {
      transform: translate(-500px, 700px) rotate(-30deg);
    }
  }

  .clouds {
    margin-top: -10%;
    background: url('~assets/images/clouds.png') no-repeat;
    background-size: 100% auto;
    background-position: top left;
    padding-top: 13%;
    position: relative;
    z-index: 2;
  }
  .media-left {
    .icon-circle {
      margin-top:-10px;
    }
  }
</style>
