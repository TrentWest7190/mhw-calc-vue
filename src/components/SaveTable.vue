<template>
  <div class="config-container">
    <div v-for="config in savedConfigs" :key="config.name" class="config">
      <img :src="config.icon" class="config-icon"/>
      <span class="config-name">{{ config.name }}</span>
      <div class="config-desc">
        <span v-if="!modifiersExist(config.modifiers)" :style="{ 'font-weight' : 'bolder' }">No Modifers Applied</span>
        <div v-else class="mod-descs">
          <div v-for="(mod, modName) in config.modifiers" :key="modName">
            <span class="mod-name">{{ skillData[modName].name }}: </span>
            <span class="mod-level">{{ mod.level }}</span>
          </div>
        </div>
      </div>
      <span class="config-atk">Atk:</span>
      <span class="config-attack">{{ config.attack }}</span>
      <button @click="removeConfig(config.name)" class="remove-button">Remove</button>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'SaveTable',
  computed: {
    ...mapState([
      'savedConfigs'
    ]),
    ...mapState('staticData', [
      'skillData'
    ])
  },
  methods: {
    getConfigModDescription (mods) {
      let desc = 'Modifiers: '
      for (let modName in mods) {
        const level = mods[modName].level
        if (level > 0) {
          desc += `${this.skillData[modName].name}: ${level} `
        }
      }
      return desc === 'Modifiers: ' ? 'No Modifiers Applied' : desc
    },
    modifiersExist (mods) {
      for (let modName in mods) {
        const level = mods[modName].level
        if (level > 0) {
          return true
        }
      }
      return false
    },
    removeConfig (configName) {
      this.$store.commit('removeConfig', configName)
    }
  }
}
</script>

<style lang='scss'>
.config-container {
  padding-right: 20px;
  .config ~ .config {
    border-top: 1px gray dashed;
  }
}
.config {
  position: relative;
  display: grid;
  grid-template-columns: 50px auto;
  grid-template-rows: 50px 20px 50px;
  grid-template-areas:
    'icon name'
    'desc desc'
    '. attack';
  grid-gap: 5px;
  align-items: center;

  .config-icon {
    grid-area: icon;
  }

  .config-name {
    grid-area: name;
    font-size: 1.5em;
  }

  .config-desc {
    grid-area: desc;

    .mod-descs {
      display: flex;

      > div {
        margin: 5px;
      }

      .mod-level {
        font-weight: bolder;
      }
    }
  }

  .config-attack {
    grid-area: attack;
    font-size: 2em;
    font-weight: bolder;
  }

  .config-atk {
    font-size: 1.5em;
    font-weight: bolder;
  }

  .remove-button {
    grid-column: 2 / 3;
    grid-row: 1/ 2;
    align-self: center;
    justify-self: end;
    margin-right: 10px;
  }
}
</style>
