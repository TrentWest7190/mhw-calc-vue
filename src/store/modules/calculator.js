import BigNumber from 'bignumber.js'
import { getTotalModValue, getTotalModValueMultiply } from '../../helpers/calculate'

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
  getTotalAttackMultiplier (state, getters, rootState) {
    const modifierArray = Object.values(rootState.modifiers).map(mod => mod.mod)
    return modifierArray.reduce(getTotalModValueMultiply('attackMulti'), 1)
  },
  getTrueAttack (state, getters, rootState) {
    return Math.round(rootState.weapon.raw / rootState.weaponClass.value)
  },
  getFinalDamage (state, getters, rootState) {
    const isRanged = getters.isRanged
    return Math.round(new BigNumber(getters.getTotalAttack).times(getters.critMultiplier).times(isRanged ? 1 : getters.getSharpnessMulti).toNumber())
  },
  getTotalAffinity (state, getters, rootState) {
    let affinity = rootState.weapon.affinity + getters.getTotalAffinityMod
    if (affinity > 100) return 100
    return affinity
  },
  getTotalAttack (state, getters, rootState) {
    return new BigNumber(getters.getTrueAttack).times(getters.getTotalAttackMultiplier).plus(getters.getTotalAttackMod).toNumber()
  },
  critMultiplier (state, getters, rootState) {
    const critBoost = rootState.modifiers.criticalBoost.mod.critMulti || 0.25
    const critRate = new BigNumber(getters.getTotalAffinity).div(100)
    return new BigNumber(critBoost).times(critRate).plus(1).toNumber()
  },
  isRanged (state, getters, rootState) {
    const rangedWeaponNames = [
      'Bow',
      'Light Bow Gun',
      'Heavy Bow Gun'
    ]
    return rangedWeaponNames.includes(rootState.weaponClass.name)
  }
}

export default {
  namespaced: true,
  getters
}
