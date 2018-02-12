import BigNumber from 'bignumber.js'
import { getTotalModValue } from '../../helpers/calculate'

const getters = {
  getSharpnessMulti (state, getters, rootState) {
    return rootState.sharpness.multiplier
  },
  getTotalAttackMod (state, getters, rootState) {
    const modifierArray = Object.values(rootState.modifiers).map(mod => mod.mod)
    return modifierArray.reduce(getTotalModValue('attack'), 0)
  },
  getTotalAffinityMod (state, getters, rootState) {
    const modifierArray = Object.values(rootState.modifiers).map(mod => mod.mod)
    return modifierArray.reduce(getTotalModValue('affinity'), 0)
  },
  getTrueAttack (state, getters, rootState) {
    return Math.round(rootState.weapon.raw / rootState.weaponClass.value)
  },
  getFinalDamage (state, getters, rootState) {
    return Math.round(new BigNumber(getters.getTotalAttack).times(getters.critMultiplier).times(getters.getSharpnessMulti).toNumber())
  },
  getTotalAffinity (state, getters, rootState) {
    let affinity = rootState.weapon.affinity + getters.getTotalAffinityMod
    if (affinity > 100) return 100
    return affinity
  },
  getTotalAttack (state, getters, rootState) {
    return getters.getTrueAttack + getters.getTotalAttackMod
  },
  critMultiplier (state, getters, rootState) {
    const critBoost = rootState.modifiers.criticalBoost.mod.critMulti || 0.25
    const critRate = new BigNumber(getters.getTotalAffinity).div(100)
    return new BigNumber(critBoost).times(critRate).plus(1).toNumber()
  }
}

export default {
  namespaced: true,
  getters
}
