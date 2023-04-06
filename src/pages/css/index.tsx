import React from "react";
import BfcCompontents from "./compontents/bfc";
import { Layout, Tabs, Typography } from '@arco-design/web-react';
import LayoutCompontents from "./compontents/layout";
import Delta from "./compontents/delta";

const Sider = Layout.Sider;
const Header = Layout.Header;
const Content = Layout.Content;
const TabPane = Tabs.TabPane;



const CssCompontents: React.FC = () => {
  return <>
    <Layout style={{ height: '100vh' }}>
      <Header>Header</Header>
      <Layout>
        <Sider>Sider</Sider>
        <Content>
          <Tabs defaultActiveTab='1'>
            <TabPane key='1' title='Tab 1'>
              <Typography.Paragraph ><BfcCompontents></BfcCompontents></Typography.Paragraph>
            </TabPane>
            <TabPane key='2' title='Tab 2'>
              <Typography.Paragraph ><LayoutCompontents></LayoutCompontents></Typography.Paragraph>
            </TabPane>
            <TabPane key='3' title='Tab 3'>
              <Typography.Paragraph ><Delta></Delta></Typography.Paragraph>
            </TabPane>
          </Tabs>

        </Content>
      </Layout>
    </Layout>
  </>
}

export default CssCompontents