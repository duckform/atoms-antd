import { ISchema } from '@formily/react'
import { composeEnum } from '../../utils/composeEnum';

export const spaceSchema: ISchema = {
  type: 'object',
  properties: {
    align: {
      type: 'string',
      title: "对齐",
      enum: composeEnum(
        ['start', 'end', 'center', 'baseline'],
        ["头部", "尾部", "居中", "基准线"]
      ),
      'x-decorator': 'FormItem',
      'x-component': 'Select',
    },
    direction: {
      type: 'string',
      title: "方向",
      enum: composeEnum(
        ['vertical', 'horizontal'],
        ["垂直", "水平"]
      ),
      'x-decorator': 'FormItem',
      'x-component': 'Radio.Group',
      'x-component-props': {
        defaultValue: 'horizontal',
        optionType: 'button',
      },
    },
    size: {
      type: 'number',
      title: '尺寸',
      'x-decorator': 'FormItem',
      'x-component': 'NumberPicker',
      'x-component-props': {
        defaultValue: 8,
      },
    },
    split: {
      type: 'string',
      title: "分割内容",
      'x-decorator': 'FormItem',
      'x-component': 'Input',
    },
    wrap: {
      type: 'boolean',
      title: "自动换行",
      'x-decorator': 'FormItem',
      'x-component': 'Switch',
    },
  },
}
