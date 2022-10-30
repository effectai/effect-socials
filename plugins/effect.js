import Vue from 'vue'
import { EffectClient } from '@effectai/effect-js'

export default ({app}, inject) => {
    const client = new EffectClient('mainnet')
    inject('effect', { ...client })
}
