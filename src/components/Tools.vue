<template>
  <Panel title="工具区">
    <div>
      <div>
        <draggable
          class="tools-container"
          :sort="false"
          :list="formItems"
          :group="{ name: 'myfrom', pull: 'clone', put: false }"
          :clone="cloneElement"
        >
          <div class="tool-item" v-for="item in formItems" :key="item.id">
            <Icon type="chrome" style="font-size:50px" />{{ item.taglbl }}
          </div>
        </draggable>
      </div>
    </div>
  </Panel>
</template>

<script>
import Panel from "./Panel";
import { Icon } from "ant-design-vue";
import draggable from "vuedraggable";
import { v4 as uuidv4 } from "uuid";

export default {
  name: "tools",
  components: {
    draggable,
    Panel,
    Icon
  },
  data: function() {
    return {
      formItems: [
        { type: "input", id: "input", taglbl: "input", span: 24 },
        { type: "select", id: "select", taglbl: "select", span: 24 },
        { type: "radio", id: "radio", taglbl: "radio", span: 24 },
        { type: "number", id: "number", taglbl: "number", span: 24 },
        {
          type: "textarea",
          id: "textarea",
          taglbl: "textarea",
          span: 24
        },
        { type: "switch", id: "switch", taglbl: "switch", span: 24 },
        {
          type: "checkbox",
          id: "checkbox",
          taglbl: "checkbox",
          span: 24
        },
        {
          type: "button",
          id: "button",
          taglbl: "button",
          span: 24
        }
      ]
    };
  },
  methods: {
    cloneElement(element) {
      const { id } = element;
      return { ...element, id: id + uuidv4(), label: "" };
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
.tools-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, 100px);
}
.tool-item {
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
