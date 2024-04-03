import type { ISchema } from "@formily/react";
import { composeEnum } from "../../utils/composeEnum";

const CommonDatePickerAPI = {
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
  disabledTime: {
    title: "不可选时间",
    "x-decorator": "FormItem",
    "x-component": "ValueInput",
    "x-component-props": {
      include: ["EXPRESSION"],
    },
    "x-decorator-props": {
      tooltip: "格式 (currentDate: moment) => boolean",
    },
  },
  disabledDate: {
    title: "不可选日期",
    "x-decorator": "FormItem",
    "x-component": "ValueInput",
    "x-component-props": {
      include: ["EXPRESSION"],
    },
    "x-decorator-props": {
      tooltip: "格式 (currentDate: moment) => boolean",
    },
  },
  inputReadOnly: {
    type: "boolean",
    title: "输入框只读",
    "x-decorator": "FormItem",
    "x-component": "Switch",
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

export const datePickerSchema: ISchema & { RangePicker?: ISchema } = {
  type: "object",
  properties: {
    picker: {
      type: "string",
      title: "选择器类型",
      enum: composeEnum(
        ["time", "date", "month", "year", "quarter", "decade"],
        ["时间", "日期", "月份", "年", "季度", "财年"]
      ),
      "x-decorator": "FormItem",
      "x-component": "Select",
      "x-component-props": {
        defaultValue: "date",
      },
    },
    ...(CommonDatePickerAPI as any),
    showNow: {
      type: "boolean",
      title: "显示此刻",
      "x-decorator": "FormItem",
      "x-component": "Switch",
    },
    showTime: {
      type: "boolean",
      title: "时间选择",
      "x-decorator": "FormItem",
      "x-component": "Switch",
    },
    showToday: {
      type: "boolean",
      title: "显示今天",
      "x-decorator": "FormItem",
      "x-component": "Switch",
    },
  },
};

export const dateRangePickerSchema = {
  type: "object",
  properties: {
    picker: {
      type: "string",
      title: "选择器类型",
      enum: composeEnum(
        ["time", "date", "month", "year", "decade"],
        ["时间", "日期", "月份", "年", "财年"]
      ),
      "x-decorator": "FormItem",
      "x-component": "Select",
      "x-component-props": {
        defaultValue: "date",
      },
    },
    ...(CommonDatePickerAPI as any),
    showTime: {
      type: "boolean",
      title: "时间选择",
      "x-decorator": "FormItem",
      "x-component": "Switch",
    },
  },
};
