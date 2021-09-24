<template>
  <div class="buttons">
    <div class="left-buttons" v-if="!showHistory">
        <button class="button" @click="changeExtra">&#8646;</button>
        <button v-if="!extra" class="button">Rad</button>
        <button v-if="!extra" class="button" @click="addMath('sqrt')">&radic;</button>
        <button v-if="!extra" class="button" @click="addMath('sin')">sin</button>
        <button v-if="!extra" class="button" @click="addMath('cos')">cos</button>
        <button v-if="!extra" class="button" @click="addMath('tan')">tan</button>
        <button v-if="!extra" class="button" @click="addMath('ln')">In</button>
        <button v-if="!extra" class="button" @click="addMath('log')">log</button>
        <button v-if="!extra" class="button">1/<sub>×</sub></button>
        <button v-if="!extra" class="button">e<sup>×</sup></button>
        <button v-if="!extra" class="button">x<sup>2</sup></button>
        <button v-if="!extra" class="button">x<sup>y</sup></button>
        <button v-if="!extra" class="button">|x|</button>
        <button v-if="!extra" class="button">π</button>
        <button v-if="!extra" class="button">e</button>

        <button v-if="extra" class="button">Rad</button>
        <button v-if="extra" class="button" @click="addMath('sqrt')">&radic;</button>
        <button v-if="extra" class="button" @click="addMath('sin')">sinh¹</button>
        <button v-if="extra" class="button" @click="addMath('cos')">cos¹</button>
        <button v-if="extra" class="button" @click="addMath('tan')">tan¹</button>
        <button v-if="extra" class="button" @click="addMath('ln')">sinh</button>
        <button v-if="extra" class="button" @click="addMath('log')">cosh</button>
        <button v-if="extra" class="button">tanh</button>
        <button v-if="extra" class="button">sinh¹</button>
        <button v-if="extra" class="button">cosh¹</button>
        <button v-if="extra" class="button">tanh¹</button>
        <button v-if="extra" class="button">2<sup>x</sup></button>
        <button v-if="extra" class="button">x<sup>³</sup></button>
        <button v-if="extra" class="button">x!</button>
    </div>
    <div class="history"  v-if="showHistory">
      <div class="history-list">
        <li v-for="item in calculations" :key="item.calculation">
          <div>{{item.calculation}}</div>
          <div style="color: green">={{item.output}}</div>
        </li>
      </div>
      <button class="clear-button" @click="clearHistory">
        Clear History
      </button>
    </div>
    <div class="right-buttons">
      <button class="button clear" @click="clear">C</button>
      <button class="button function" @click="bracket">()</button>
      <button class="button function" @click="addPercent">%</button>
      <button class="button function" @click="addOperation('/')">÷</button>
      <button class="button" @click="addNumberModifier('7')">7</button>
      <button class="button" @click="addNumberModifier('8')">8</button>
      <button class="button" @click="addNumberModifier('9')">9</button>
      <button class="button function" @click="addOperation('*')">×</button>
      <button class="button" @click="addNumberModifier('4')">4</button>
      <button class="button" @click="addNumberModifier('5')">5</button>
      <button class="button" @click="addNumberModifier('6')">6</button>
      <button class="button function" @click="addOperation('-')">-</button>
      <button class="button" @click="addNumberModifier('1')">1</button>
      <button class="button" @click="addNumberModifier('2')">2</button>
      <button class="button" @click="addNumberModifier('3')">3</button>
      <button class="button function" @click="addOperation('+')">+</button>
      <button class="button" @click="addPlusMinus">+/<sup>-</sup></button>
      <button class="button" @click="addNumberModifier('0')">0</button>
      <button class="button" @click="addDecimal">.</button>
      <button class="button equal" @click="calculate">=</button>
    </div>
  </div>
</template>

<script>
import {useStore} from 'vuex'
import {computed} from "vue";
export default {
  name: "Buttons",
  setup() {
    const store = useStore();

    const calculations = computed(() => store.state.calculations)
    const showHistory = computed(() => store.state.showHistory)
    const extra = computed(() => store.state.extra)
    return {
      addNumberModifier: (x) => store.dispatch('addNumberModifier', x),
      addOperation: (operation) => store.dispatch('addOperation', operation),
      calculate: () => store.dispatch('calculate'),
      addDecimal: () => store.commit('addDecimal'),
      addPercent: () => store.dispatch('addPercent'),
      addMath: (type) => store.dispatch('addMath', type),
      clear: () => store.commit('clear'),
      addPlusMinus: () => store.commit('addPlusMinus'),
      clearHistory: () => store.commit('clearHistory'),
      bracket: () => store.commit('bracket'),
      changeExtra: () => store.commit('changeExtra'),
      showHistory,
      extra,
      calculations
    }
  }
}
</script>

<style scoped>
.buttons{
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 30px;
}
.left-buttons{
  display: grid;
  grid-column-gap: 60px;
  grid-row-gap: 10px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(5,1fr);
}
.right-buttons{
  display: grid;
  grid-column-gap: 60px;
  grid-row-gap: 10px;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, 1fr);
}
.button{
  align-items: center;
  background: #111;
  border-radius: 20%;
  cursor: pointer;
  display: flex;
  font-size: 15px;
  height: 30px;
  justify-content: center;
  transition: filter .3s;
  width: 50px;
  color: white;
}
button{
  background: none;
  border: none;
}
.button.function{
  color: yellowgreen;
}
.button.clear{
  color: orangered;
}
.button.equal{
  background: green;
}
.history{
  width: 270px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin-right: 0px;
  text-align: right;
  height: 190px;
}
li{
  list-style: none;
  font-size: 20px;
}
.clear-button{
  height: 40px;
  border-radius: 40px;
  background-color: green;
  z-index: 20;
}
.history-list{
  overflow-y: scroll;
  padding-right: 10px;
}
</style>
