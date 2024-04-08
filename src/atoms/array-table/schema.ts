import { ISchema } from '@formily/react'

export const ArrayTableSchema: ISchema & { Addition?: ISchema; Column?: ISchema } = {
  type: 'object',
  properties: {
    bordered: {
      type: 'boolean',
      title: "是否有边框",
      'x-decorator': 'FormItem',
      'x-component': 'Switch',
      'x-component-props': {
        defaultChecked: true,
      },
    },
    showHeader: {
      type: 'boolean',
      title: "显示头部",
      'x-decorator': 'FormItem',
      'x-component': 'Switch',
      'x-component-props': {
        defaultChecked: true,
      },
    },
    sticky: {
      type: 'boolean',
      title: '吸顶',
      'x-decorator': 'FormItem',
      'x-component': 'Switch',
    },
    size: {
      type: 'string',
      title: "尺寸",
      enum: [
        { label: "大", value: "large" },
        { label: "小", value: "small" },
        { label: "默认", value: "middle" },
        { label: "继承", value: "" },
      ],
      'x-decorator': 'FormItem',
      'x-component': 'Select',
      'x-component-props': {
        defaultValue: 'small',
      },
    },
    tableLayout: {
      type: 'string',
      title: "表格布局",
      enum: [
        { label: "自动", value: "auto" },
        { label: "固定", value: "fixed" },
      ],
      'x-decorator': 'FormItem',
      'x-component': 'Radio.Group',
      'x-component-props': {
        defaultValue: 'auto',
        optionType: 'button',
      },
    },
  },
}

const Column: ISchema = {
  type: 'object',
  properties: {
    title: {
      type: 'string',
      title: "表格列",
      'x-decorator': 'FormItem',
      'x-component': 'Input',
    },
    align: {
      type: 'string',
      title: '内容对齐',
      enum: [
        { label: "左", value: "left" },
        { label: "右", value: "right" },
        { label: "居中", value: "center" },
      ],
      'x-decorator': 'FormItem',
      'x-component': 'Radio.Group',
      'x-component-props': {
        defaultValue: 'left',
        optionType: 'button',
      },
    },
    colSpan: {
      type: 'number',
      title: "跨列",
      'x-decorator': 'FormItem',
      'x-component': 'NumberPicker',
    },
    width: {
      type: 'number',
      title: '宽度',
      'x-decorator': 'FormItem',
      'x-component': 'NumberPicker',
    },
    fixed: {
      type: 'string',
      title: "固定",
      enum: [
        { label: "左", value: "left" },
        { label: "右", value: "right" },
        { label: "五", value: false },
      ],
      'x-decorator': 'FormItem',
      'x-component': 'Radio.Group',
      'x-component-props': {
        optionType: 'button',
      },
    },
  },
}

const Addition: ISchema = {
  type: 'object',
  properties: {
    method: {
      type: 'string',
      title: '方法',
      enum: ['push', 'unshift'],
      'x-decorator': 'FormItem',
      'x-component': 'Radio.Group',
      'x-component-props': {
        defaultValue: 'push',
        optionType: 'button',
      },
    },
    defaultValue: {
      type: 'string',
      title: '默认值',
      'x-decorator': 'FormItem',
      'x-component': 'ValueInput',
    },
  },
}

ArrayTableSchema.Column = Column
ArrayTableSchema.Addition = Addition
