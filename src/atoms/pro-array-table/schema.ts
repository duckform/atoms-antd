import { ISchema } from "@formily/react";

export const ProArrayTableSchema: ISchema & {
  Addition?: ISchema;
  Column?: ISchema;
  Remove?: ISchema;
  ProAddition?: ISchema;
  DelegateAction?: ISchema;
} = {
  type: "object",
  properties: {
    bordered: {
      type: "boolean",
      title: "是否有边框",
      "x-decorator": "FormItem",
      "x-component": "Switch",
      "x-component-props": {
        defaultChecked: true,
      },
    },
    showHeader: {
      type: "boolean",
      title: "显示头部",
      "x-decorator": "FormItem",
      "x-component": "Switch",
      "x-component-props": {
        defaultChecked: true,
      },
    },
    enableSelection: {
      type: "boolean",
      title: "可选中",
      "x-decorator": "FormItem",
      "x-component": "Switch",
      "x-component-props": {
        defaultChecked: false,
      },
    },
    rowSelection: {
      type: "object",
      title: "选中类型",
      enum: ["单选", "多选"],
      "x-reactions": {
        dependencies: [".enableSelection"],
        fulfill: {
          state: {
            display: "{{$deps[0] ? 'visible': 'none' }}",
          },
        },
      },
      properties: {
        type: {
          enum: ["radio", "checkbox"],
          "x-decorator": "FormItem",
          "x-component": "Radio.Group",
          "x-component-props": {
            defaultValue: "",
            optionType: "button",
          },
        },
      },
    },
    sticky: {
      type: "boolean",
      title: "吸顶",
      "x-decorator": "FormItem",
      "x-component": "Switch",
    },
    size: {
      type: "string",
      title: "尺寸",
      enum: [
        { label: "大", value: "large" },
        { label: "小", value: "small" },
        { label: "默认", value: "middle" },
      ],
      "x-decorator": "FormItem",
      "x-component": "Select",
      "x-component-props": {
        defaultValue: "small",
      },
    },
    tableLayout: {
      type: "string",
      title: "表格布局",
      enum: [
        { label: "自动", value: "auto" },
        { label: "固定", value: "fixed" },
      ],
      "x-decorator": "FormItem",
      "x-component": "Radio.Group",
      "x-component-props": {
        defaultValue: "auto",
        optionType: "button",
      },
    },
  },
};

ProArrayTableSchema.DelegateAction = {
  type: "object",
  properties: {
    okText: {
      type: "string",
      title: "确定文案",
      "x-decorator": "FormItem",
      "x-component": "Input",
      default: "保存",
    },
    cancelText: {
      type: "string",
      title: "取消文案",
      "x-decorator": "FormItem",
      "x-component": "Input",
      default: "取消修改",
    },
  },
};

ProArrayTableSchema.Column = {
  type: "object",
  properties: {
    title: {
      type: "string",
      title: "标题",
      "x-decorator": "FormItem",
      "x-component": "Input",
    },
    align: {
      type: "string",
      title: "内容对齐",
      enum: [
        { label: "左", value: "left" },
        { label: "右", value: "right" },
        { label: "居中", value: "center" },
      ],
      "x-decorator": "FormItem",
      "x-component": "Radio.Group",
      "x-component-props": {
        defaultValue: "left",
        optionType: "button",
      },
    },
    colSpan: {
      type: "number",
      title: "跨列",
      "x-decorator": "FormItem",
      "x-component": "NumberPicker",
    },
    width: {
      type: "number",
      title: "宽度",
      "x-decorator": "FormItem",
      "x-component": "NumberPicker",
    },
    fixed: {
      type: "string",
      title: "固定",
      enum: [
        { label: "左", value: "left" },
        { label: "右", value: "right" },
        { label: "无", value: false },
      ],
      "x-decorator": "FormItem",
      "x-component": "Radio.Group",
      "x-component-props": {
        optionType: "button",
      },
    },
  },
};

ProArrayTableSchema.ProAddition = {
  type: "object",
  properties: {
    okText: {
      type: "string",
      title: "确定文案",
      "x-decorator": "FormItem",
      "x-component": "Input",
      default: "创建",
    },
    cancelText: {
      type: "string",
      title: "取消文案",
      "x-decorator": "FormItem",
      "x-component": "Input",
      default: "取消创建",
    },
  },
};

ProArrayTableSchema.Addition = {
  type: "object",
  properties: {
    method: {
      type: "string",
      title: "方法",
      enum: ["push", "unshift"],
      "x-decorator": "FormItem",
      "x-component": "Radio.Group",
      "x-component-props": {
        defaultValue: "push",
        optionType: "button",
      },
    },
    defaultValue: {
      type: "string",
      title: "默认值",
      "x-decorator": "FormItem",
      "x-component": "ValueInput",
    },
  },
};

ProArrayTableSchema.Remove = {
  type: "object",
  properties: {
    confirm: {
      type: "string",
      title: "删除确认",
      "x-decorator": "FormItem",
      "x-component": "Switch",
    },
  },
};
