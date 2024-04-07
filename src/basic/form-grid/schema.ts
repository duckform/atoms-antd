import { ISchema } from '@formily/react'

export const FormGridSchema: ISchema & { GridColumn?: ISchema } = {
  type: 'object',
  properties: {
    minWidth: {
      type: 'number',
      title: "最小宽度",
      'x-decorator': 'FormItem',
      'x-component': 'NumberPicker',
      'x-component-props': {
        defaultValue: 100,
      },
    },
    maxWidth: {
      type: 'number',
      title: "最大宽度",
      'x-decorator': 'FormItem',
      'x-component': 'NumberPicker',
    },
    minColumns: {
      type: 'number',
      title: "最小列数",
      'x-decorator': 'FormItem',
      'x-component': 'NumberPicker',
      'x-component-props': {
        defaultValue: 0,
      },
    },
    maxColumns: {
      type: 'number',
      title: "最大列数",
      'x-decorator': 'FormItem',
      'x-component': 'NumberPicker',
    },
    breakpoints: {
      type: 'number',
      title: "响应式断点",
      'x-decorator': 'FormItem',
      'x-component': 'ValueInput',
      'x-component-props': {
        include: ['EXPRESSION'],
      },
    },
    columnGap: {
      type: 'number',
      title: "列间距",
      'x-decorator': 'FormItem',
      'x-component': 'NumberPicker',
      'x-component-props': {
        defaultValue: 10,
      },
    },
    rowGap: {
      type: 'number',
      title: "行间距",
      'x-decorator': 'FormItem',
      'x-component': 'NumberPicker',
      'x-component-props': {
        defaultValue: 5,
      },
    },
    colWrap: {
      type: 'boolean',
      title: "自动换行",
      'x-decorator': 'FormItem',
      'x-component': 'Switch',
      'x-component-props': {
        defaultChecked: true,
      },
    },
  },
}

FormGridSchema.GridColumn = {
  type: 'object',
  properties: {
    gridSpan: {
      type: 'number',
      title: "跨列栏数",
      'x-decorator': 'FormItem',
      'x-component': 'NumberPicker',
      'x-component-props': {
        defaultValue: 1,
      },
    },
  },
}
