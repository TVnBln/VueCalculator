<template>
  <div class="app">
    <Calculator v-if="!scientific"/>
    <ScientificCalculator v-if="scientific"/>
  </div>
</template>

<script>
import Calculator from './components/Calculator/Calculator.vue'
import ScientificCalculator from "@/components/ScientificCalculator/ScientificCalculator";
import {useStore} from "vuex";
import {computed} from "vue";

export default {
  name: 'App',
  components: {
    Calculator,
    ScientificCalculator
  },
  setup() {
    const store = useStore()

    const scientific = computed(() => store.state.scientific)
    return {
      scientific
    }
  }
}
</script>

<style>
.app {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
