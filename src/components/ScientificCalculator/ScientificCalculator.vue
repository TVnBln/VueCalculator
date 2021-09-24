<template>
  <div class="calculator">
    <Display/>
    <Utility/>
    <hr>
    <Buttons/>
  </div>
</template>

<script>
import Display from "@/components/ScientificCalculator/Display";
import Utility from "@/components/ScientificCalculator/Utility";
import Buttons from "@/components/ScientificCalculator/Buttons";
export default {
  name: "ScientificCalculator",
  components: {
    Display,
    Utility,
    Buttons
  }
}
</script>

<style scoped>
.calculator{
  background: black;
  width: 800px;
  height: 400px;
  padding: 20px;
  color: white;
  border-radius: 30px;
}
</style>
