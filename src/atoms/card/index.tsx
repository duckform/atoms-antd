import { IBehaviorCreator, IResourceCreator } from "@duckform/core";
import { Card as AntdCard } from "antd";
import { createVoidFieldSchema } from "@basic/field/schema";
import { DnFC } from "@duckform/react";
import { CardSchema } from "./schema";

const PreviewCard: DnFC<React.ComponentProps<typeof AntdCard>> = (props) => {
  return (
    <AntdCard
      {...props}
      title={
        <span data-content-editable="x-component-props.title">
          {props.title}
        </span>
      }
    >
      {props.children}
    </AntdCard>
  );
};;

const Behavior: IBehaviorCreator[] = [
  {
    name: "Card",
    extends: ["Field"],
    selector: (node) => node.props?.["x-component"] === "Card",
    designerProps: {
      droppable: true,
      propsSchema: createVoidFieldSchema(CardSchema),
    },
  },
];

const Resource: IResourceCreator[] = [
  {
    title: "卡片",
    elements: [
      {
        componentName: "Field",
        props: {
          type: "void",
          "x-component": "Card",
          "x-component-props": {
            title: "Title",
          },
        },
      },
    ],
  },
];

export const Card = Object.assign(PreviewCard, {
  Behavior,
  Resource,
  accepts: [],
  transform: () => { }
});
