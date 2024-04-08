import { IBehaviorCreator, IResourceCreator, TreeNode, createBehavior } from "@duckform/core";
import {
  DnFC,
  DroppableWidget,
  TreeNodeWidget,
  useNodeIdProps,
  useTreeNode,
} from "@duckform/react";
import { uid } from "@duckform/core/shared";
import { observer } from "@formily/react";
import { Steps } from "antd";
import { StepProps, StepsProps } from "antd/lib/steps";
import React, { Fragment, useState } from "react";
import { LoadTemplate } from "../../utils/LoadTemplate";
import { useDropTemplate } from "../../hooks";
import { matchComponent } from "../../utils/shared";
import { createVoidFieldSchema } from "../field/schema";
import { formStepSchema, formStepPaneSchema } from "./schema";

const parseSteps = (parent: TreeNode) => {
  const steps: TreeNode[] = [];
  parent.children.forEach((node) => {
    if (matchComponent(node, "FormStep.StepPane")) {
      steps.push(node);
    }
  });
  return steps;
};

// const parseAction = (parent: TreeNode) => {
//   const action: TreeNode[] = [];
//   parent.children.forEach((node) => {
//     if (matchComponent(node, "Space")) {
//       action.push(node);
//     }
//   });
//   return action[0];
// };

const PreviewFormStep: DnFC<StepsProps> & {
  StepPane?: React.FC<StepProps>;
} = observer((props) => {
  const [current, setCurrent] = useState<number>(0);
  const nodeId = useNodeIdProps();
  console.log(`🚀 ~ nodeId:`, nodeId);
  const node = useTreeNode();
  console.log(`🚀 ~ node:`, node);
  const designer = useDropTemplate("FormStep", (source) => {
    return [
      new TreeNode({
        componentName: "Field",
        props: {
          type: "object",
          "x-component": "FormStep.StepPane",
          "x-component-props": {
            title: `第${source.length}步`,
          },
        },
        children: source,
      }),
    ];
  });

  const steps = parseSteps(node);

  const renderSteps = () => {
    if (steps.length < 1) return <DroppableWidget />;
    return (
      <Steps
        {...props}
        style={{ padding: 20, ...props.style }}
        current={current}
        onChange={(n) => setCurrent(n)}
      >
        {steps.map((step) => {
          const props = step.props?.["x-component-props"] || {};
          return (
            <Steps.Step
              {...props}
              style={{ ...props.style }}
              title={
                <span
                  data-content-editable="x-component-props.title"
                  data-content-editable-node-id={step.id}
                >
                  {props.title}
                </span>
              }
              key={step.id}
            ></Steps.Step>
          );
        })}
      </Steps>
    );
  };

  const renderStepPanel = () => {
    if (steps.length < 1) return null;
    const step = steps[current];
    const stepProps = {
      [designer.props.nodeIdAttrName!]: step.id,
      style: {
        padding: "16px 0",
      },
    };
    return (
      <div {...stepProps}>
        {step.children.length ? (
          <TreeNodeWidget node={step} />
        ) : (
          <DroppableWidget node={step} />
        )}
      </div>
    );
  };

  return (
    <div {...nodeId}>
      {renderSteps()}
      {renderStepPanel()}
      <LoadTemplate
        actions={[
          {
            title: "添加步骤",
            icon: "AddPanel",
            onClick: () => {
              const stepPane = new TreeNode({
                componentName: "Field",
                props: {
                  type: "void",
                  "x-component": "FormStep.StepPane",
                  "x-component-props": {
                    title: `第${steps.length + 1}步`,
                  },
                },
                children: [
                  {
                    id: uid(),
                    componentName: "Field",
                    resourceName: '分步面板',
                    props: {
                      type: "object",
                    },
                  },
                ],
              });
              node.append(stepPane);
              setCurrent(steps.length);
            },
          },
          {
            title: "删除步骤",
            icon: "RemovePanel",
            onClick: () => {
              setCurrent((current) =>
                current === steps.length - 1 ? current - 1 : current,
              );
              console.log(`🚀 ~ node.children.reduce ~ node:`, node);
              node.children.reduce((done, n, idx) => {
                if (done) return;
                if (idx === current) {
                  node.children.splice(idx, 1);
                  return true;
                }
              }, false);
            },
          },
        ]}
      />
    </div>
  );
});

PreviewFormStep.StepPane = (props: React.PropsWithChildren<StepProps>) => {
  return <Fragment>{props.children}</Fragment>;
};

const takeSteps = `
var parent = $self.parent;
var wrapper = $self.parent.parent;
log(1, { parent, wrapper});
if (!parent || !wrapper) return;
var parentAddress = parent.address.toString();
var wildcard = wrapper.address.toString();
var children = wrapper.query(wildcard + ".*").addresses;
log(2, { wildcard, children});
if (!wildcard || !children) return;
var slibing = children.find(pathstr => {
  var segs = pathstr.split(".");
  var wrapper = segs[0];
  var slibings = segs[1];
  var others = segs[3];
  if (!others && !parentAddress.includes(slibings)) {
    return true;
  }
})
log(3, { slibing });
if (!slibing) return;
var steps = wrapper.query(slibing).take(); 
log(4, { steps });
if (!steps) return;
`;

const Behavior: IBehaviorCreator[] = [{
  name: "FormStep",
  extends: ["Field"],
  selector: (node) => node.props?.["x-component"] === "FormStep",
  designerProps: {
    droppable: true,
    allowAppend: (target, source) =>
      target.children.length === 0 ||
      source!.every(
        (node) => node.props?.["x-component"] === "FormStep.StepPane",
      ),
    propsSchema: createVoidFieldSchema(formStepSchema),
  },
},
{
  name: "FormStep.StepPane",
  extends: ["Field"],
  selector: (node) => node.props?.["x-component"] === "FormStep.StepPane",
  designerProps: {
    droppable: true,
    allowDrop: (node) => node.props?.["x-component"] === "FormStep.StepPane",
    propsSchema: createVoidFieldSchema(formStepPaneSchema),
  },
}];

const Resource: IResourceCreator[] = [{
  title: "分步表单",
  elements: [
    {
      componentName: "Field",
      props: {
        type: "void",
      },
      children: [
        {
          id: uid(),
          componentName: "Field",
          resourceName: '分步面板',
          props: {
            type: "void",
            "x-component": "FormStep",
            "x-component-props": {
              formStep: "{{FormStep.createFormStep()}}",
            },
          },
        },
        {
          id: uid(),
          componentName: "Field",
          resourceName: '弹性间距',
          props: {
            type: "void",
            "x-component": "Space",
          },
          children: [
            {
              id: uid(),
              componentName: "Field",
              props: {
                type: "void",
                "x-component": "Button",
                "x-component-props": {
                  type: "primary",
                  disabled: `{{
                    (function canPrev() {
                      ${takeSteps}
                      return !steps.componentProps.formStep.allowBack;
                    })()
                  }}`,
                  onClick: `{{
                    function onClickPrev() {
                      ${takeSteps}
                      steps.componentProps.formStep.back();
                    }
                  }}`,
                  children: "上一步",
                },
              },
            },
            {
              id: uid(),
              componentName: "Field",
              props: {
                type: "void",
                "x-component": "Button",
                "x-component-props": {
                  type: "primary",
                  disabled: `{{
                    (function canNext() {
                      ${takeSteps}
                      return !steps.componentProps.formStep.allowNext;
                    })()
                  }}`,
                  onClick: `{{
                    function onClickNext() {
                      ${takeSteps}
                      return steps.componentProps.formStep.next();
                    }
                  }}`,
                  children: "下一步",
                },
              },
            },
            {
              id: uid(),
              componentName: "Field",
              props: {
                type: "void",
                "x-component": "Button",
                "x-component-props": {
                  type: "primary",
                  disabled: `{{
                    (function canNext() {
                      ${takeSteps}
                      return steps.componentProps.formStep.allowNext;
                    })()
                  }}`,
                  children: "完成",
                },
              },
            },
          ],
        },
      ],
    },
  ],
}];

export const FormStepWrapper = React.Fragment;

export const FormStep = Object.assign(PreviewFormStep, {
  Behavior,
  Resource,
  accepts: ["void"],
  transform: () => { }
});
