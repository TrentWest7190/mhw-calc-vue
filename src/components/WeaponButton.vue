<template functional>
  <button
    class="weapon-button"
    :class="{ active: props.isActive }"
    @click="props.click(props.weaponClass)"
  >
    <img class="weapon-button-img" :src="props.weaponClass.icon">
  </button>
</template>

<style lang="scss" scoped>
.weapon-button {
  background-color: rgba(0,0,0,0);
  border: 3px solid black;
  border-radius: 3px;
  margin: 3px;
  height: 40px;
  width: 40px;
  padding: 1px;
  &.active {
    background-color: green;
  }
  &-img {
    height: 30px;
    width: 30px;
    cursor: pointer;
  }
}
</style>
