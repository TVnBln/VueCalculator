<template>
  <div>
    <div class="inputs">
      <select class="left">
        <option :key="option" v-for="option in inputSelect" v-on:click="setCurrentInputSelect(option)">{{option.name}}</option>
      </select>
      <div class="input-right">
        <div class="right" v-bind:class="{input: active === 'input'}">{{calculation}}</div>
        <div>{{currentInputSelect.unit}}</div>
      </div>
    </div>
    <hr>
    <div class="outputs">
      <select class="left">
        <option :key="option" v-for="option in outputSelect" v-on:click="setCurrentOutputSelect(option)">{{option.name}}</option>
      </select>
      <div class="input-right">
        <div class="right" v-bind:class="{input: active === 'output'}">{{output}}</div>
        <div>{{currentOutputSelect.unit}}</div>
      </div>
    </div>
    <hr>
  </div>
  <div class="buttons">
    <button class="button" v-on:click="setInputModifier('7')">7</button>
    <button class="button" v-on:click="setInputModifier('8')">8</button>
    <button class="button" v-on:click="setInputModifier('9')">9</button>
    <button class="button" :disabled="calculation === '' || output === ''" v-bind:class="{backDisabled: this.calculation === '' || this.output === ''}" v-on:click="backspace">&#8701;</button>
    <button class="button" v-on:click="setInputModifier('4')">4</button>
    <button class="button" v-on:click="setInputModifier('5')">5</button>
    <button class="button" v-on:click="setInputModifier('6')">6</button>
    <button class="button" v-on:click="calculation = ''; output = ''">C</button>
    <button class="button" v-on:click="setInputModifier('1')">1</button>
    <button class="button" v-on:click="setInputModifier('2')">2</button>
    <button class="button" v-on:click="setInputModifier('3')">3</button>
    <button class="button" :disabled="active === 'input'" v-on:click="this.active = 'input'" v-bind:class="{activeArrow: active === 'input'}">&uarr;</button>
    <button class="button" v-on:click="setPlusMinus">+/-</button>
    <button class="button" v-on:click="setInputModifier('0')">0</button>
    <button class="button" v-on:click="setDecimal">.</button>
    <button class="button" :disabled="active === 'output'" v-on:click="this.active = 'output'" v-bind:class="{activeArrow: active === 'output'}">	&darr;</button>
  </div>
</template>

<script>
import {to, unit} from 'mathjs'
export default {
  name: "AreaConverter",
  data() {
    return {
      inputSelect: [{name: 'Acres (ac)', slug: 'acre', unit: 'ac'}, {name: 'Hectares (ha)', slug: 'hectare', unit: 'ha'}, {name: 'Square mile (mi²)', slug: 'sqmi', unit: 'mi²'}, {name: 'Square yard (yd²)', slug: 'sqyd', unit: 'yd²'},
        {name: 'Square  (ft²)', slug: 'sqft', unit: 'ft²'}, {name: 'Square inches (in²)', slug: 'sqin', unit: 'in²'}, {name: 'Square meters (m²)', slug: 'm2', unit: 'm²'}],
      outputSelect: [{name: 'Acres (ac)', slug: 'acre', unit: 'ac'}, {name: 'Hectares (ha)', slug: 'hectare', unit: 'ha'}, {name: 'Square mile (mi²)', slug: 'sqmi', unit: 'mi²'}, {name: 'Square yard (yd²)', slug: 'sqyd', unit: 'yd²'},
        {name: 'Square  (ft²)', slug: 'sqft', unit: 'ft²'}, {name: 'Square inches (in²)', slug: 'sqin', unit: 'in²'}, {name: 'Square meters (m²)', slug: 'm2', unit: 'm²'}],
      currentInputSelect: {name: 'Acres (ac)', slug: 'acre', unit: 'ac'},
      currentOutputSelect: {name: 'Square meters (m²)', slug: 'm2', unit: 'm²'},
      calculation: '',
      output: '',
      active: 'input'
    }
  },
  methods: {
    setCurrentInputSelect(select) {
      if(this.active === 'input') {
        this.calculateInput()
        this.currentInputSelect = select
      } else {
        this.calculateOutput()
        this.currentInputSelect = select
      }
    },
    setCurrentOutputSelect(select) {
      if(this.active === 'input') {
        this.calculateInput()
        this.currentOutputSelect = select
      } else {
        this.calculateOutput()
        this.currentOutputSelect = select
      }
    },
    setInputModifier(x) {
      if(this.active === 'input'){
        this.calculation += x
        this.calculateInput()
      } else {
        this.output += x
        this.calculateOutput()
      }
    },
    setDecimal() {
      if(this.active === 'input') {
        this.calculation += '.'
      } else {
        this.output += '.'
      }
    },
    setPlusMinus(){
      if(this.active === 'input') {
        if(this.calculation === '-0') {
          this.calculation = '0'
        }
        if(parseFloat(this.calculation) >= 0) {
          this.calculation = '-' + this.calculation
        } else {
          this.calculation = this.calculation.substring(1)
        }
      } else {
        if(this.output === '-0') {
          this.output = '0'
        }
        if(parseFloat(this.output) >= 0) {
          this.output = '-' + this.output
        } else {
          this.output = this.output.substring(1)
        }
      }
    },
    backspace(){
      if(this.active === 'input'){
        this.calculation = this.calculation.slice(0, -1)
        this.calculateInput()
      } else {
        this.output = this.output.slice(0, -1)
        this.calculateOutput()
      }

    },
    calculateInput() {
      const calc = to(unit(this.calculation, this.currentInputSelect.slug), this.currentOutputSelect.slug)
      console.log(calc)
      this.output = calc
    },
    calculateOutput() {
      const calc = to(unit(this.output, this.currentOutputSelect.slug), this.currentInputSelect.slug)
      this.calculation = calc
    }
  }
}
</script>

<style scoped>
.inputs,
.outputs
{
  display: flex;
  flex-direction: column;
}
.left{
  float: left;
  width: fit-content;
  background-color: black;
  color: white;
  margin-bottom: 30px;
  margin-top: 10px;
}
.right{
  text-align: right;
  width: 100%;
  color: white;
  margin-right: 10px;
}
.buttons{
  margin-top: 30px;
  margin-left: 10px;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4,1fr);
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
button, input, select {
  background: none;
  border: none;
}
.input-right{
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}
.input{
  animation: blink-caret 1s step-end infinite;
  border-right: 1px solid white;
}
@keyframes blink-caret {
  from, to { border-color: transparent}
  50% { border-color: white}
}
.activeArrow{
  opacity: 50%;
}
.backDisabled{
  opacity: 50%;
}
</style>
