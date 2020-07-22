<template>
  <div class="Panel">
    <h1>{{ title }}</h1>
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Panel",
  props: ["title"]
};
</script>

<style lang="less" scoped>
.Panel {
  h1 {
    height: 30px;
    line-height: 30px;
    text-align: left;
    padding-left: 10px;
    box-sizing: border-box;
    font-size: 14px;
    border-bottom: 1px solid #ccc;
  }
}
</style>
