<template>
  <div class="calculator">
    <div v-if="calculator">
      <Display />
      <Utility/>
      <hr>
      <Buttons/>
    </div>
    <div v-if="!calculator">
      <UnitConverter />
    </div>
  </div>
</template>

<script>
import Display from "@/components/Calculator/Display";
import Utility from "@/components/Calculator/Utility";
import Buttons from "@/components/Calculator/Buttons";
import UnitConverter from "@/components/Converters/UnitConverter";
import {useStore} from "vuex";
import {computed} from "vue";
export default {
  name: "Calculator",
  setup() {
    const store = useStore()

    const calculator = computed(() => store.state.calculator)
    return {
      calculator
    }
  },
  components: {
    UnitConverter,
    Display, Utility, Buttons
  },
}
</script>

<style scoped>
.calculator{
  background: black;
  width: 400px;
  height: 800px;
  padding: 20px;
  color: white;
  border-radius: 30px;
}
</style>
