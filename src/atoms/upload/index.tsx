import { IBehaviorCreator, IResourceCreator } from "@duckform/core";
import { Upload as FormilyUpload } from "@formily/antd";
import { createFieldSchema } from "@basic/field/schema";
import { UploadSchema } from "./schema";

const PreviewUpload = FormilyUpload;

const Behavior: IBehaviorCreator[] = [
  {
    name: "Upload",
    extends: ["Field"],
    selector: (node) => node.props?.["x-component"] === "Upload",
    designerProps: {
      propsSchema: createFieldSchema(UploadSchema),
    },
  },
  {
    name: "Upload.Dragger",
    extends: ["Field"],
    selector: (node) => node.props?.["x-component"] === "Upload.Dragger",
    designerProps: {
      propsSchema: createFieldSchema(UploadSchema.Dragger),
    },
  },
];

const Resource: IResourceCreator[] = [
  {
    title: "上传",
    elements: [
      {
        componentName: "Field",
        props: {
          type: "Array<object>",
          title: "Upload",
          "x-decorator": "FormItem",
          "x-component": "Upload",
          "x-component-props": {
            textContent: "Upload",
          },
        },
      },
    ],
  },
  {
    title: "拖拽上传",
    elements: [
      {
        componentName: "Field",
        props: {
          type: "Array<object>",
          title: "Drag Upload",
          "x-decorator": "FormItem",
          "x-component": "Upload.Dragger",
          "x-component-props": {
            textContent: "Click or drag file to this area to upload",
          },
        },
      },
    ],
  },
];

export const Upload = Object.assign(PreviewUpload, {
  Behavior,
  Resource,
  accepts: ["object"],
  transform: () => { }
});
