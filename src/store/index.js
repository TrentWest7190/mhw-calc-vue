import Vue from 'vue'
import Vuex from 'vuex'
import staticData from './modules/staticData'
import calculator from './modules/calculator'

import * as skills from './modules/skillData'

const modifiers = Object.keys(skills)
  .sort()
  .reduce((a, v) => {
    a[v] = {
      level: 0,
      mod: {}
    }
    return a
  }, {})

Vue.use(Vuex)

const state = {
  configName: 'config 1',
  sharpness: {
    name: 'Yellow',
    multiplier: 1
  },
  weapon: {
    raw: 0,
    affinity: 0
  },
  weaponClass: {
    name: '',
    value: 1
  },
  modifiers,
  savedConfigs: []
}

const mutations = {
  setSharpness (state, sharpness) {
    state.sharpness = sharpness
  },
  setWeaponRaw (state, raw) {
    if (Number.isNaN(raw)) raw = 0
    state.weapon = Object.assign({}, state.weapon, { raw })
  },
  setWeaponAffinity (state, affinity) {
    if (affinity !== '-' && affinity !== '') affinity = Number(affinity)
    state.weapon = Object.assign({}, state.weapon, { affinity })
  },
  setWeaponClass (state, weaponClass) {
    state.weaponClass = Object.assign({}, weaponClass)
  },
  addModifier (state) {
    state.modifiers = [...state.modifiers, {}]
  },
  removeModifier (state, index) {
    state.modifiers = state.modifiers.filter((_, i) => i !== index)
  },
  changeModifier (state, {index, name}) {
    state.modifiers[index] = {
      name,
      level: 0
    }
  },
  setModifierLevel (state, {modName, level, mod}) {
    state.modifiers[modName] = {
      level,
      mod
    }
  },
  saveConfig (state, attack) {
    const newConfig = {
      name: state.configName,
      modifiers: JSON.parse(JSON.stringify(state.modifiers)),
      attack,
      icon: state.weaponClass.icon
    }
    state.savedConfigs.push(newConfig)
    state.configName = `config ${state.savedConfigs.length + 1}`
  },
  removeConfig (state, nameToRemove) {
    state.savedConfigs = state.savedConfigs.filter(conf => conf.name !== nameToRemove)
  },
  setConfigName (state, configName) {
    state.configName = configName
  }
}

export default new Vuex.Store({
  modules: {
    staticData,
    calculator
  },
  mutations,
  state
})
