import {
  // GlobalRegistry,
  KeyCode,
  Shortcut,
  createDesigner,
} from "@duckform/core";
import {
  ComponentTreeWidget,
  CompositePanel,
  Designer,
  DesignerToolsWidget,
  HistoryWidget,
  OutlineTreeWidget,
  ResourceWidget,
  SettingsPanel,
  StudioPanel,
  ToolbarPanel,
  ViewPanel,
  ViewToolsWidget,
  ViewportPanel,
  Workspace,
  WorkspacePanel,
} from "@duckform/react";
import { SettingsForm, setNpmCDNRegistry } from "@duckform/react/settings-form";
import "antd/dist/antd.less";
import React, { useMemo } from "react";
import { Button } from "antd";
import { Preset } from "@atoms";
import { saveSchema } from "./utils";
import {
  ActionsWidget,
  LogoWidget,
  MarkupSchemaWidget,
  PreviewWidget,
  SchemaEditorWidget,
} from "./widgets";

// setNpmCDNRegistry("//unpkg.com");

const {
  Field,
  Form,
  FormLayout,
  Input,
  Password,
  ObjectContainer,
  NumberPicker,
  Radio,
  Checkbox,
  Select,
  Rate,
  Slider,
  TreeSelect,
  Transfer,
  DatePicker,
  TimePicker,
  Upload,
  Cascader,
  Switch,
  Card,
  FormGrid,
  FormTab,
  FormCollapse,
  Space,
  ArrayTable,
  ArrayCards,
  // FormStep,
  ShadowModal,
  ProArrayTable,
} = Preset;


export const App = () => {
  const engine = useMemo(
    () =>
      createDesigner({
        shortcuts: [
          new Shortcut({
            codes: [
              [KeyCode.Meta, KeyCode.S],
              [KeyCode.Control, KeyCode.S],
            ],
            handler(ctx) {
              saveSchema(ctx.engine);
            },
          }),
        ],
        rootComponentName: "Form",
      }),
    [],
  );
  return (
    <Designer engine={engine}>
      <StudioPanel logo={<LogoWidget />} actions={<ActionsWidget />}>
        <CompositePanel>
          <CompositePanel.Item title="panels.Component" icon="Component">
            <ResourceWidget
              title="Pro"
              sources={[ShadowModal, ProArrayTable]}
            />
            <ResourceWidget
              title="输入控件"
              sources={[
                Input,
                Password,
                NumberPicker,
                Rate,
                Slider,
                Select,
                TreeSelect,
                Cascader,
                Transfer,
                Checkbox,
                Radio,
                DatePicker,
                TimePicker,
                Upload,
                Switch,
                ObjectContainer,
              ]}
            />
            <ResourceWidget
              title="布局组件"
              sources={[
                Card,
                FormGrid,
                FormTab,
                // FormStep,
                FormLayout,
                FormCollapse,
                Space,
              ]}
            />
            <ResourceWidget
              title="自增组件"
              sources={[ArrayCards, ArrayTable]}
            />
          </CompositePanel.Item>
          <CompositePanel.Item title="panels.OutlinedTree" icon="Outline">
            <OutlineTreeWidget />
          </CompositePanel.Item>
          <CompositePanel.Item title="panels.History" icon="History">
            <HistoryWidget />
          </CompositePanel.Item>
        </CompositePanel>
        <Workspace id="form">
          <WorkspacePanel>
            <ToolbarPanel>
              <DesignerToolsWidget />
              <ViewToolsWidget
                use={["DESIGNABLE", "JSONTREE", "MARKUP", "PREVIEW"]}
              />
            </ToolbarPanel>
            <ViewportPanel style={{ height: "100%" }}>
              <ViewPanel type="DESIGNABLE">
                {() => (
                  <ComponentTreeWidget
                    components={{
                      Field,
                      Form,
                      ObjectContainer,
                      FormLayout,
                      Input,
                      Password,
                      NumberPicker,
                      Radio,
                      Checkbox,
                      Select,
                      Rate,
                      Slider,
                      TreeSelect,
                      Transfer,
                      DatePicker,
                      TimePicker,
                      Upload,
                      Cascader,
                      Switch,
                      Card,
                      FormGrid,
                      FormTab,
                      FormCollapse,
                      Space,
                      // FormStep,
                      Button,
                      ArrayTable,
                      ArrayCards,
                      ProArrayTable,
                      ShadowModal,
                    }}
                  />
                )}
              </ViewPanel>
              <ViewPanel type="JSONTREE" scrollable={false}>
                {(tree, onChange) => (
                  <SchemaEditorWidget tree={tree} onChange={onChange} />
                )}
              </ViewPanel>
              <ViewPanel type="MARKUP" scrollable={false}>
                {(tree) => <MarkupSchemaWidget tree={tree} />}
              </ViewPanel>
              <ViewPanel type="PREVIEW">
                {(tree) => <PreviewWidget tree={tree} />}
              </ViewPanel>
            </ViewportPanel>
          </WorkspacePanel>
        </Workspace>
        <SettingsPanel title="panels.PropertySettings">
          <SettingsForm uploadAction="https://www.mocky.io/v2/5cc8019d300000980a055e76" />
        </SettingsPanel>
      </StudioPanel>
    </Designer>
  );
};
