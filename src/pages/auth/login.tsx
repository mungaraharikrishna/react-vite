import { KeyOutlined, LoginOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Input } from "antd";
import logo from "../../assets/images/logo.svg";
import poweredlogo from "../../assets/images/msrcosmos_logo.svg";
import { useNavigate } from "react-router-dom";
import NavService from "../../services/nav.service";
import { FieldControl, FieldGroup, FormBuilder, Validators } from "react-reactive-form";
const TextInput = ({ handler, dirty, hasError, meta }: any) => (
  <div>
      { meta.label == 'Password' && <Input.Password size="large" type={meta.type} placeholder={`Enter ${meta.label}`} {...handler()} prefix={<KeyOutlined />} status={dirty && hasError("required") ? 'error' : ''} />}
      { meta.label != 'Password' && <Input size="large" type={meta.type} placeholder={`Enter ${meta.label}`} {...handler()} prefix={<UserOutlined />} status={dirty && hasError("required") ? 'error' : ''} />}
    {/* <div className="text-red-400">
      {dirty && hasError("required") && `${meta.label} is required`}
    </div> */}
  </div>
)
function Login() {
  const navigate = useNavigate();
  const loginForm = FormBuilder.group({
    username: ["", Validators.required],
    password: ["", Validators.required],
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!loginForm.valid) {
      alert("Please enter a valid login");
      return false;
    }
    console.log("Form values", loginForm.value);
    navigate(NavService.routePaths.dashboard);
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
          <FieldGroup control={loginForm} render={() => (
            <form className="grid gap-4 grid-cols-1" onSubmit={($event) => handleSubmit($event)}>
              <div>
                <div>
                  <FieldControl name="username" render={TextInput} meta={{ label: "Username", type: 'text' }} />
                </div>
              </div>
              <div>
                <div>
                  <FieldControl name="password" render={TextInput} meta={{ label: "Password", type: 'password' }} />
                </div>
              </div>
              <div>
                <Button type="primary" className="float_right" icon={<LoginOutlined />} size="large" block onClick={($event) => handleSubmit($event)}>
                  Sign in
                </Button>
              </div>
            </form>
          )} />

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
