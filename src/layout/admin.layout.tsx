import { PoweroffOutlined } from "@ant-design/icons";
import { Button } from "antd";
import navigationPaths from "../services/nav.service";
import { Outlet, useNavigate } from "react-router-dom";

function AdminLayout() {
  const navigate = useNavigate();
  const enterLoading = () => {
    navigate(navigationPaths.routePaths.login);
  }

  return (
    <>
      <div>Admin Layout</div>
      <Button type="primary" icon={<PoweroffOutlined />} onClick={() => enterLoading()}>
        Click me!
      </Button>
      <Outlet />
    </>
  );
}

export default AdminLayout;
