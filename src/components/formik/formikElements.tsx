import { KeyOutlined, UserOutlined } from "@ant-design/icons"
import { Input, Select } from "antd"
import { Field, ErrorMessage } from "formik"

function InputElm(props: any) {
    const { name, label, type, placeholder, status, isshowlabel, isshowerrmsg, ...rest } = props
    return (
        <div>
            {isshowlabel === 'true' && <label htmlFor={name}> {label}</label>}
            <Field name={name} >
                {(formik: any) => {
                    const { field } = formik;
                    return (
                        <Input size="large" type={type} prefix={rest.isshowicon === "true" ? <UserOutlined /> : ''} placeholder={placeholder} status={status} {...field} {...rest} disabled={rest.isdisabled === 'true'} />
                    )
                }}
            </Field>
            {isshowerrmsg === 'true' && <ErrorMessage name={name} component="small" className="errorMsg" />}
        </div>
    )
}

function Password(props: any) {
    const { name, label, type, placeholder, status, isshowlabel, isshowerrmsg, ...rest } = props
    return (
        <div>
            {isshowlabel === 'true' && <label htmlFor={name}> {label}</label>}
            <Field name={name} >
                {(formik: any) => {
                    const { field } = formik;
                    return (
                        <Input.Password size="large" type={type} prefix={rest.isshowicon === "true" ? <KeyOutlined /> : ''} placeholder={placeholder} status={status} {...field} {...rest} />
                    )
                }}
            </Field>
            {isshowerrmsg === 'true' && <ErrorMessage name={name} component="small" className="errorMsg" />}
        </div>
    )
}

function TextAreaElm(props: any) {
    const { label, name, ...rest } = props
    return (
        <div>
            <label htmlFor={name}>{label}</label>
            <Field as="textarea" id={name} name={name} {...rest} />
            <ErrorMessage name={name} component="small" className="errorMsg" />
        </div>
    )
}

function SelectElm(props: any) {
    const { label, name, options, status, ...rest } = props
    return (
        <div>
            <label htmlFor={name}>{label}</label><br />
            <Field name={name}>
                {(formik: any) => {
                    return (
                        <Select className="w-full" size="large" allowClear placeholder={rest.placeholder} onChange={(value) => formik.form.setFieldValue(formik.field.name, value)} status={status} {...formik} {...rest} >
                            {options.map((val: any, index: number) => {
                                return (
                                    <Select.Option key={index} value={val.value}>{val.label}</Select.Option>
                                )
                            })}
                        </Select>
                    )
                }}

            </Field>
            <ErrorMessage name={name} component="small" className="errorMsg" />
        </div>
    )
}

function RadioButtons(props: any) {
    const { label, name, options, ...rest } = props
    return (
        <div>
            <label>{label}</label>
            <Field name={name}>
                {(formik: any) => {
                    const { field } = formik
                    return options.map((option: any) => {
                        return (
                            <div key={option.key}>
                                <input
                                    type="radio"
                                    id={option.value}
                                    {...field}
                                    {...rest}
                                    value={option.value}
                                    checked={field.value === option.value}
                                />
                                <label htmlFor={option.value}>{option.key}</label>
                            </div>
                        )
                    })
                }}
            </Field>
            <ErrorMessage name={name} component="small" className="errorMsg" />
        </div>
    )
}

function CheckBoxes(props: any) {
    const { label, name, options, ...rest } = props
    return (
        <div>
            <label>{label}</label>
            <Field name={name}>
                {(formik: any) => {
                    const { field } = formik
                    return options.map((option: any) => {
                        return (
                            <div key={option.key}>
                                <input
                                    type="checkbox"
                                    id={option.value}
                                    {...field}
                                    {...rest}
                                    value={option.value}
                                    checked={field.value.includes(option.value)}
                                />
                                <label>{option.key}</label>
                            </div>
                        )
                    })
                }}
            </Field>
            <ErrorMessage name={name} component="small" className="errorMsg" />
        </div>
    )
}

const FormikElements = {
    Input: InputElm,
    Password,
    TextArea: TextAreaElm,
    Select: SelectElm,
    RadioButtons,
    CheckBoxes
}

export default FormikElements;