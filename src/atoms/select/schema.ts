import { ISchema } from "@formily/react";
import { composeEnum } from '../../utils';

export const selectSchema: ISchema = {
  type: 'object',
  properties: {
    enum: {
      type: "string",
      title: "可选项",
      "x-decorator": "FormItem",
      "x-component": "ValueInput",
    },
    mode: {
      type: "string",
      title: "模式",
      enum: composeEnum(
        ["multiple", "tags", null!],
        ["多选", "标签", "单选"]
      ),
      "x-decorator": "FormItem",
      "x-component": "Radio.Group",
      "x-component-props": {
        defaultValue: null,
        optionType: "button",
      },
    },
    allowClear: {
      type: "boolean",
      title: "允许清除内容",
      "x-decorator": "FormItem",
      "x-component": "Switch",
    },
    autoClearSearchValue: {
      type: "boolean",
      title: "选中自动清除",
      "x-decorator": "FormItem",
      "x-component": "Switch",
      "x-component-props": {
        defaultChecked: true,
      },
      "x-decorator-props": {
        tooltip: "仅在多选或者标签模式下支持",
      }
    },
    dropdownMatchSelectWidth: {
      type: "boolean",
      title: "下拉菜单和选择器同宽",
      "x-decorator": "FormItem",
      "x-component": "Switch",
      "x-component-props": {
        defaultChecked: true,
      },
      "x-decorator-props": {
        tooltip: "默认将设置 min-width，当值小于选择框宽度时会被忽略。false 时会关闭虚拟滚动",
      }
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
    defaultActiveFirstOption: {
      type: "boolean",
      title: "默认高亮第一个选项",
      "x-decorator": "FormItem",
      "x-component": "Switch",
      "x-component-props": {
        defaultChecked: true,
      },
    },
    defaultOpen: {
      type: "boolean",
      title: "默认展开",
      "x-decorator": "FormItem",
      "x-component": "Switch",
    },
    labelInValue: {
      type: "boolean",
      title: "标签值",
      "x-decorator": "FormItem",
      "x-component": "Switch",
      "x-decorator-props": {
        tooltip: "是否把每个选项的 label 包装到 value 中，会把 Select 的 value 类型从 string 变为 { value: string, label: ReactNode } 的格式",
      }
    },
    showArrow: {
      type: "boolean",
      title: "显示箭头",
      "x-decorator": "FormItem",
      "x-component": "Switch",
    },
    showSearch: {
      type: "boolean",
      title: "支持搜索",
      "x-decorator": "FormItem",
      "x-component": "Switch",
    },
    virtual: {
      type: "boolean",
      title: "开启虚拟滚动",
      "x-decorator": "FormItem",
      "x-component": "Switch",
      "x-component-props": {
        defaultValue: true,
      },
    },
    filterOption: {
      type: "boolean",
      title: "选项筛选器",
      "x-decorator": "FormItem",
      "x-component": "ValueInput",
      "x-component-props": {
        include: ["BOOLEAN", "EXPRESSION"],
      },
    },
    filterSort: {
      type: "boolean",
      title: "选项排序器",
      "x-decorator": "FormItem",
      "x-component": "ValueInput",
      "x-component-props": {
        include: ["EXPRESSION"],
      },
    },
    listHeight: {
      type: "number",
      title: "弹窗滚动高度",
      "x-decorator": "FormItem",
      "x-component": "NumberPicker",
      "x-component-props": {
        defaultValue: 256,
      },
    },
    maxTagCount: {
      type: "number",
      title: "最多标签数量",
      "x-decorator": "FormItem",
      "x-component": "NumberPicker",
      "x-decorator-props": {
        tooltip: "最多显示多少个 tag，响应式模式会对性能产生损耗",
      }
    },
    maxTagPlaceholder: {
      type: "string",
      title: "最多标签占位",
      "x-decorator": "FormItem",
      "x-component": "Input",
      "x-decorator-props": {
        tooltip: "隐藏 tag 时显示的内容",
      }
    },
    maxTagTextLength: {
      type: "number",
      title: "最多标签文本长度",
      "x-decorator": "FormItem",
      "x-component": "NumberPicker",
    },
    notFoundContent: {
      type: "string",
      title: "空状态内容",
      "x-decorator": "FormItem",
      "x-component": "Input",
      "x-component-props": {
        defaultValue: "Not Found",
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
      "x-component-props": {
        defaultValue: "middle",
      },
    },
  },
}