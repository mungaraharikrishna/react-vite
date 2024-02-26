import { DashboardOutlined, HomeOutlined, KeyOutlined, LeftOutlined, LogoutOutlined, RightOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Breadcrumb, Button, Dropdown, Layout, Menu, MenuProps, Space, theme } from "antd";
import { NavLink, Outlet } from "react-router-dom";
import { useState } from "react";
import Sider from "antd/es/layout/Sider";
import { Header, Content, Footer } from "antd/es/layout/layout";
import logo from "../assets/images/logo.svg";
import NavService from "../services/nav.service";

function AdminLayout() {
  const [collapsed, setCollapsed] = useState(false);
  
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const navItems = [
    {
      key: `dashboard`,
      path: NavService.routePaths.dashboard,
      label: "Dashboard",
      icon: <DashboardOutlined />,
    },
    {
      key: `users`,
      path: NavService.routePaths.users,
      label: "Users",
      icon: <UserOutlined />,
    },
  ].map((item) => {
    return {
      key: item.key,
      label: <nav>
        <NavLink to={item.path} className={({ isActive }) => (isActive ? 'active' : 'inactive')}>{item.label}</NavLink>
      </nav>,
      icon: item.icon,
    };
  });

  const breadcrumbItem = [
    {
      title: <NavLink to={NavService.routePaths.dashboard}><HomeOutlined /></NavLink>
    },
    {
      title: "Dashboard",
    },
  ]

  const items: MenuProps['items'] = [
    {
      label: 'Profile',
      icon: <UserOutlined />,
      key: '0',
    },
    {
      label: "Change Password",
      icon: <KeyOutlined />,
      key: '1',
    },
    {
      type: 'divider',
    },
    {
      label: 'Logout',
      key: '3',
      icon: <LogoutOutlined />,
      onClick: (event: any) => {
        console.log(event)

      }
    },
  ];

  return (
    <>
      <Layout className="min-h-screen">
        <Sider trigger={null} collapsible collapsed={collapsed} className="min-h-screen">
          <div className="demo-logo-vertical p-4">
            <img className="h-8 w-auto" src={logo} alt="GenAI" />
          </div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['']} items={navItems} />
        </Sider>
        <Layout>
          <Header style={{ padding: '0px', background: colorBgContainer }}>
            <div className="flex gap-3 items-center">
              <div className="ml-2.5">
                <Button type="text" icon={collapsed ? <RightOutlined /> : <LeftOutlined />} onClick={() => setCollapsed(!collapsed)} />
              </div>
              <div>
                <Breadcrumb items={breadcrumbItem} />
              </div>
              <div className="ml-auto mr-3">
                <Dropdown menu={{ items }} trigger={['click']} className="mt-3">
                  <a onClick={(e) => e.preventDefault()}>
                    <Space>
                      <Avatar icon={<UserOutlined />} />
                    </Space>
                  </a>
                </Dropdown>
              </div>
            </div>
          </Header>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Outlet />
          </Content>
          <Footer style={{ textAlign: "center", background: colorBgContainer }}>
            Ant Design ©2023 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>

    </>
  );
}

export default AdminLayout;
