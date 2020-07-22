<template>
  <div>
    <splitpanes class="default-theme" style="height: 800px">
      <Pane size="20">
        <Tools />
      </Pane>
      <Pane size="60">
        <Main @itemClick="onItemClick" />
      </Pane>
      <Pane size="20">
        <Att :item="item" />
      </Pane>
    </splitpanes>
  </div>
</template>

<script>
import { Splitpanes, Pane } from "splitpanes";
import "splitpanes/dist/splitpanes.css";
import Tools from "./components/Tools";
import Att from "./components/Att";
import Main from "./components/Main";

export default {
  name: "App",
  components: {
    Splitpanes,
    Pane,
    Tools,
    Att,
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
