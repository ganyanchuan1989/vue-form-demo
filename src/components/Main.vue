<template>
  <splitpanes class="default-theme">
    <Pane size="60">
      <Panel title="编辑区">
        <Form>
          <Row style="padding-right:10px">
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
                    class="custom-form-item"
                    :label="item.type !== 'button' ? item.label : ' '"
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
                    <div
                      v-if="item.type === 'space'"
                      style="height: 30px"
                    ></div>
                  </FormItem>
                </AntCol>
              </template>
            </draggable>
          </Row>
        </Form>
      </Panel>
    </Pane>

    <Pane size="40" style="height: 830px">
      <splitpanes horizontal>
        <Pane size="50">
          <Tools :item="selectedItem" />
        </Pane>
        <Pane size="50">
          <Att :item="selectedItem" />
        </Pane>
      </splitpanes>
    </Pane>
  </splitpanes>
</template>

<script>
import Panel from "./Panel";
import draggable from "vuedraggable";
import { Splitpanes, Pane } from "splitpanes";
import "splitpanes/dist/splitpanes.css";

import Att from "./Att";
import Tools from "./Tools";

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
    Tools,
    Att,
    Splitpanes,
    Pane,
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
      formItems: [],
      selectedItem: {}
    };
  },
  methods: {
    clickHandle(item) {
      // this.$emit("itemClick", item);
      this.selectedItem = item;
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

<style lang="less">
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
.custom-form-item {
  display: flex;
  .ant-form-item-label {
    width: 140px !important;
  }
  .ant-form-item-control-wrapper {
    flex: 1;
  }
}
</style>
