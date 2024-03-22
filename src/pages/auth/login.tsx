import { Button } from "antd";
// import logo from "../../assets/images/logo.svg";
import poweredlogo from "../../assets/images/msrcosmos_logo.svg";
import { useNavigate } from "react-router-dom";
import NavService from "../../services/nav.service";
import * as Yup from "yup"
import { Form, Formik } from "formik";
import FormikControls from "../../components/formik/formikControls";
import { LoginOutlined, UserSwitchOutlined } from "@ant-design/icons";
import Verify from "./verify";
import { useEffect, useState } from "react";
import UtilsService from "../../services/utils.service";
import AuthService from "../../services/auth.service";
import { toast } from "react-toastify";

function Login() {
  const navigate = useNavigate();
  const [initialValues, setInitialValues]: any = useState({
    userName: "",
    password: "",
  });
  const [username, setUsername]: any = useState(UtilsService.getCookieByName('username'));
  const [authrole, setAuthrole]: any = useState(UtilsService.getCookieByName('authrole'));
  const [isVerified, setVerified] = useState(false);
  const validationSchema = Yup.object({
    userName: Yup.string().required("Required").matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, 'Enter valid email'),
    password: Yup.string().required("Required"),
  });

  const handleVerify = (value: any) => {
    console.log(value);
    setUsername(UtilsService.getCookieByName('username'))
    setAuthrole(UtilsService.getCookieByName('authrole'))
    setVerified(true);
  }

  const storeDataToSession = (data: any) => {
    const cObj: any = {
      access_token: data.jwtResponse.accessToken
    }
    let organizationList: any[] = [];
    const organization: any = {};
    const bussinessUnit: any = {};
    if (data.organizationListDto && data.organizationListDto.length) {
      organizationList = data.organizationListDto.reduce((arr: any[], val: any) => {
        arr.push({ organizationName: val.organizationName, id: val.id, status: val.status });
        return arr
      }, [])
    }
    if (data.organizationRequestDto && Object.keys(data.organizationRequestDto).length) {
      organization['organizationName'] = data.organizationRequestDto.organizationName;
      organization['organizationId'] = data.organizationRequestDto.organizationId;
    }
    if (data.bussinessUnitListDto && data.bussinessUnitListDto.length) {
      bussinessUnit['name'] = data.bussinessUnitListDto[0].name;
      bussinessUnit['id'] = data.bussinessUnitListDto[0].id;
      bussinessUnit['organizationId'] = data.bussinessUnitListDto[0].organizationIds;
    }
    const lsObj: any = {
      menu: data.menu,
      organizationList: organizationList,
      organization: organization,
      roles: data.roles,
      bussinessUnit: bussinessUnit,
      name: `${data.firstName} ${data.lastName}`,
      phonenumber: data.phonenumber
    }
    UtilsService.setCookies(cObj);
    UtilsService.setLocalStorage(lsObj);
  }

  const handleSubmit = (value: any, actions: any) => {
    actions.setSubmitting(true);
    AuthService.login(value).then((res) => {
      const response = res.data;
      if (response && response.statusCode === 200) {
        storeDataToSession(response.userRequestDto)
        toast.success(response.message);
        navigate(NavService.routePaths.dashboard);
      }
    }).catch((err) => {
      console.log(err);
    }).finally(() => {
      actions.setSubmitting(false);
    });
  }

  const switchAccount = () => {
    UtilsService.removeFromCookie();
    setVerified(false);
  }

  useEffect(() => {
    if (username && authrole) {
      setInitialValues({ 'userName': username, password: '' });
      setVerified(true);
    } else {
      setUsername('')
      setAuthrole('')
    }
  }, [username, authrole]);

  return (
    <>
      <div className="flex min-h-full flex-col justify-center sm:p-0 md:p-4 lg:p-12 xl:p-16 2xl:p-32">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img className="h-14 w-auto" src={'https://ticketing-web-uat.azurewebsites.net/assets/img/ticketing-logo.svg'} alt="Logo" />
        </div>
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="mb-3">
            <div className="font-medium text-base">Welcome To Ticketing System</div>
            <div className="font-light text-xs text-slate-400">Provide your email and proceed to Sign In.</div>
          </div>
          {!isVerified && <Verify onFormSubmit={handleVerify} />}
          {isVerified && <Formik
            initialValues={initialValues}
            enableReinitialize={true}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}>
            {(formik: any) => {
              return (
                <Form noValidate>
                  <div className="flex flex-col gap-4">
                    <div>
                      <FormikControls control="input" type="email" label="Username" name="userName" placeholder="Enter userame" isshowlabel="false" isshowerrmsg="false" isshowicon="true" isdisabled="true" status={formik.touched && formik.touched.userName && formik.errors && formik.errors.userName ? 'error' : ''} />
                    </div>
                    <div>
                      <FormikControls control="password" type="password" label="Password" name="password" placeholder="Enter password" isshowlabel="false" isshowerrmsg="false" isshowicon="true" status={formik.touched && formik.touched.password && formik.errors && formik.errors.password ? 'error' : ''} />
                    </div>
                    <div className="flex flex-col gap-4">
                      <Button htmlType="submit" type="primary" className="float_right" icon={<LoginOutlined />} size="large" loading={formik.isSubmitting} block>
                        Sign in
                      </Button>
                      <Button type="link" className="float_right" icon={<UserSwitchOutlined />} size="large" onClick={() => switchAccount()} block>
                        Switch Account
                      </Button>
                      {/* <pre>{JSON.stringify(formik, null, 1)}</pre> */}
                    </div>
                  </div>
                </Form>
              );
            }}
          </Formik>}
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
