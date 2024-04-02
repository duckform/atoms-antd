import { ISchema } from "@formily/react";
import { composeEnum } from "../../utils";

export const formLayoutSchema = {
  type: "object",
  properties: {
    labelCol: {
      title: "标签网格宽度",
      type: "number",
      "x-decorator-props": {
        tooltip: "参看 FormLayout 网格系统",
      },
      "x-decorator": "FormItem",
      "x-component": "NumberPicker",
    },
    wrapperCol: {
      title: "组件网格宽度",
      type: "number",
      "x-decorator": "FormItem",
      "x-decorator-props": {
        tooltip: "参看 FormLayout 网格系统",
      },
      "x-component": "NumberPicker",
    },
    labelWidth: {
      title: "标签宽度",
      "x-decorator": "FormItem",
      "x-component": "SizeInput",
    },
    wrapperWidth: {
      title: "组件宽度",
      "x-decorator": "FormItem",
      "x-component": "SizeInput",
    },
    colon: {
      title: "是否有冒号",
      type: "boolean",
      "x-decorator": "FormItem",
      "x-component": "Switch",
      "x-component-props": {
        defaultChecked: true,
      },
    },
    asterisk: {
      title: "星号",
      type: "boolean",
      "x-decorator": "FormItem",
      "x-component": "Switch",
    },
    gridSpan: {
      title: "网格跨列",
      type: "number",
      "x-decorator": "FormItem",
      "x-decorator-props": {
        tooltip: "参看 FormGrid 网格系统",
      },
      "x-component": "NumberPicker",
    },
    feedbackLayout: {
      title: "反馈布局",
      type: "string",
      enum: composeEnum(
        ["loose", "terse", "popover", "none", null!],
        ["宽松", "紧凑", "弹层", "无", "继承"],
      ),
      "x-decorator": "FormItem",
      "x-component": "Select",
      "x-component-props": {
        defaultValue: "loose",
      },
    },
    size: {
      title: "尺寸",
      type: "string",
      enum: composeEnum(
        ["large", "small", "default", null!],
        ["大", "小", "默认", "继承"],
      ),
      "x-decorator": "FormItem",
      "x-component": "Select",
      "x-component-props": {
        defaultValue: "default",
      },
    },
    layout: {
      title: "布局",
      type: "string",
      enum: composeEnum(
        ["vertical", "horizontal", "inline", null!],
        ["垂直", "水平", "内联", "继承"],
      ),
      "x-decorator": "FormItem",
      "x-component": "Select",
      "x-component-props": {
        defaultValue: "horizontal",
      },
    },
    tooltipLayout: {
      title: "提示布局",
      type: "string",
      enum: composeEnum(
        ["icon", "text", null!],
        ["宽松", "紧凑", "弹层", "无", "继承"],
      ),
      "x-decorator": "FormItem",
      "x-component": "Select",
      "x-component-props": {
        defaultValue: "icon",
      },
    },
    labelAlign: {
      title: "标签对齐",
      type: "string",
      enum: composeEnum(["left", "right", null!], ["左对齐", "右对齐", "继承"]),
      "x-decorator": "FormItem",
      "x-component": "Select",
      "x-component-props": {
        defaultValue: "right",
      },
    },
    wrapperAlign: {
      title: "组件对齐",
      type: "string",
      enum: composeEnum(["left", "right", null!], ["左对齐", "右对齐", "继承"]),
      "x-decorator": "FormItem",
      "x-component": "Select",
      "x-component-props": {
        defaultValue: "left",
      },
    },
    labelWrap: {
      title: "标签换行",
      type: "boolean",
      "x-decorator": "FormItem",
      "x-component": "Switch",
    },
    wrapperWrap: {
      title: "组件换行",
      type: "boolean",
      "x-decorator": "FormItem",
      "x-component": "Switch",
    },
    fullness: {
      title: "组件占满",
      type: "boolean",
      "x-decorator": "FormItem",
      "x-component": "Switch",
    },
    inset: {
      title: "内联布局",
      type: "boolean",
      "x-decorator": "FormItem",
      "x-component": "Switch",
    },
    bordered: {
      title: "是否有边框",
      type: "boolean",
      "x-decorator": "FormItem",
      "x-component": "Switch",
      "x-component-props": {
        defaultChecked: true,
      },
    },
  },
} satisfies ISchema;
