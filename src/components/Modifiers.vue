<template>
  <div class="mod-selector">
    <div v-for="(modifier, modName) in modifiers" :key="modName" class="modifier">
      <div class="mod-text">
        <span>{{ skillData[modName].name }}</span>
        <span class="mod-description">{{ getModifierDescription(modName) }}</span>
      </div>
      <select @change="updateModifierLevel($event, modName)">
        <option :value="0">0</option>
        <option v-for="level in getSkillLevels(modName)" :key="level" :value="level">{{ level }}</option>
      </select>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'Modifiers',
  computed: {
    ...mapState('staticData', [
      'skillData'
    ]),
    ...mapState([
      'modifiers'
    ])
  },
  methods: {
    changeModifier (event, index) {
      const name = event.target.value
      this.$store.commit('changeModifier', {
        index,
        name
      })
    },
    updateModifierLevel (event, modName) {
      const level = Number(event.target.value)
      let mod
      if (level === 0) {
        mod = {}
      } else {
        mod = this.$store.state.staticData.skillData[modName].values[ level - 1 ]
      }
      this.$store.commit('setModifierLevel', {
        modName,
        level,
        mod
      })
    },
    getSkillLevels (skillName) {
      if (!skillName) return []
      return this.$store.state.staticData.skillData[skillName].levels
    },
    getModifierDescription (skillName) {
      const mod = this.$store.state.modifiers[skillName].mod

      const descLookup = {
        attack: 'Attack: +',
        affinity: 'Affinity: +',
        critMulti: 'Crit Damage: ',
        attackMulti: 'Attack Multiplier: +'
      }
      let description = ''
      for (let attr in mod) {
        description += `${descLookup[attr]}${mod[attr]}, `
      }
      return description.slice(0, -2)
    },
    ...mapMutations([
      'addModifier',
      'removeModifier'
    ])
  }
}
</script>

<style lang="scss" scope>
.mod-selector {
  display: flex;
  flex-direction: column;
  height: 100%;

  .modifier ~ .modifier {
    border-top: 1px gray dashed;
  }

  .modifier {
    display: flex;
    font-size: 1.1em;
    justify-content: space-between;
    height: 40px;
    padding-top: 2px;
    padding-bottom: 2px;

    select {
      width: 100px;
      font-size: 1.1em;
    }

    .mod-text {
      display: flex;
      flex-direction: column;
    }

    .mod-description {
      font-size: .7em;
      font-weight: bolder;
    }
  }
}
</style>
