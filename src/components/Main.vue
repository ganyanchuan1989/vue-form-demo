<template>
  <Panel title="编辑区">
    <Form :label-col="{ span: 8 }" :wrapper-col="{ span: 16 }">
      <Row>
        <draggable
          v-bind="dragOptions"
          :list="formItems"
          class="dragArea"
          group="myfrom"
        >
          <template v-for="item in formItems">
            <AntCol
              :key="item.id"
              @click="clickHandle(item)"
              :span="item.span ? item.span : 12"
            >
              <FormItem
                :label="
                  item.label
                    ? item.label
                    : item.type === 'button'
                    ? ' '
                    : '文本'
                "
                :colon="item.type === 'button' ? false : true"
              >
                <Input v-if="item.type === 'input'" />
                <InputNumber v-if="item.type === 'number'" />
                <TextArea v-if="item.type === 'textarea'" />
                <Checkbox v-if="item.type === 'checkbox'" />
                <Select v-if="item.type === 'select'" />
                <Radio v-if="item.type === 'radio'" />
                <AntSwitch v-if="item.type === 'switch'" />
                <Button v-if="item.type === 'button'">{{
                  item.label ? item.label : "文本"
                }}</Button>
              </FormItem>
            </AntCol>
          </template>
        </draggable>
      </Row>
    </Form>
    <AntSwitch></AntSwitch>
  </Panel>
</template>

<script>
import Panel from "./Panel";
import draggable from "vuedraggable";

import {
  Input,
  Checkbox,
  Select,
  Radio,
  Switch,
  InputNumber,
  Row,
  Col,
  Form,
  Button
} from "ant-design-vue";

export default {
  name: "Main",
  components: {
    draggable,
    Panel,
    Input,
    Checkbox,
    Select,
    Radio,
    InputNumber,
    TextArea: Input.TextArea,
    AntSwitch: Switch,
    Row,
    AntCol: Col,
    Form,
    FormItem: Form.Item,
    Button
  },
  data() {
    return {
      formItems: [{ type: "input", id: "input", taglbl: "input", span: 24 }]
    };
  },
  methods: {
    clickHandle(item) {
      this.$emit("itemClick", item);
    }
  },
  computed: {
    dragOptions() {
      return {
        animation: 200,
        group: "description",
        disabled: false,
        ghostClass: "ghost"
      };
    }
  }
};
</script>

<style>
.dragArea {
  height: 800px;
}

.button {
  margin-top: 35px;
}
.flip-list-move {
  transition: transform 0.5s;
}
.no-move {
  transition: transform 0s;
}
.ghost {
  opacity: 0.1;
  background: #c8ebfb;
  border: 2px dashed red;
}
.list-group {
  min-height: 20px;
}
.list-group-item {
  cursor: move;
}
.list-group-item i {
  cursor: pointer;
}
</style>
