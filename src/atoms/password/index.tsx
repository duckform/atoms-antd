import { IBehaviorCreator, IResourceCreator } from "@duckform/core";
import { Password as FormilyPassword } from "@formily/antd";
import { createFieldSchema } from "@basic/field/schema";
import { PasswordSchema } from "./schema";

const PreviewPassword = FormilyPassword;

const Behavior: IBehaviorCreator[] = [
  {
    name: "Password",
    extends: ["Field"],
    selector: (node) => node.props?.["x-component"] === "Password",
    designerProps: {
      propsSchema: createFieldSchema(PasswordSchema),
    },
  },
];

const Resource: IResourceCreator[] = [
  {
    title: "密码输入",
    elements: [
      {
        componentName: "Field",
        props: {
          type: "string",
          title: "Password",
          "x-decorator": "FormItem",
          "x-component": "Password",
        },
      },
    ],
  },
];

export const Password = Object.assign(PreviewPassword, {
  Behavior,
  Resource,
  accepts: ["string", "number"],
  transform: () => { }
});
