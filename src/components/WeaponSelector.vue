<template>
  <div class="weapon-selector">
    <div class="class-selection">
      <div class="weapon-buttons">
        <weapon-button
          v-for="(val, key) in weaponData"
          :key="key"
          :weaponClass="val"
          :click="setWeaponClass"
          :is-active="weaponClass.name === val.name"
        />
      </div>
      <span>Class Multiplier: {{ weaponClass.value }}</span>
    </div>
    <div class="detail-entry">
      <span>Raw</span>
      <input :value="raw" @input="setWeaponRaw" type="number"/>
      <span>Affinity</span>
      <input :value="affinity" @input="setWeaponAffinity" type="number"/>
      <span v-if="!isRanged">Sharpness</span>
      <select v-model="sharpness" v-if="!isRanged">
        <option v-for="(val, key) in sharpnessData" :key="key" :value="val">{{ val.name }}</option>
      </select>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import WeaponButton from './WeaponButton'

export default {
  name: 'WeaponSelector',
  components: {
    WeaponButton
  },
  computed: {
    ...mapState('staticData', {
      weaponData: state => state.weaponData,
      sharpnessData: state => state.sharpnessData
    }),
    ...mapState({
      raw: state => state.weapon.raw,
      affinity: state => state.weapon.affinity,
      sharpness: state => state.sharpness,
      weaponClass: state => state.weaponClass
    }),
    isRanged () {
      return this.$store.getters['calculator/isRanged']
    },
    sharpness: {
      get () {
        return this.$store.state.sharpness
      },
      set (input) {
        this.$store.commit('setSharpness', input)
      }
    }
  },
  methods: {
    setWeaponRaw (input) {
      const value = input.target.value
      this.$store.commit('setWeaponRaw', value)
    },
    setWeaponAffinity (input) {
      let value = input.target.value
      if (value > 100) value = 100
      if (value < -100) value = -100
      this.$store.commit('setWeaponAffinity', value)
    },
    setWeaponClass (value) {
      this.$store.commit('setWeaponClass', value)
    }
  }
}

</script>

<style lang="scss" scoped>
.weapon-selector {
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;

  .class-selection {
    display: flex;
    flex-direction: column;

    .weapon-buttons {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      margin-bottom: 20px;
    }

    span {
      font-size: 40px;
      text-align: center;
      border-top: 2px gray solid;
      padding-top: 20px;
    }
  }

  .detail-entry {
    display: flex;
    flex-direction: column;

    span {
      font-size: 1.5em;
    }

    input, select {
      height: 35px;
      font-size: 1.3em;
    }
  }
}
</style>
