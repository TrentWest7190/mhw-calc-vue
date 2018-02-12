<template>
  <div class="page">
    <h1>Hunter's Handbook: Damage Calculator</h1>
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
      <section class="save-table">
        <div class="scrollable-container">
          <save-table/>
        </div>
      </section>
    </div>
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
  }
}
</script>

<style lang="scss">

button {
  background-color: green;
  border: none;
  padding: 5px;
  border-radius: 10px;
  color: rgba(white, .8);
}

select, input {
  border-radius: 10px;
  padding-left: 5px;
  color: rgba(white, .8);
  background-color: rgba(black, .5);
  border: 2px dashed rgba(white, .8);
  outline: none;
}

html, body {
  height: 100%;
  margin: 0;
  padding: 0;
  font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
  color: rgba(white, .8);
  background-color: rgba(black, .6);
}

div {
  box-sizing: border-box;
}

.page {
  h1 {
    height: 5vh;
    margin: 0;
    text-align: center;
  }
}

#app {
  box-sizing: border-box;
  height: 90vh;
  width: 1160px;
  margin: auto;
  display: grid;
  grid-template-columns: 800px 350px;
  grid-template-rows: 250px  150px auto;
  grid-template-areas:
    'weapon modifier'
    'display modifier'
    'table modifier';
  grid-gap: 10px;

  section {
    border: 3px solid rgba(white, .8);
    border-radius: 20px;
    padding: 20px;
  }

  .save-table {
    grid-area: table;
    overflow-y: hidden;

    .scrollable-container {
      height: 100%;
      overflow-y: scroll;
      &::-webkit-scrollbar {
        width: 5px;
        background: transparent;
      }

      &::-webkit-scrollbar-thumb {
        background-color: white;
        border-radius: 50px;
        width: 5px;
      }

      &::-webkit-scrollbar-track {
        background-clip: content-box;
      }
    }
  }

  .modifiers {
    grid-area: modifier;
  }
}
</style>
