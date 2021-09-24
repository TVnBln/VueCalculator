<template>
  <div class="unit-converter">
    <div class="header">
      <div @click="goBack"><img class="back" src="../../assets/arrow-left.png"></div>
      <div>Unit Converter</div>
    </div>
<!--    <div class="links" >-->
<!--      <button class="link" v-for="link in links" :key="link" v-on:click="currentLink = link" >{{ link }}</button>-->
<!--&lt;!&ndash;      <div class="link">Length</div>&ndash;&gt;-->
<!--&lt;!&ndash;      <div class="link">Temperature</div>&ndash;&gt;-->
<!--&lt;!&ndash;      <div class="link">Volume</div>&ndash;&gt;-->
<!--&lt;!&ndash;      <div class="link">Mass</div>&ndash;&gt;-->
<!--&lt;!&ndash;      <div class="link">Data</div>&ndash;&gt;-->
<!--&lt;!&ndash;      <div class="link">Speed</div>&ndash;&gt;-->
<!--&lt;!&ndash;      <div class="link">Time</div>&ndash;&gt;-->
<!--    </div>-->
    <div class="converter">
      <component :is="currentPage"></component>
    </div>
  </div>
</template>

<script>
import {useStore} from "vuex";
import {computed} from "vue";
import {AreaConverter, LengthConverter} from "@/components/Converters/index";

export default {
  name: "UnitConverter",
  data() {
    return {
      currentLink: 'Area'
    }
  },
  computed: {
    currentPage() {
      return this.currentLink + 'Converter'
    }
  },
  setup() {
    const store = useStore()
    const links = computed(() => store.state.links)
    // const activeRoute = store.getters.activeRoute.component

    return{
      goBack: () => store.commit('goBack'),
      // route: (name) => store.dispatch('route', name),
      links,
      // activeRoute
    }
  },
  components: {
    AreaConverter,
    LengthConverter
  },
}
</script>

<style scoped>
.unit-converter{
  color: white;
  height: 100vh;
  display: flex;
  flex-direction: column;
  flex: 1;
}
.header{
  display: flex;
  flex: 0;
}
.back-button{
  margin-right: 10px;
}
.back{
  width: 20px;
  color: white;
}
.links{
  margin-top: 20px;

  display: flex;
  overflow-x: auto;
}
.links::-webkit-scrollbar{
  width: 0px;
}
.link{
  margin-right: 15px;
  border-radius: 35%;
  background: none;
  color: white;
  border: none
}
.converter{
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 45vh;
}
</style>
