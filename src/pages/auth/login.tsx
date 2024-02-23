import { KeyOutlined, UserOutlined } from "@ant-design/icons";
import { Input } from "antd";

function Login() {
  const logo = 'src/assets/images/logo.svg';
  const poweredlogo = 'src/assets/images/msrcosmos_logo.svg';
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
              <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Sign in
              </button>
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
