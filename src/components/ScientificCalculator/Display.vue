<template>
  <div class="display">
<!--    <div class="calculation">{{calculation}}</div>-->
    <div class="output">{{display}}</div>
    <div class="output">{{output}}</div>
  </div>
</template>

<script>
import {useStore} from "vuex";
import {computed} from "vue";

export default {
  name: "Display",
  setup() {
    const store = useStore();

    const calculation = computed(() => store.state.calculation)
    const output = computed(() => store.state.output)
    const display = computed(() => store.state.display)

    return {
      calculation,
      output,
      display
    }
  }
}
</script>

<style scoped>
.display{
  display: flex;
  flex-direction: column;
  height: 100px;
  flex: 1;
  justify-content: space-between;
  text-align: right;
}
.calculation {
  font-size: 50px;
}
.output {
  font-size: 30px;
  color: gray;
}
</style>
