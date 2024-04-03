import { ISchema } from "@formily/react";
import { composeEnum } from "../../utils/composeEnum";
import { formLayoutSchema } from "../form-layout/schema";
import { styleSchema } from "../style/schema";

export const dataFieldSchema = {
  name: {
    title: "字段标识",
    type: "string",
    "x-decorator": "FormItem",
    "x-component": "Input",
  },
  title: {
    title: "标题",
    type: "string",
    "x-decorator": "FormItem",
    "x-component": "Input",
  },
  description: {
    title: "描述",
    type: "string",
    "x-decorator": "FormItem",
    "x-component": "Input.TextArea",
  },
  "x-display": {
    title: "展示状态",
    type: "string",
    "x-decorator-props": {
      tooltip: "半隐藏只会隐藏UI，全隐藏会删除数据",
    },
    enum: composeEnum(
      ["visible", "hidden", "none", ""],
      ["显示", "半隐藏", "全隐藏", "继承"],
    ),
    "x-decorator": "FormItem",
    "x-component": "Select",
    "x-component-props": {
      defaultValue: "visible",
    },
  },
  "x-pattern": {
    title: "UI形态",
    type: "string",
    enum: composeEnum(
      ["editable", "disabled", "readOnly", "readPretty", ""],
      ["可编辑", "禁用", "只读", "阅读", "继承"],
    ),
    "x-decorator": "FormItem",
    "x-component": "Select",
    "x-component-props": {
      defaultValue: "editable",
    },
  },
  default: {
    title: "默认值",
    "x-decorator": "FormItem",
    "x-component": "ValueInput",
  },
  enum: {
    title: "可选项",
    "x-decorator": "FormItem",
    "x-component": "DataSourceSetter",
  },
  "x-reactions": {
    title: "响应器规则",
    "x-decorator": "FormItem",
    "x-component": "ReactionsSetter",
  },
  "x-validator": {
    title: "校验规则",
    type: "array",
    "x-component": "ValidatorSetter",
  },
  required: {
    title: "必填",
    type: "boolean",
    "x-decorator": "FormItem",
    "x-component": "Switch",
  },
} satisfies ISchema["properties"];

export const voidFieldSchema = {
  name: {
    title: "字段标识",
    type: "string",
    "x-decorator": "FormItem",
    "x-component": "Input",
  },
  title: {
    title: "标题",
    type: "string",
    "x-decorator": "FormItem",
    "x-component": "Input",
    "x-reactions": {
      fulfill: {
        state: {
          hidden: '{{$form.values["x-decorator"] !== "FormItem"}}',
        },
      },
    },
  },
  description: {
    title: "描述",
    type: "string",
    "x-decorator": "FormItem",
    "x-component": "Input.TextArea",
    "x-reactions": {
      fulfill: {
        state: {
          hidden: '{{$form.values["x-decorator"] !== "FormItem"}}',
        },
      },
    },
  },
  "x-display": {
    title: "展示状态",
    type: "string",
    "x-decorator-props": {
      tooltip: "半隐藏只会隐藏UI，全隐藏会删除数据",
    },
    enum: composeEnum(
      ["visible", "hidden", "none", ""],
      ["显示", "半隐藏", "全隐藏", "继承"],
    ),
    "x-decorator": "FormItem",
    "x-component": "Select",
    "x-component-props": {
      defaultValue: "visible",
    },
  },
  "x-pattern": {
    title: "UI形态",
    type: "string",
    enum: composeEnum(
      ["editable", "disabled", "readOnly", "readPretty", ""],
      ["可编辑", "禁用", "只读", "阅读", "继承"],
    ),
    "x-decorator": "FormItem",
    "x-component": "Select",
    "x-component-props": {
      defaultValue: "editable",
    },
  },
  "x-reactions": {
    title: "响应器规则",
    "x-decorator": "FormItem",
    "x-component": "ReactionsSetter",
  },
  "x-decorator": {
    title: "是否使用容器组件",
    type: "string",
    "x-decorator": "FormItem",
    "x-component": "FormItemSwitcher",
  },
} satisfies ISchema["properties"];

export const withComponentSchema = (
  component?: ISchema,
  decorator?: ISchema,
) => {
  const schema: ISchema["properties"] = {};
  if (component) {
    schema["component-group"] = {
      title: "组件属性",
      type: "void",
      "x-component": "CollapseItem",
      "x-reactions": {
        fulfill: {
          state: {
            visible: '{{!!$form.values["x-component"]}}',
          },
        },
      },
      properties: {
        "x-component-props": component,
      },
    };
  }
  if (decorator) {
    schema["decorator-group"] = {
      title: "容器属性",
      type: "void",
      "x-component": "CollapseItem",
      "x-component-props": { defaultExpand: false },
      "x-reactions": {
        fulfill: {
          state: {
            visible: '{{!!$form.values["x-decorator"]}}',
          },
        },
      },
      properties: {
        "x-decorator-props": decorator,
      },
    };
  }
  schema["component-style-group"] = {
    title: "组件样式",
    type: "void",
    "x-component": "CollapseItem",
    "x-component-props": { defaultExpand: false },
    "x-reactions": {
      fulfill: {
        state: {
          visible: '{{!!$form.values["x-component"]}}',
        },
      },
    },
    properties: {
      "x-component-props.style": styleSchema,
    },
  };
  schema["decorator-style-group"] = {
    title: "容器样式",
    type: "void",
    "x-component": "CollapseItem",
    "x-component-props": { defaultExpand: false },
    "x-reactions": {
      fulfill: {
        state: {
          visible: '{{!!$form.values["x-decorator"]}}',
        },
      },
    },
    properties: {
      "x-decorator-props.style": styleSchema,
    },
  };
  return schema;
};

export const createFieldSchema = (
  component?: ISchema,
  decorator: ISchema = formItemSchema,
) => {
  const schema = {
    type: "object",
    properties: {
      "field-group": {
        title: "字段属性",
        type: "void",
        "x-component": "CollapseItem",
        properties: dataFieldSchema,
      },
      ...withComponentSchema(component, decorator),
    },
  } satisfies ISchema;
  return schema;
};

export const createVoidFieldSchema = (
  component: ISchema,
  decorator: ISchema = formItemSchema,
) => {
  const schema = {
    type: "object",
    properties: {
      "field-group": {
        type: "void",
        title: "字段属性",
        "x-component": "CollapseItem",
        properties: voidFieldSchema,
      },
      ...withComponentSchema(component, decorator),
    },
  } satisfies ISchema;
  return schema;
};

export const formItemSchema = {
  type: "object",
  properties: {
    tooltip: {
      title: "提示",
      type: "string",
      "x-decorator": "FormItem",
      "x-component": "Input",
    },
    addonBefore: {
      title: "前缀标签",
      type: "string",
      "x-decorator": "FormItem",
      "x-component": "Input",
    },
    addonAfter: {
      title: "后缀标签",
      type: "string",
      "x-decorator": "FormItem",
      "x-component": "Input",
    },
    ...formLayoutSchema.properties,
  },
} satisfies ISchema;
