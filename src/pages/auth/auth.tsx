import { Col, Row } from "antd";
import { Outlet } from "react-router-dom";

function Auth() {

  return (
    <div className="min-h-screen">
      <Row className="min-h-screen">
        <Col xs={24} sm={24} md={14} lg={14} xl={16}>
          <div className="min-h-48 md:min-h-full bg-center bg-cover" style={{ 'backgroundImage': 'url(../../../src/assets/images/login-bg.png)' }}></div>
        </Col>
        <Col xs={24} sm={24} md={10} lg={10} xl={8}>
          <div className="flex flex-column justify-content-center min-h-full min-w-full p-8">
            <div className="min-w-full mx-auto">
              <Outlet />
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}
export default Auth;
