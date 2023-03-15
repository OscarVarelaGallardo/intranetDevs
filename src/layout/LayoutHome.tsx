import React from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';

import { Breadcrumb, Layout, Menu, theme } from 'antd';

const { Header, Content, Footer, Sider } = Layout;

const LayoutHome = () => {
  const [collapsed, setCollapsed] = React.useState(false);
  
 
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Layout.Sider>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<UserOutlined />}>
              nav 1
            </Menu.Item>
            <Menu.Item key="2" icon={<LaptopOutlined />}>
              nav 2
            </Menu.Item>
            <Menu.Item key="3" icon={<NotificationOutlined />}>
              nav 3
            </Menu.Item>
            <Menu.SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1">
              <Menu.Item key="4">option4</Menu.Item>
              <Menu.Item key="5">option5</Menu.Item>
              <Menu.Item key="6">option6</Menu.Item>
              <Menu.Item key="7">option7</Menu.Item>
            </Menu.SubMenu>
            <Menu.SubMenu key="sub2" icon={<LaptopOutlined />} title="subnav 2">
              <Menu.Item key="8">option8</Menu.Item>
              <Menu.Item key="9">option9</Menu.Item>
              <Menu.Item key="10">option10</Menu.Item>
              <Menu.Item key="11">option11</Menu.Item>
            </Menu.SubMenu>
            <Menu.SubMenu key="sub3" icon={<NotificationOutlined />} title="subnav 3">
              <Menu.Item key="12">option12</Menu.Item>
              <Menu.Item key="13">option13</Menu.Item>
              <Menu.Item key="14">option14</Menu.Item>
              <Menu.Item key="15">option15</Menu.Item>
            </Menu.SubMenu>
          </Menu>
        </Layout.Sider>
        
        <Layout>
          <Layout.Header style={{ background: '#ffff', padding: 0 }} />
          <Layout.Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              Bill is a cat.
            </div>
          </Layout.Content>
          <Layout.Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Layout.Footer>
        </Layout>
      </Layout>


  )
}

export default LayoutHome
