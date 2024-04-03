import { ISchema } from "@formily/react";
import { composeEnum } from "../../utils/composeEnum";

export const uploadSchema: ISchema = {
  type: 'object',
  properties: {
    textContent: {
      type: 'string',
      title: "上传文案",
      'x-decorator': 'FormItem',
      'x-component': 'Input',
    },
    accept: {
      type: 'string',
      title: "可接受类型",
      'x-decorator': 'FormItem',
      'x-component': 'Input',
    },
    action: {
      title: "上传地址",
      'x-decorator': 'FormItem',
      'x-component': 'ValueInput',
      'x-component-props': {
        include: ['TEXT', 'EXPRESSION'],
      },
    },
    name: {
      type: 'string',
      title: "字段标识",
      'x-decorator': 'FormItem',
      'x-component': 'Input',
      'x-component-props': {
        defaultValue: 'file',
      },
    },
    maxCount: {
      type: 'number',
      title: "最大数量",
      'x-decorator': 'FormItem',
      'x-component': 'NumberPicker',
    },
    method: {
      title: "方法",
      enum: ['POST', 'PUT', 'GET'],
      'x-decorator': 'FormItem',
      'x-component': 'Radio.Group',
      'x-component-props': {
        defaultValue: 'POST',
        optionType: 'button',
      },
    },
    data: {
      title: "数据/参数",
      'x-decorator': 'FormItem',
      'x-component': 'ValueInput',
      'x-component-props': {
        include: ['EXPRESSION'],
      },
    },
    headers: {
      title: "请求头",
      'x-decorator': 'FormItem',
      'x-component': 'ValueInput',
      'x-component-props': {
        include: ['EXPRESSION'],
      },
    },

    listType: {
      title: "列表类型",
      enum: composeEnum(
        ['text', 'picture', 'picture-card'],
        ["文本", "图片", "卡片"],
      ),
      'x-decorator': 'FormItem',
      'x-component': 'Radio.Group',
      'x-component-props': {
        defaultValue: 'text',
        optionType: 'button',
      },
    },
    directory: {
      type: 'boolean',
      title: "支持上传目录",
      'x-decorator': 'FormItem',
      'x-component': 'Switch',
    },
    multiple: {
      type: 'boolean',
      title: "多选模式",
      'x-decorator': 'FormItem',
      'x-component': 'Switch',
    },
    openFileDialogOnClick: {
      type: 'boolean',
      title: "点击打开文件对话框",
      'x-decorator': 'FormItem',
      'x-component': 'Switch',
      'x-component-props': {
        defaultChecked: true,
      },
      'x-decorator-props': {
        tooltip: "点击打开文件对话框",
      },
    },
    showUploadList: {
      type: 'boolean',
      title: "是否展示文件列表",
      'x-decorator': 'FormItem',
      'x-component': 'Switch',
      'x-component-props': {
        defaultChecked: true,
      },
    },
    withCredentials: {
      type: 'boolean',
      title: '携带Cookie',
      'x-decorator': 'FormItem',
      'x-component': 'Switch',
    },
  },
}

export const uploadDraggerSchema = uploadSchema;
