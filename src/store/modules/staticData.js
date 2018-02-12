import * as icons from '../../assets/icons'
import * as skillData from './skillData'

const state = {
  weaponData: {
    hammer: {
      name: 'Hammer',
      value: 5.2,
      icon: icons.Hammer
    },
    huntingHorn: {
      name: 'Hunting Horn',
      value: 4.2,
      icon: icons.HuntingHorn
    },
    switchAxe: {
      name: 'Switch Axe',
      value: 3.5,
      icon: icons.SwitchAxe
    },
    greatSword: {
      name: 'Great Sword',
      value: 4.8,
      icon: icons.GreatSword
    },
    chargeBlade: {
      name: 'Charge Blade',
      value: 3.6,
      icon: icons.ChargeBlade
    },
    insectGlaive: {
      name: 'Insect Glaive',
      value: 3.1,
      icon: icons.InsectGlaive
    },
    longSword: {
      name: 'Long Sword',
      value: 3.3,
      icon: icons.LongSword
    },
    lance: {
      name: 'Lance',
      value: 2.3,
      icon: icons.Lance
    },
    gunLance: {
      name: 'Gunlance',
      value: 2.3,
      icon: icons.Gunlance
    },
    swordAndShield: {
      name: 'Sword And Shield',
      value: 1.4,
      icon: icons.SwordAndShield
    },
    dualBlades: {
      name: 'Dual Blades',
      value: 1.4,
      icon: icons.DualBlades
    },
    lightBowGun: {
      name: 'Light Bow Gun',
      value: 1.3,
      icon: icons.LightBowgun
    },
    heavyBowGun: {
      name: 'Heavy Bow Gun',
      value: 1.5,
      icon: icons.HeavyBowgun
    },
    bow: {
      name: 'Bow',
      value: 1.2,
      icon: icons.Bow
    }
  },
  sharpnessData: {
    yellow: {
      name: 'Yellow',
      multiplier: 1
    },
    green: {
      name: 'Green',
      multiplier: 1.05
    },
    blue: {
      name: 'Blue',
      multiplier: 1.2
    },
    white: {
      name: 'White',
      multiplier: 1.32
    }
  },
  skillData
}

const getters = {
  getSkillNames (state) {
    return Object.values(state.skillData).map(skill => skill.name)
  }
}

export default {
  namespaced: true,
  state,
  getters
}
