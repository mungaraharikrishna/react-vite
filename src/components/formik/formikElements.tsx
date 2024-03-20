import { KeyOutlined, UserOutlined } from "@ant-design/icons"
import { Input } from "antd"
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
                        <Input size="large" type={type} prefix={<UserOutlined />} placeholder={placeholder} status={status} {...field} {...rest} 
                        disabled={rest.isdisabled === 'true'} />
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
                        <Input.Password size="large" type={type} prefix={<KeyOutlined />} placeholder={placeholder} status={status} {...field} {...rest} autoFocus />
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

function Select(props: any) {
    const { label, name, options, ...rest } = props
    return (
        <div>
            <label htmlFor={name}>{label}</label>
            <Field as="select" id={name} name={name} {...rest}>
                {options.map((option: any) => {
                    return (
                        <option key={option.value} value={option.value}>
                            {option.key}
                        </option>
                    )
                })}
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
    Select,
    RadioButtons,
    CheckBoxes
}

export default FormikElements;