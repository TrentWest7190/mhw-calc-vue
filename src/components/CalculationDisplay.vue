<template>
  <div class="display-container">
    <div class="calc-display">
      <div>
        <span>True Attack</span>
        <span>{{ trueAttack }}</span>
      </div>
      <div>
        <span>Total Attack Modifier</span>
        <span>{{ totalAttackMod }}</span>
      </div>
      <div :class="{ over: totalAffinity > 100}">
        <span>Total Affinity Modifier</span>
        <span>{{ totalAffinityMod }}</span>
      </div>
      <div class="final-attack">
        <span>Final Attack</span>
        <span>{{ finalDamage }}</span>
      </div>
    </div>
    <div>
      <span>Save Config As:</span>
      <input v-model="configName"/>
      <button @click="saveConfig" :class="{ disabled : disableSave }" :disabled="disableSave">Save</button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'CalculationDisplay',
  computed: {
    ...mapGetters('calculator', {
      finalDamage: 'getFinalDamage',
      totalAttackMod: 'getTotalAttackMod',
      totalAffinityMod: 'getTotalAffinityMod',
      trueAttack: 'getTrueAttack',
      totalAffinity: 'getTotalAffinity'
    }),
    disableSave () {
      const configNames = this.$store.state.savedConfigs.map(conf => conf.name)
      return configNames.includes(this.configName) || this.$store.state.weaponClass.name.length === 0
    },
    configName: {
      get () {
        return this.$store.state.configName
      },
      set (value) {
        this.$store.commit('setConfigName', value)
      }
    }
  },
  methods: {
    saveConfig () {
      this.$store.commit('saveConfig', this.finalDamage)
    }
  }
}
</script>

<style lang='scss' scoped>

.disabled {
  opacity: .5;
}

.display-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}

.calc-display {
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  .final-attack {
    color: goldenrod;
  }

  > div {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;

    &.over {
      color: rgba(red, .8);
    }

    > span {
      text-align: center;

      &:first-child {
        font-size: 1.2em;
      }
      &:last-child {
        font-size: 1.5em;
      }
    }
  }
}
</style>
