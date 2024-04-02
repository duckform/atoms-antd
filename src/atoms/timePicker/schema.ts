import { ISchema } from "@formily/react";
import { composeEnum } from "src/utils";

export const CommonTimePickerAPI = {
  allowClear: {
    type: "boolean",
    title: "允许清除内容",
    "x-decorator": "FormItem",
    "x-component": "Switch",
    "x-component-props": {
      defaultChecked: true,
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
  clearText: {
    type: "string",
    title: "清除提示",
    "x-decorator": "FormItem",
    "x-component": "Input",
  },
  disabledHours: {
    title: "禁止小时",
    "x-decorator": "FormItem",
    "x-component": "ValueInput",
    "x-component-props": {
      include: ["EXPRESSION"],
    },
  },
  disabledMinutes: {
    title: "禁止分钟",
    "x-decorator": "FormItem",
    "x-component": "ValueInput",
    "x-component-props": {
      include: ["EXPRESSION"],
    },
  },
  disabledSeconds: {
    title: "禁止秒",
    "x-decorator": "FormItem",
    "x-component": "ValueInput",
    "x-component-props": {
      include: ["EXPRESSION"],
    },
  },
  hideDisabledOptions: {
    type: "boolean",
    title: "隐藏禁止选项",
    "x-decorator": "FormItem",
    "x-component": "Switch",
  },
  inputReadOnly: {
    type: "boolean",
    title: "输入框只读",
    "x-decorator": "FormItem",
    "x-component": "Switch",
  },
  showNow: {
    type: "boolean",
    title: "显示此刻",
    "x-decorator": "FormItem",
    "x-component": "Switch",
  },
  use12Hours: {
    type: "boolean",
    title: "12小时制",
    "x-decorator": "FormItem",
    "x-component": "Switch",
  },
  hourStep: {
    type: "number",
    title: "小时间隔",
    "x-decorator": "FormItem",
    "x-component": "NumberPicker",
    "x-component-props": {
      defaultValue: 1,
    },
  },
  minuteStep: {
    type: "number",
    title: "分钟间隔",
    "x-decorator": "FormItem",
    "x-component": "NumberPicker",
    "x-component-props": {
      defaultValue: 1,
    },
  },
  secondStep: {
    type: "number",
    title: "秒间隔",
    "x-decorator": "FormItem",
    "x-component": "NumberPicker",
    "x-component-props": {
      defaultValue: 1,
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
  },
  format: {
    type: "string",
    title: "格式",
    "x-decorator": "FormItem",
    "x-component": "Input",
    "x-component-props": {
      placeholder: "YYYY-MM-DD",
    },
  },
};

export const timePickerSchema: ISchema & { RangePicker?: ISchema } = {
  type: "object",
  properties: CommonTimePickerAPI as any,
};

export const timeRangePickerSchema = {
  type: "object",
  properties: CommonTimePickerAPI as any,
};
