import { ArrowRightOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import FormikControls from "../../components/formik/formikControls";
import AuthService from "../../services/auth.service";
import UtilsService from "../../services/utils.service";

function Verify({ onFormSubmit }: any) {
    const initialValues = {
        userName: "",
    };
    const validationSchema = Yup.object({
        userName: Yup.string().required("Required").matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, 'Enter valid email')
    });
    const handleSubmit = (value: any, actions: any) => {
        actions.setSubmitting(true);
        AuthService.verifyUser(value).then((res) => {
            const response = res.data;
            if (response && response.statusCode === 200) {
                const obj = {
                    authrole: response.authRole,
                    username: value.userName
                };
                UtilsService.setCookies(obj);
                onFormSubmit(value);
            }
        }).catch((err) => {
            console.log(err)
        }).finally(() => {
            actions.setSubmitting(false);
        });
    }
    return (
        <>
            <Formik
                initialValues={initialValues}
                enableReinitialize={true}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}>
                {(formik: any) => {
                    return (
                        <Form noValidate>
                            <div className="flex flex-col gap-4">
                                <div>
                                    <FormikControls control="input" type="email" label="Username" name="userName" placeholder="Enter username" isshowlabel="false" isshowerrmsg="false" status={formik.touched && formik.touched.userName && formik.errors && formik.errors.userName ? 'error' : ''} />
                                </div>
                                <div>
                                    <Button htmlType="submit" type="primary" className="float_right" icon={<ArrowRightOutlined />} size="large" block
                                        loading={formik.isSubmitting}>
                                        Proceed
                                    </Button>
                                </div>
                            </div>
                        </Form>
                    );
                }}
            </Formik>
        </>
    )
}

export default Verify;
