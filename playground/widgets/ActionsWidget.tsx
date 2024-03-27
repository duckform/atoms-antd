import { GithubOutlined } from "@ant-design/icons";
import { GlobalRegistry } from "@duckform/core";
import { TextWidget, useDesigner } from "@duckform/react";
import { observer } from "@formily/react";
import { Button, Space } from "antd";
import { useEffect } from "react";
import { loadInitialSchema, saveSchema } from "../utils";

export const ActionsWidget = observer(() => {
  const designer = useDesigner();
  useEffect(() => {
    loadInitialSchema(designer);
  }, []);
  const supportLocales = ["zh-cn"];
  useEffect(() => {
    if (!supportLocales.includes(GlobalRegistry.getDesignerLanguage())) {
      GlobalRegistry.setDesignerLanguage("zh-cn");
    }
  }, []);
  return (
    <Space style={{ marginRight: 10 }}>
      {/* <Radio.Group
        value={GlobalRegistry.getDesignerLanguage()}
        optionType="button"
        options={[{ label: "简体中文", value: "zh-cn" }]}
        onChange={(e) => {

          GlobalRegistry.setDesignerLanguage(e.target.value);
        }}
      /> */}
      <Button href="https://github.com/duckform/atoms-antd" target="_blank">
        <GithubOutlined />
        Github
      </Button>
      <Button
        onClick={() => {
          saveSchema(designer);
        }}
      >
        <TextWidget>Save</TextWidget>
      </Button>
      <Button
        type="primary"
        onClick={() => {
          saveSchema(designer);
        }}
      >
        <TextWidget>Publish</TextWidget>
      </Button>
    </Space>
  );
});
