import { createBehavior, createResource } from "@duckform/core";
import { Field, Form, FormLayout, ObjectContainer, FormGrid, FormTab, FormCollapse, FormStep, ArrayTable, ArrayCards } from "./basic";
import { Input } from "./atoms/input";
import { Password } from './atoms/password';
import { NumberPicker } from './atoms/numberPicker';
import { Radio } from "./atoms/radio";
import { Checkbox } from "./atoms/checkbox";
import { Select } from "./atoms/select";
import { Rate } from "./atoms/rate";
import { Slider } from "./atoms/slider";
import { TreeSelect } from "./atoms/treeSelect";
import { Transfer } from "./atoms/transfer";
import { DatePicker } from "./atoms/datePicker";
import { TimePicker } from "./atoms/timePicker";
import { Upload } from "./atoms/upload";
import { Cascader } from "./atoms/cascader";
import { Switch } from "./atoms/switch";
import { Card } from "./atoms/card";
import { Space } from "./atoms/space";

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
  FormStep: genComp(FormStep),
};
