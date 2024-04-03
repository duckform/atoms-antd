import { ISchema } from '@formily/react'
import { composeEnum } from '../../utils/composeEnum';

export const formCollapseSchema: ISchema = {
  type: 'object',
  properties: {
    accordion: {
      type: 'boolean',
      title: "手风琴模式",
      'x-decorator': 'FormItem',
      'x-component': 'Switch',
    },
    collapsible: {
      type: 'string',
      title: "可折叠区域",
      enum: composeEnum(
        ['header', 'disabled'],
        ["头部", "禁用"]
      ),
      'x-decorator': 'FormItem',
      'x-component': 'Radio.Group',
      'x-component-props': {
        defaultValue: 'header',
        optionType: 'button',
      },
    },
    ghost: {
      type: 'boolean',
      title: "幽灵模式",
      'x-decorator': 'FormItem',
      'x-component': 'Switch',
    },
    bordered: {
      type: 'boolean',
      title: "是否有边框",
      'x-decorator': 'FormItem',
      'x-component': 'Switch',
      'x-component-props': {
        defaultChecked: true,
      },
    },
  },
}

export const formCollapsePaneSchema: ISchema = {
  type: 'object',
  properties: {
    collapsible: {
      type: 'string',
      title: "是否可折叠",
      enum: composeEnum(
        ['header', 'disabled'],
        ["头部", "禁用"]
      ),
      'x-decorator': 'FormItem',
      'x-component': 'Radio.Group',
      'x-component-props': {
        defaultValue: 'header',
        optionType: 'button',
      },
    },
    header: {
      type: 'boolean',
      title: "标题",
      'x-decorator': 'FormItem',
      'x-component': 'Input',
    },
    extra: {
      type: 'boolean',
      title: "扩展内容",
      'x-decorator': 'FormItem',
      'x-component': 'Input',
    },
  },
}
