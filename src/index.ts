import { createBehavior, createResource } from "@duckform/core";
import { Field, Form, ObjectContainer, FormGrid, FormLayout } from "./basic";
import { Input } from "./atoms/input";
import { Password } from "./atoms/password";
import { NumberPicker } from "./atoms/number-picker";
import { Radio } from "./atoms/radio";
import { Checkbox } from "./atoms/checkbox";
import { Select } from "./atoms/select";
import { Rate } from "./atoms/rate";
import { Slider } from "./atoms/slider";
import { TreeSelect } from "./atoms/tree-select";
import { Transfer } from "./atoms/transfer";
import { DatePicker } from "./atoms/date-picker";
import { TimePicker } from "./atoms/time-picker";
import { Upload } from "./atoms/upload";
import { Cascader } from "./atoms/cascader";
import { Switch } from "./atoms/switch";
import { Card } from "./atoms/card";
import { Space } from "./atoms/space";
import { FormTab } from "./atoms/form-tab";
import { FormCollapse } from "./atoms/form-collapse";
// import { FormStep } from './atoms/form-step';
import { ArrayTable } from "./atoms/array-table";
import { ArrayCards } from "./atoms/array-cards";
import { ProArrayTable } from "./atoms/pro-array-table";
import { ShadowModal } from "./atoms/shadow-modal";

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
  FormGrid: genComp(FormGrid),
  FormTab: genComp(FormTab),
  ObjectContainer: genComp(ObjectContainer),
  Input: genComp(Input),
  Password: genComp(Password),
  NumberPicker: genComp(NumberPicker),
  Radio: genComp(Radio),
  Checkbox: genComp(Checkbox),
  Select: genComp(Select),
  Rate: genComp(Rate),
  Slider: genComp(Slider),
  TreeSelect: genComp(TreeSelect),
  Transfer: genComp(Transfer),
  DatePicker: genComp(DatePicker),
  TimePicker: genComp(TimePicker),
  Upload: genComp(Upload),
  Cascader: genComp(Cascader),
  Switch: genComp(Switch),
  FormCollapse: genComp(FormCollapse),
  Card: genComp(Card),
  Space: genComp(Space),
  ArrayTable: genComp(ArrayTable),
  ArrayCards: genComp(ArrayCards),
  // FormStep: genComp(FormStep),
  ProArrayTable: genComp(ProArrayTable),
  ShadowModal: genComp(ShadowModal),
};
