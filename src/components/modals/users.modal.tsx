import { CloseOutlined, LoginOutlined } from "@ant-design/icons";
import { Button, Modal } from "antd";
import { Formik, Form } from "formik";
import { useEffect } from "react";
import * as Yup from "yup"
import FormikControls from "../formik/formikControls";
function UserModalPop({ isModalOpen, modalData, onModalEvent }: any) {
    const initialValues = {
        bussinessUnitId: "",
        password: "",
        departmentId: ""
    };
    const validationSchema = Yup.object({
        bussinessUnitId: Yup.string().required("Required").matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, 'Enter valid email'),
        password: Yup.string().required("Required"),
        departmentId: Yup.string().required("Required"),
    });

    const handleCancel = () => {
        onModalEvent(false);
    };

    const resetForm = (value: any, actions: any) => {
        console.log(value, actions);
    };

    const handleSubmit = (value: any, actions: any) => {
        console.log(value, actions);
    }

    useEffect(() => {
        if (isModalOpen) {
            console.log(modalData)
            console.log(isModalOpen)
        }
    }, [isModalOpen, modalData]);


    return (
        <>
            <Modal title="Add New User" maskClosable={false} open={isModalOpen} footer={null} onCancel={handleCancel} >
                <Formik
                    initialValues={initialValues}
                    enableReinitialize={true}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                    onReset={resetForm}>
                    {(formik: any) => {
                        return (
                            <Form noValidate autoComplete="off" onSubmit={formik.handleSubmit} onReset={formik.handleReset}>
                                <div className="flex flex-col gap-4">
                                    <div>
                                        <FormikControls control="select" label="Bussiness Unit" options={[
                                            { value: 'jack', label: 'Jack' },
                                            { value: 'lucy', label: 'Lucy' },
                                            { value: 'Yiminghe', label: 'yiminghe' },
                                            { value: 'disabled', label: 'Disabled', disabled: true },
                                        ]} name="bussinessUnitId" placeholder="Select bussiness unit" isshowlabel="true" isshowerrmsg="true" isshowicon="false" isdisabled="false" status={formik.touched && formik.touched.bussinessUnitId && formik.errors && formik.errors.bussinessUnitId ? 'error' : ''} />
                                    </div>
                                    <div>
                                        <FormikControls control="select" label="Department" options={[
                                            { value: 'jack', label: 'Jack' },
                                            { value: 'lucy', label: 'Lucy' },
                                            { value: 'Yiminghe', label: 'yiminghe' },
                                            { value: 'disabled', label: 'Disabled', disabled: true },
                                        ]} name="departmentId" placeholder="Select department" isshowlabel="true" isshowerrmsg="true" isshowicon="false" isdisabled="false" status={formik.touched && formik.touched.departmentId && formik.errors && formik.errors.departmentId ? 'error' : ''} />
                                    </div>
                                    <div>
                                        <FormikControls control="password" type="password" label="Password" name="password" placeholder="Enter password" isshowlabel="true" isshowerrmsg="true" isshowicon="false" status={formik.touched && formik.touched.password && formik.errors && formik.errors.password ? 'error' : ''} />
                                    </div>
                                    <div className="flex justify-end gap-4">
                                        <Button className="float_right" icon={<CloseOutlined />} onClick={() => handleCancel()} size="middle">
                                            Close
                                        </Button>
                                        <Button htmlType="submit" type="primary" className="float_right" icon={<LoginOutlined />} size="middle">
                                            Submit
                                        </Button>
                                    </div>
                                    {/* {JSON.stringify(formik, null, 4)} */}
                                </div>
                            </Form>
                        );
                    }}
                </Formik>
            </Modal>
        </>
    )
}

export default UserModalPop;