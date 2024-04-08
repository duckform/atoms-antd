import { ISchema } from "@formily/react";
import { composeEnum } from "../../utils/composeEnum";

export const CascaderSchema: ISchema = {
  type: "object",
  properties: {
    allowClear: {
      type: "boolean",
      title: "允许清除内容",
      "x-decorator": "FormItem",
      "x-component": "Switch",
      "x-component-props": {
        defaultChecked: true,
      },
    },
    changeOnSelect: {
      type: "boolean",
      title: "选择时触发",
      "x-decorator": "FormItem",
      "x-component": "Switch",
      "x-decorator-props": {
        tooltip: "点选每级菜单选项值都会发生变化",
      }
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
    displayRender: {
      type: "string",
      title: "渲染函数",
      "x-decorator": "FormItem",
      "x-component": "ValueInput",
      "x-component-props": {
        include: ["EXPRESSION"],
      },
      "x-decorator-props": {
        tooltip: '选择后展示的渲染函数，默认为label => label.join("/")	',
      }
    },
    fieldNames: {
      type: "string",
      title: "自定义字段名",
      "x-decorator": "FormItem",
      "x-component": "ValueInput",
      "x-component-props": {
        include: ["EXPRESSION"],
      },
      "x-decorator-props": {
        tooltip: '默认值：{ label: "label", value: "value", children: "children" }',
      }
    },
    showSearch: {
      type: "boolean",
      title: "支持搜索",
      "x-decorator": "FormItem",
      "x-component": "Switch",
    },
    notFoundContent: {
      type: "string",
      title: "空状态内容",
      "x-decorator": "FormItem",
      "x-component": "Input",
      "x-component-props": {
        defaultValue: "Not Found",
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
