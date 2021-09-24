<template>
  <div class="buttons">
    <div class="left-buttons" v-if="!showHistory">
      <button class="button clear" @click="clear">C</button>
      <button class="button function">()</button>
      <button class="button function" @click="addPercent">%</button>
      <button class="button" @click="addNumberModifier('7')">7</button>
      <button class="button" @click="addNumberModifier('9')">8</button>
      <button class="button" @click="addNumberModifier('9')">9</button>
      <button class="button" @click="addNumberModifier('4')">4</button>
      <button class="button" @click="addNumberModifier('5')">5</button>
      <button class="button" @click="addNumberModifier('6')">6</button>
      <button class="button" @click="addNumberModifier('1')">1</button>
      <button class="button" @click="addNumberModifier('2')">2</button>
      <button class="button" @click="addNumberModifier('3')">3</button>
      <button class="button" @click="addPlusMinus">+/-</button>
      <button class="button" @click="addNumberModifier('0')">0</button>
      <button class="button" @click="addDecimal">.</button>
    </div>
    <div class="history"  v-if="showHistory">
      <div>
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
      <button class="button function" @click="addOperation('/')">÷</button>
      <button class="button function" @click="addOperation('*')">×</button>
      <button class="button function" @click="addOperation('-')">-</button>
      <button class="button function" @click="addOperation('+')">+</button>
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
    return {
      addNumberModifier: (x) => store.dispatch('addNumberModifier', x),
      addOperation: (operation) => store.dispatch('addOperation', operation),
      calculate: () => store.dispatch('calculate'),
      addDecimal: () => store.commit('addDecimal'),
      addPercent: () => store.dispatch('addPercent'),
      clear: () => store.commit('clear'),
      addPlusMinus: () => store.commit('addPlusMinus'),
      clearHistory: () => store.commit('clearHistory'),
      showHistory,
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
  grid-gap: 20px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(5,1fr);
}
.right-buttons{
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: repeat(5, 1fr);
}
.button{
  align-items: center;
  background: #111;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  font-size: 30px;
  height: 70px;
  justify-content: center;
  transition: filter .3s;
  width: 70px;
  color: white;
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
button{
  background: none;
  border: none;
}
.history{
  width: 250px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin-right: 0px;
  text-align: right;
}
li{
  list-style: none;
  font-size: 20px;
}
.clear-button{
  height: 40px;
  border-radius: 40px;
  background-color: green;
}
</style>
