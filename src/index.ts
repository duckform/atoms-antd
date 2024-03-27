import { Field, Form, FormLayout, ObjectContainer } from "./basic";
import { Input } from "./atoms/input";
import { createBehavior, createResource } from "@duckform/core";

const genComp = (Comp: any): any => {
  if (Comp.Resource) {
    Comp.Resource = Array.isArray(Comp.Resource)
      ? createResource(...Comp.Resource)
      : createResource(Comp.Resource);
  }
  if (Comp.Behavior) {
    Comp.Behavior = Array.isArray(Comp.Behavior)
      ? createBehavior(...Comp.Behavior)
      : createBehavior(Comp.Behavior);
  }
  return Comp;
};

export const Preset = {
  Field: genComp(Field),
  Form: genComp(Form),
  FormLayout: genComp(FormLayout),
  ObjectContainer: genComp(ObjectContainer),
  Input: genComp(Input),
};
