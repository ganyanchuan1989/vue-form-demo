<template>
  <div>
    <splitpanes class="default-theme" style="height: 800px">
      <Pane size="20">
        <Tools />
      </Pane>
      <Pane size="80">
        <Main @itemClick="onItemClick" />
      </Pane>
    </splitpanes>
  </div>
</template>

<script>
import { Splitpanes, Pane } from "splitpanes";
import "splitpanes/dist/splitpanes.css";
import Tools from "./components/Tools";
import Main from "./components/Main";

export default {
  name: "App",
  components: {
    Splitpanes,
    Pane,
    Tools,
    Main
  },
  data() {
    return { item: {} };
  },
  methods: {
    onItemClick(item) {
      console.log("item", item);
      this.item = item;
    }
  }
};
</script>

<style lang="less" scoped></style>
