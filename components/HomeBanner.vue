<template>
  <div class="banner">
    <section class="section">
      <div class="container is-max-widescreen mt-6">
        <div class="columns is-vcentered">
          <div class="column is-three-fifths">
            <h1 class="title is-1 is-spaced has-background-white-blur">Grow your brand with social media engagement</h1>
            <h1 class="subtitle has-background-white-blur">Real engagements on your social media posts from real people.</h1>
<!--            <p class="has-background-white-blur">Our social media algorithms connect your and other relevant content to genuine fans that comment and engage with your brand.</p>-->
            <!--          <p>Helping data science teams succeed with structuring data and the deployment of AI automation</p>-->
            <br>
            <!-- <a to="/start" @click.prevent="scrollToElement('why')" class="button is-secondary" :class="{'is-accent': $colorMode.value === 'dark'}">Start -->
            <div class="buttons">
              <nuxt-link to="/start" class="button is-primary is-large" :class="{'is-accent': $colorMode.value === 'dark'}">Start</nuxt-link>
              <nuxt-link to="/batch" class="button is-primary is-large" :class="{'is-accent': $colorMode.value === 'dark'}">Dashboard</nuxt-link>
            </div>
            </a>
          </div>

        </div>
        <div class="has-text-right">
          <img width="700" src="~assets/images/socials.jpg"  class="has-radius has-shadow"/>
        </div>
      </div>
    </section>
    <div class="circle-container has-text-right">
<!--      <div class="circle"></div>-->
      <img src="~assets/images/circle-socials.png" style="margin-right: -50px; max-width: 1500px"/>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
  components: {
  },
  computed: {
    ...mapState({
      // $blockchain: state => state.$blockchain,
      transactions: state => state.transactions
    }),
    ...mapGetters({
      transactionById: 'transactionById',
      allTransactions: 'transaction/allTransactions',
      transactionsIsEmpty: 'transaction/transactionsIsEmpty'
    }),
  },
  methods: {
    ...mapActions({
      addTransaction: 'transaction/addTransaction'
    }),
    scrollToElement(ref) {
      let el = this.$refs[ref];
      console.log("scroll", el)
      if(!el) {
        el = document.getElementById(ref);
      }
      if (el) {
        // Use el.scrollIntoView() to instantly scroll to the element
        el.scrollIntoView({behavior: 'smooth'});
      } else {
        this.$router.push('/#'+ref);
      }
    }, 
    addTx () {

            const transaction = {
                id: 999,
                type: 'Likes',
                campaign: {
                    id: 28,
                    title: "Effect Socials: Twitter Like tweet",
                    description: "You will be provided with a tweet link. You’ll like the tweet.",
                    image: "https://cdn.discordapp.com/attachments/999288162062958652/999691161637748849/Screen_Shot_2022-07-21_at_4.53.29_PM.png?width=705&height=402",
                    reward: 10
                },
                batch: {
                  info: "this.batch"
                },
                repetitions: 5,
                account: { info: "this.account" },
                date: new Date(),
                batchId: 123,
                eos: 'eos',
                totalCost: 200,
                batchId: 1337,
            }
      this.addTransaction(transaction);
    }
  }
}
/**
 *  
 * {
 * }id: '188d9cba22eb1acbeff074d9c092b202808c1510f37b02798c286d00c9cc7b5d',
 trx: {
   receipt: {
     status: 'executed',
     cpu_usage_us: 344,
     net_usage_words: 19,
     trx: [Array]
   },
   trx: {
     expiration: '2020-02-27T03:36:29',
     ref_block_num: 1126,
     ref_block_prefix: 2779202260,
     max_net_usage_words: 0,
     max_cpu_usage_ms: 0,
     delay_sec: 0,
     context_free_actions: [],
     actions: [Array],
     transaction_extensions: [],
     signatures: [Array],
     context_free_data: []
   }
 },
 */
</script>

<style lang="scss" scoped>
  $noise: url('data:image/png;base64,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');

  .banner {
    position: relative;
    overflow: hidden;
    min-height: calc(100vh - 70px);
    &:before {
      content: "";
      display: block;
      position: absolute;
      width: 45%;
      height: 100%;
      z-index: -2;
      top: 0;
      right: 0;
      //background: url("~assets/img/circle.png");
      //background-size: cover;

    }

  }

  @keyframes noise {
    0% {
      -webkit-mask-position: 31% 50%;
    }
    50% {
      -webkit-mask-position: 34% 98%
    }
    100% {
      -webkit-mask-position: 50% 43%;
    }
  }

  .circle-container {
    position: absolute;
    right: 0;
    top: 0;
    margin: 20px 10px;

    width: 100%;
    z-index: -2;
    img {
      animation: rotate 30s linear infinite;
    }
    .circle {
      margin-left: auto;
      position: relative;
      width: 1400px;
      height: 1400px;
      margin-right: -10px;
      -webkit-filter: blur(7px);
      -moz-filter: blur(7px);
      -o-filter: blur(7px);
      -ms-filter: blur(7px);
      filter: blur(7px);
      //mask: $noise, radial-gradient(circle at 50% 0, transparent 30%, #000 (65% + 15%)) 0 0 / 50% 100%;


      border-radius: 100%;
      background: $secondary;
      transition: background 2s;
      transform: rotate(-100deg);
      // background: radial-gradient(circle at top, rgba(#ffffff, 1) 0%, rgba(#fffef7, 1) 7%, rgba(#06c6c6, 1) 30%, rgba(#06c6c6, 1) 50%, rgba(#06c6c6, 1) 100%);
      background: linear-gradient(-40deg, #09C9C9 44%, rgba(9,201,201,0.20) 84%, rgba(255,251,241,0.00) 100%);
      background-size: 150% 400%;
      background-position: 10% 0%;
      animation: grained 0.2s linear infinite, rotate 45s linear infinite;
      //animation-delay: 0s, 1.0s;
      &:before {
        content: "";
        -webkit-filter: blur(7px);
        -moz-filter: blur(7px);
        -o-filter: blur(7px);
        -ms-filter: blur(7px);
        filter: blur(7px);
        display: block;
        position: absolute;
        top: 240px;
        left: 240px;
        width: 920px;
        height: 920px;
        background: white;
        border-radius: 100%;
      }
    }

    &:after {
      content: "";
      display: block;
      position: absolute;
      bottom: 450px;
      right: -30px;
      width: 350px;
      height: 350px;
      background: white;
      -webkit-filter: blur(7px);
      -moz-filter: blur(7px);
      -o-filter: blur(7px);
      -ms-filter: blur(7px);
    }
  }
  @media all and (max-width: 770px) {
    .circle-container:after {
      display: none;
    }
  }
  .dark-mode {
    .circle-container {
      .circle {
        &:before {
          background: $dark-mode-background;
        }
      }

      &:after {
        background: $dark-mode-background;
      }
    }
  }
</style>
