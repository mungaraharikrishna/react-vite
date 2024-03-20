import { Layout, theme } from "antd";
import { Navigate, Outlet } from "react-router-dom";
import { Content } from "antd/es/layout/layout";
// import logo from "../assets/images/logo.svg";
import NavService from "../services/nav.service";
import UtilsService from "../services/utils.service";
import FooterElm from "../components/footer";
import HeaderElm from "../components/header";
import { useState } from "react";
import SideNav from "../components/sideNav";

function AdminLayout() {
  const { token: { colorBgContainer, borderRadiusLG } } = theme.useToken();
  const [collapsed, setCollapsed] = useState(false);

  const onToggleSideNavFn = (val: boolean) => {
    setCollapsed(val)
  };

  return (
    <>
      <Layout className="min-h-screen">
        <SideNav collapsed={collapsed} />
        <Layout>
          <HeaderElm colorBgContainer={colorBgContainer} onToggleSideNav={onToggleSideNavFn} />
          <Content style={{ margin: '24px 16px', padding: 24, background: colorBgContainer, borderRadius: borderRadiusLG }}>
            {UtilsService.isAuthenticated() ? <Outlet /> : <Navigate to={NavService.routePaths.login} />}
          </Content>
          <FooterElm colorBgContainer={colorBgContainer} />
        </Layout>
      </Layout>

    </>
  );
}

export default AdminLayout;
