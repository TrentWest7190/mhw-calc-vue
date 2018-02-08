<template>
  <div class="container">
    <weapon-button
      v-for="(val, key) in weaponData"
      :key="key"
      :src="val.icon"
    />
  </div>
</template>

<script>
import WeaponButton from './WeaponButton'
export default {
  name: 'WeaponSelector',
  components: {
    WeaponButton
  },
  data () {
    return {
      weaponData: this.$store.state.staticData.weaponData
    }
  }
}

</script>

<style style="scss" scoped>

</style>
