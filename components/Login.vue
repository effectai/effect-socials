<template>
  <div>
    <h2 v-if="!accountConnected" class="title">3. Connect your account</h2>
    <h2 v-else class="title">4. Submit your tasks!</h2>

    <p v-if="accountConnected">
        Logged in with: {{connectResponse.accountName}}<br>
        Batch has {{batch.length}} tasks, and will cost {{batchCost}} EFX<br>
        Your vEFX balance: <span :class="{'has-text-danger': efxAvailable === null && batchCost > vefxAvailable}">{{vefxAvailable}} {{client.config.efxSymbol}}</span><br>
        <span v-if="efxAvailable !== null">
            Your EFX balance: <span>{{efxAvailable}} {{client.config.efxSymbol}}</span><br>
            Your total EFX balance: <span :class="{'has-text-danger': batchCost > (vefxAvailable + efxAvailable)}">{{vefxAvailable + efxAvailable}} {{client.config.efxSymbol}}</span>
        </span>
    </p>

    <div id="connect-buttons" v-if="!accountConnected" class="buttons is-flex is-centered">
      <button class="button is-large is-primary" @click="login()" id="btn-login" style="background-color: #f6851b">Connect with Metamask</button>
      <button class="button is-large is-link" @click="loginEOS()" id="btn-login-eos" style="background-color: #3750A2">Connect with Anchor</button>
    </div>

    <div v-if="accountConnected && !createdBatchId">
        <br>
        <p>
            Please be patient when posting...it can take up to a minute for transaction to complete.
            Also note that you will need to sign multiple transactions if you are using Metamask.
        </p>
        <form @submit.prevent="uploadBatch">
            <div class="field is-grouped is-justify-content-center mt-6">
            <div class="control">
                <button class="button is-outlined is-primary is-wide" @click="previousStep">
                Back
                </button>
                <button type="submit" :disabled="batchCost > (vefxAvailable + efxAvailable)" :class="{'is-loading': loading}" class="button button is-primary is-wide mr-4">
                Post tasks
                </button>
            </div>
            </div>
        </form>
    </div>
    <hr>

    <a v-if="createdBatchId" :href="'/batch/' + createdBatchId" >
        Go to batch results >
    </a>
  </div>
</template>
<script>
import Vue from 'vue'
import Web3 from 'web3'
import * as effectsdk from '@effectai/effect-js'
import AnchorLink from 'anchor-link'
import AnchorLinkBrowserTransport from 'anchor-link-browser-transport'
export default Vue.extend({
    props:['batch', 'campaign', 'repetitions'],
    data() {
        return {
            createdBatchId: null,
            loading: false,
            efxAvailable: null,
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
            this.getAccountBalance()
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
    async uploadBatch() {
        try {
            // do a deposit first if the user doesn't have enough vEFX
            if (!this.account.address && this.batchCost > this.vefxAvailable) {
                const amount = (this.batchCost - this.vefxAvailable)
                console.log('trying to deposit..', amount)
                await this.client.account.deposit(parseFloat(amount).toFixed(4))
            }
            this.loading = true
            const content = {
                tasks: this.batch
            }
            const result = await this.client.force.createBatch(this.campaign.id, content, Number(this.repetitions), process.env.NUXT_ENV_PROXY_CONTRACT)
            this.createdBatchId = await this.client.force.getBatchId(result.id, this.campaign.id)
            this.$emit('success', 'Tasks successfuly uploaded to Effect Force!')
        } catch (e) {
            this.$emit('error', e)
            console.error(e)
        }
        this.loading = false
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
            this.client = new effectsdk.EffectClient(process.env.NUXT_ENV_EOS_ENV)
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
                chainId: this.client.config.eosChainId,
                rpc: this.client.config.eosNodeUrl,
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
    async getAccountBalance () {
        if (this.accountConnected) {
          if (!this.account.address) {
            const efxRow = (await this.client.api.rpc.get_currency_balance(this.client.config.efxTokenContract, this.account.accountName, this.client.config.efxSymbol))[0]
            if (efxRow) {
               this.efxAvailable = parseFloat(efxRow.replace(` ${this.client.config.efxSymbol}`, ''))
            } else {
              this.efxAvailable =  0
            }
          } else {
            // For now this doesn't add anything, as we can't deposit from BSC anyways
            // const balance = await this.getBscEFXBalance(this.account.address)
            // this.efxAvailable = parseFloat(balance)
          }
        }
    },
    async getBscEFXBalance (address) {
        // balanceOf && decimals
        const erc20JsonInterface = [
            {
            constant: true,
            inputs: [{ name: '_owner', type: 'address' }],
            name: 'balanceOf',
            outputs: [{ name: 'balance', type: 'uint256' }],
            type: 'function'
            }
        ]
        const efxAddress = this.client.config.bscEfxTokenContract// Token contract address
        const contract = new this.client.config.web3.eth.Contract(erc20JsonInterface, efxAddress)
        try {
            const balance = await contract.methods.balanceOf(address).call()
            return this.client.config.web3.utils.fromWei(balance.toString())
        } catch (error) {
            console.error('Could not retrieve balance', error)
        }
    },
  }
})
</script>