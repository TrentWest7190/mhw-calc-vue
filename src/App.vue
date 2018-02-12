<template>
  <div id="app">
    <section class="weapon-selector">
      <weapon-selector/>
    </section>
    <section class="modifiers">
      <modifiers/>
    </section>
    <section class="display">
      <calculation-display/>
    </section>
    <section>
      <input v-model="configName"/>
      <button @click="saveConfig">Save</button>
    </section>
    <section class="save-table">
      <save-table/>
    </section>
  </div>
</template>

<script>
import WeaponSelector from './components/WeaponSelector'
import Modifiers from './components/Modifiers'
import CalculationDisplay from './components/CalculationDisplay'
import SaveTable from './components/SaveTable'

export default {
  name: 'App',
  components: {
    WeaponSelector,
    Modifiers,
    CalculationDisplay,
    SaveTable
  },
  computed: {
    configName: {
      get () {
        return this.$store.state.configName
      },
      set (value) {
        this.$store.commit('setConfigName', value)
      }
    },
    finalAttack () {
      return this.$store.getters['calculator/getFinalDamage']
    }
  },
  methods: {
    saveConfig () {
      this.$store.commit('saveConfig', this.finalAttack)
    }
  }
}
</script>

<style lang="scss">
html, body {
  height: 100%;
  margin: 0;
  padding: 0;
  font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
}

div {
  box-sizing: border-box;
}

#app {
  box-sizing: border-box;
  height: 100vh;
  width: 1160px;
  margin: auto;
  display: grid;
  grid-template-columns: 800px 350px;
  grid-template-rows: 250px  100px auto;
  grid-template-areas:
    'weapon modifier'
    'display save'
    'table table';
  grid-gap: 10px;

  section {
    border: 3px solid black;
    border-radius: 20px;
    padding: 20px;
  }

  .save-table {
    grid-area: table;
  }
}
</style>
