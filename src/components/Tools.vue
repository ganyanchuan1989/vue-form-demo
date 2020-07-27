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
          :move="moveHandle"
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
        { type: "input", id: "input", taglbl: "input", span: 12 },
        { type: "select", id: "select", taglbl: "select", span: 12 },
        { type: "radio", id: "radio", taglbl: "radio", span: 12 },
        { type: "number", id: "number", taglbl: "number", span: 12 },
        {
          type: "textarea",
          id: "textarea",
          taglbl: "textarea",
          span: 12
        },
        { type: "switch", id: "switch", taglbl: "switch", span: 12 },
        {
          type: "checkbox",
          id: "checkbox",
          taglbl: "checkbox",
          span: 12
        },
        {
          type: "button",
          id: "button",
          taglbl: "button",
          span: 12
        },
        {
          type: "space",
          id: "space",
          taglbl: "space",
          span: 12
        }
      ]
    };
  },
  methods: {
    cloneElement(element) {
      const { id, taglbl, type, ...otherAtt } = element;
      console.log(taglbl);
      let label = "文本";
      if (type === "button" || type === "space") {
        label = "按钮";
      }
      return { ...otherAtt, type, id: id + uuidv4(), label };
    },
    moveHandle(evt) {
      const { related, draggedContext } = evt;
      const { element } = draggedContext;
      const relatedCls = related.getAttribute("class");
      console.log(relatedCls);
      if (element.type === "button" && relatedCls === "dragArea") {
        return false;
      }
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
