import { ISchema } from '@formily/react'

export const RateSchema: ISchema = {
  type: 'object',
  properties: {
    allowClear: {
      type: 'boolean',
      title: "允许清除内容",
      'x-decorator': 'FormItem',
      'x-component': 'Switch',
      'x-component-props': {
        defaultChecked: true,
      },
    },
    count: {
      type: 'number',
      title: "总数",
      'x-decorator': 'FormItem',
      'x-component': 'NumberPicker',
      'x-component-props': {
        defaultValue: 5,
      },
    },
    allowHalf: {
      type: 'boolean',
      title: "允许半选",
      'x-decorator': 'FormItem',
      'x-component': 'Switch',
    },
    tooltips: {
      title: "提示信息",
      'x-decorator': 'FormItem',
      'x-component': 'ValueInput',
      'x-component-props': {
        include: ['EXPRESSION'],
      },
      "x-decorator-props": {
        tooltip: "格式：string[]"
      }
    },
    autoFocus: {
      type: 'boolean',
      title: "自动获取焦点",
      'x-decorator': 'FormItem',
      'x-component': 'Switch',
    },
  },
}
