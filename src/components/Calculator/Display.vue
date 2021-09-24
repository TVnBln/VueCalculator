<template>
  <div class="display">
    <div class="calculation">{{display}}</div>
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

    const display = computed(() => store.state.display)
    const output = computed(() => store.state.output)
    return {
      display,
      output,
    }
  }
}
</script>

<style scoped>
.display{
  display: flex;
  flex-direction: column;
  height: 150px;
  flex: 1;
  justify-content: space-between;
  text-align: right;
  margin-bottom: 20px;
}
.calculation {
  font-size: 50px;
}
.output {
  font-size: 30px;
  color: gray;
}
</style>
