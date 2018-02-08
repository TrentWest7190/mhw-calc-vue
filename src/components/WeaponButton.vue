<template functional>
  <button class="weapon-button">
      <img class="weapon-button-img" :src="props.src">
  </button>
</template>

<style lang="scss" scoped>
.weapon-button {
  background-color: rgba(0,0,0,0);
  border: 3px solid black;
  border-radius: 3px;
  margin: 3px;
  height: 50px;
  width: 50px;
  padding: 1px;
  &-img {
    height: 36px;
    width: 36px;
  }
}
</style>
