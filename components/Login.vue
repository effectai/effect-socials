<template>
  <div>
    <h2 v-if="!accountConnected" class="title">3. Connect your account</h2>
    <h2 v-else class="title">4. Submit your tasks!</h2>

    <p v-if="accountConnected">
        Logged in with: {{connectResponse.accountName}}<br>
        Batch has {{batch.length}} tasks, and will cost {{batchCost}} EFX<br>
        Your vEFX balance: <span :class="{'has-text-danger': batchCost > vefxAvailable}">{{vefxAvailable}} {{client.config.efxSymbol}}</span>
    </p>

    <div id="connect-buttons" v-if="!accountConnected" class="buttons is-flex">
      <button class="button is-primary" @click="login()" id="btn-login" style="background-color: #f6851b">Connect with Metamask</button>
      <button class="button is-link" @click="loginEOS()" id="btn-login-eos" style="background-color: #3750A2">Connect with Anchor</button>
    </div>

    <div v-if="accountConnected">
        <form @submit.prevent="uploadBatch">
            <div class="field is-grouped is-justify-content-center mt-6">
            <div class="control">
                <button class="button is-outlined is-primary is-wide" @click="previousStep">
                Back
                </button>
                <button type="submit" :disabled="batchCost > vefxAvailable" :class="{'is-loading': loading}" class="button button is-primary is-wide mr-4">
                Post tasks
                </button>
            </div>
            </div>
        </form>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import Web3 from 'web3'
import * as effectsdk from '@effectai/effect-js'
import AnchorLink from 'anchor-link'
import AnchorLinkBrowserTransport from 'anchor-link-browser-transport'
export default Vue.extend({
    props:['batch', 'campaign', 'repetitions', 'loading'],
    data() {
        return {
            account: null,
            client: null,
            campaignid: null,
            batchidentification: null,
            connectAccount: { 
                providerName: null, 
                provider: null, 
                account: null
            },
            connectResponse: null,
            message: null,
            accountConnected: false
        }
    },
  components: {},
  computed: {
    batchCost () {
        return (this.batch.length * this.repetitions) * this.campaign.info.reward
    },
    efxLoading () {
      return this.vefxAvailable === null || this.efxAvailable === null || this.efxPending === null
    },
    vefxAvailable () {
      let balance = 0
      if (this.account) {
        const vAccountRows = this.account.vAccountRows
        if (vAccountRows) {
          vAccountRows.forEach((row) => {
            if (row.balance.contract === this.client.config.efxTokenContract) {
              balance = parseFloat(row.balance.quantity)
            }
          })
        }
      }
      return balance
    }
  },
  methods: {
    uploadBatch() {
        this.$emit('uploadBatch')
    },
    previousStep () {
      this.$emit('previousStep')
    },
    async login() {
        this.generateClient()
        await this.connectMetamask()
        await this.connectEffectAccount()
    },
    async loginEOS() {
        this.generateClient()
        await this.connectAnchor()
        await this.connectEffectAccount()
    },
    /**
    * SDK Client
    * Create a new Effect SDK client.
    */
    generateClient() {
        console.log('Creating SDK...')
        try {
            this.client = new effectsdk.EffectClient('jungle')
            console.log(this.client)
        } catch (error) {
            console.error(error)
        }
    },
    /**
    * EOS Anchor Wallet
    */
    async connectAnchor() {
        try {
            const transport = new AnchorLinkBrowserTransport()
            const alink = new AnchorLink({
                transport,
                chainId: '2a02a0053e5a8cf73a56ba0fda11e4d92e0238a4a2aa74fccf46d5a910746840',
                rpc: 'https://jungle3.greymass.com'
            })
            // Perform the login, which returns the users identity
            const identity = await alink.login('hackathon-boilerplate')
            const { session } = identity
            const signatureProvider = session.makeSignatureProvider()
            const account = { accountName: session.auth.actor.toString(), permission: session.auth.permission.toString() }
            console.log(`Logged in as`, account)
            this.connectAccount.provider = signatureProvider
            this.connectAccount.account = account
            this.connectAccount.providerName = 'anchor'                
        } catch (error) {
            this.$emit('error', error.message)
            console.error(error)
        }
    },
    /**
    * Metamask
    * Generate web3 instance from account with private key.
    * Could also be the web3 object with a metamask connection. 
    * 
    * Here we will also make a call to make sure we are on the correct chain.
    * Bsc-Mainnet: 0x38 (hex), 56 (decimal)
    * Bsc-Testnet: 0x61 (hex), 97 (decimal)
    * 
    */
    async connectMetamask() {
        console.log('Connecting to metamask wallet.')
        // @ts-ignore
        if (window.ethereum) {
            try {
                // @ts-ignore
                const ethAccount = await ethereum.request({ method: 'eth_requestAccounts' });
                // @ts-ignore
                await ethereum.request({
                    method: 'wallet_switchEthereumChain',
                    params: [{ chainId: '0x38' }] // 0x38 is the chainId of bsc testnet.    
                })
                // @ts-ignore
                this.connectAccount.provider = new Web3(window.ethereum)
                this.connectAccount.account = null
                this.connectAccount.providerName = 'metamask'
            } catch (error) {
                this.$emit('error', error)
                console.error(error)
            }
        } else {
            this.$emit('error', 'Metamask not installed')
        }
    },
    /**
    * Connect to Effect Account using burnerwallet, metamask or anchor
    */
    async connectEffectAccount() {
      console.log('Connecting to account with wallet.')
      try {
          if (this.connectAccount.provider) {
            this.connectResponse = await this.client.connectAccount(this.connectAccount.provider, this.connectAccount.account)
          } else {
            this.$emit('error', 'Login with on of the wallet.')
          }
          this.accountConnected = true
          this.account = this.connectResponse
          this.$emit('account', this.connectResponse, this.client)
      } catch (error) {
            this.$emit('error', 'Login failed, try again.')
            console.error(error)
      }
    },
  }
})
</script>