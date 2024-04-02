import { ISchema } from "@formily/react";
import { composeEnum } from '../../utils'

export const treeSelectSchema: ISchema = {
  type: "object",
  properties: {
    allowClear: {
      type: "boolean",
      title: "允许清除内容",
      "x-decorator": "FormItem",
      "x-component": "Switch",
    },
    autoClearSearchValue: {
      type: "boolean",
      title: "选中自动清除",
      "x-decorator": "FormItem",
      "x-component": "Switch",
      "x-component-props": {
        defaultChecked: true,
      },
      "x-decorator-props": {
        tooltip: "仅在多选或者标签模式下支持",
      },
    },
    autoFocus: {
      type: "boolean",
      title: "自动获取焦点",
      "x-decorator": "FormItem",
      "x-component": "Switch",
    },
    bordered: {
      type: "boolean",
      title: "是否有边框",
      "x-decorator": "FormItem",
      "x-component": "Switch",
      "x-component-props": {
        defaultChecked: true,
      },
    },
    labelInValue: {
      type: "boolean",
      title: "标签值",
      "x-decorator": "FormItem",
      "x-component": "Switch",
      "x-decorator-props": {
        tooltip:
          "是否把每个选项的 label 包装到 value 中，会把 Select 的 value 类型从 string 变为 { value: string, label: ReactNode } 的格式",
      },
    },
    showArrow: {
      type: "boolean",
      title: "显示箭头",
      "x-decorator": "FormItem",
      "x-component": "Switch",
    },
    showSearch: {
      type: "boolean",
      title: "支持搜索",
      "x-decorator": "FormItem",
      "x-component": "Switch",
    },
    virtual: {
      type: "boolean",
      title: "开启虚拟滚动",
      "x-decorator": "FormItem",
      "x-component": "Switch",
      "x-component-props": {
        defaultChecked: true,
      },
    },
    treeCheckable: {
      type: "boolean",
      title: "开启复选",
      "x-decorator": "FormItem",
      "x-component": "Switch",
    },
    treeDefaultExpandAll: {
      type: "boolean",
      title: "默认展开所有",
      "x-decorator": "FormItem",
      "x-component": "Switch",
    },
    dropdownMatchSelectWidth: {
      type: "boolean",
      title: "下拉选择器同宽",
      "x-decorator": "FormItem",
      "x-component": "Switch",
      "x-component-props": {
        defaultChecked: true,
      },
      "x-decorator-props": {
        tooltip:
          "默认将设置 min-width，当值小于选择框宽度时会被忽略。false 时会关闭虚拟滚动",
      },
    },
    showCheckedStrategy: {
      type: "string",
      title: "复选回显策略",
      enum: composeEnum(
        ["SHOW_ALL", "SHOW_PARENT", "SHOW_CHILD"],
        ["显示所有", "显示父节点", "显示子节点"]
      ),
      "x-decorator": "FormItem",
      "x-component": "Select",
      "x-component-props": {
        defaultValue: "SHOW_CHILD",
      },
      "x-decorator-props": {
        tooltip:
          "配置 treeCheckable 时，定义选中项回填的方式。TreeSelect.SHOW_ALL: 显示所有选中节点(包括父节点)。TreeSelect.SHOW_PARENT: 只显示父节点(当父节点下所有子节点都选中时)。 默认只显示子节点",
      },
    },
    treeDefaultExpandedKeys: {
      type: "boolean",
      title: "默认展开选项",
      "x-decorator": "FormItem",
      "x-component": "ValueInput",
      "x-component-props": {
        include: ["EXPRESSION"],
      },
      "x-decorator-props": {
        tooltip: "格式：Array<string | number>",
      },
    },
    treeNodeFilterProp: {
      type: "string",
      title: "节点过滤属性",
      "x-decorator": "FormItem",
      "x-component": "Input",
      "x-decorator-props": {
        tooltip: "输入项过滤对应的 treeNode 属性",
      },
    },
    treeNodeLabelProp: {
      type: "string",
      title: "标签显示名称",
      "x-decorator": "FormItem",
      "x-component": "Input",
      "x-decorator-props": {
        tooltip: "默认为title",
      },
    },
    filterTreeNode: {
      type: "boolean",
      title: "节点过滤器",
      "x-decorator": "FormItem",
      "x-component": "ValueInput",
      "x-component-props": {
        include: ["BOOLEAN", "EXPRESSION"],
      },
    },
    treeDataSimpleMode: {
      type: "boolean",
      title: "使用简单数据结构",
      "x-decorator": "FormItem",
      "x-component": "ValueInput",
      "x-component-props": {
        include: ["BOOLEAN", "EXPRESSION"],
      },
      "x-decorator-props": {
        tooltip: `使用简单格式的 treeData，具体设置参考可设置的类型 (此时 treeData 应变为这样的数据结构: [{id:1, pId:0, value:'1', title:"test1",...},...]， pId 是父节点的 id)`,
      },
    },
    listHeight: {
      type: "number",
      title: "弹窗滚动高度",
      "x-decorator": "FormItem",
      "x-component": "NumberPicker",
      "x-component-props": {
        defaultValue: 256,
      },
    },
    placeholder: {
      type: "string",
      title: "占位提示",
      "x-decorator": "FormItem",
      "x-component": "Input",
    },
    size: {
      type: "string",
      title: "尺寸",
      enum: composeEnum(
        ["large", "small", "middle", null!],
        ["大", "小", "默认", "继承"]
      ),
      "x-decorator": "FormItem",
      "x-component": "Select",
      "x-component-props": {
        defaultValue: "middle",
      },
    },
  },
};
