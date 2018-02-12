<template>
  <div class="calc-display">
    <div>
      <span>True Attack</span>
      <span>{{ trueAttack }}</span>
    </div>
    <div>
      <span>Total Attack Modifier</span>
      <span>{{ totalAttackMod }}</span>
    </div>
    <div>
      <span>Total Affinity Modifier</span>
      <span>{{ totalAffinityMod }}</span>
    </div>
    <div>
      <span>Final Attack</span>
      <span>{{ finalDamage }}</span>
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
      trueAttack: 'getTrueAttack'
    })
  }
}
</script>

<style lang='scss'>
.calc-display {
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  > div {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

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
