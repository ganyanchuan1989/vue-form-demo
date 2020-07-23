<template>
  <Panel title="属性">
    <Form
      v-for="(val, key) in item"
      :key="key"
      :label-col="{ span: 5 }"
      :wrapper-col="{ span: 18 }"
    >
      <FormItem :label="key">
        <Input :value="val" @change="e => changeHandle(e, key)" />
      </FormItem>
    </Form>
  </Panel>
</template>

<script>
import Panel from "./Panel";
import { Form, Input } from "ant-design-vue";

export default {
  name: "Att",
  components: {
    Panel,
    Input,
    Form,
    FormItem: Form.Item
  },
  props: {
    item: {},
    updateCb: null
  },
  beforeUpdate() {
    console.log(">>>>>");
  },
  methods: {
    changeHandle(e, key) {
      console.log(e.target.value, key);
      console.log(this.item);
      this.item[key] = e.target.value;
      // this.updateCb && this.updateCb(this.item);
    }
  }
};
</script>

<style></style>
