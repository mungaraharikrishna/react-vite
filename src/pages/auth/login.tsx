import { KeyOutlined, LoginOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Input } from "antd";
import logo from "../../assets/images/logo.svg";
import poweredlogo from "../../assets/images/msrcosmos_logo.svg";
import { useNavigate } from "react-router-dom";
import NavService from "../../services/nav.service";

function Login() {
  const navigate = useNavigate();

  const login = () => {
    navigate(NavService.routePaths.dashboard)
  }
  
  return (
    <>
      <div className="flex min-h-full flex-col justify-center sm:p-0 md:p-4 lg:p-12 xl:p-16 2xl:p-32">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img className="h-8 w-auto" src={logo} alt="GenAI" />
        </div>
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="mb-3">
            <div className="font-medium text-base">Sign-In</div>
            <div className="font-light text-xs text-slate-400">Sign-in to your account of GenAI.</div>
          </div>
          <form className="grid gap-4 grid-cols-1">
            <div>
              <div>
                <Input size="large" placeholder="Username" prefix={<UserOutlined />} />
              </div>
            </div>
            <div>
              <div>
                <Input size="large" placeholder="Password" prefix={<KeyOutlined />} />
              </div>
            </div>
            <div>
              <Button type="primary" className="float_right" icon={<LoginOutlined />} size="large" block onClick={() => login()}>
                Sign in
              </Button>
            </div>
          </form>

          <div className="mt-10 flex flex-col justify-center items-center">
            <div className="text-gray-400 text-xs mb-1 mt-5">Powered by</div>
            <img src={poweredlogo} alt="MSRcosmos" className="h-12" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
