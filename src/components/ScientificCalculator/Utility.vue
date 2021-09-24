<template>
  <div class="utility">
    <div class="utility-left">
      <div class="button" @click="showHistory"><img class="button-image" src="../../assets/clock-regular.svg"></div>
      <div class="button" @click="unitConverter"><img src="../../assets/ruler-solid.svg"></div>
      <div class="button" v-on:click="scientific"><img src="../../assets/square-root-alt-solid.svg"></div>
    </div>
    <div class="utility-right button" @click="backspace"><img src="../../assets/backspace-solid.svg"></div>
  </div>
</template>

<script>
import {useStore} from "vuex";

export default {
  name: "Utility",
  setup() {
    const store = useStore()

    return {
      backspace: () => store.commit('backspace'),
      showHistory: () => store.commit('showHistory'),
      unitConverter: () => store.commit('unitConverter'),
      scientific: () => store.commit('scientific')
    }
  }
}
</script>

<style scoped>
.utility{
  height: 10px;
  display: flex;
  flex: 1;
  justify-content: space-between;
  padding: 10px;
  gap: 180px;
}
.utility-left{
  display: flex;
  flex: 1;
  justify-content: space-around;
}
.button{
  height: 20px;
  width: 20px;
  cursor: pointer;
  transition: filter .3s;
}
.button:active,
.button:focus{
  filter: brightness(120%);
}
.button-image{
  color: white;
}
</style>
