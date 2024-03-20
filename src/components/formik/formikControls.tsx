import FormikElements from "./formikElements";

const Input = FormikElements.Input;
const TextArea = FormikElements.TextArea;
const Password = FormikElements.Password;
const Select = FormikElements.Select;
const RadioButtons = FormikElements.RadioButtons;
const CheckBoxes = FormikElements.CheckBoxes;

function FormikControls(props: any) {
    const { control, ...rest } = props;
    switch (control) {
        case "input":
            return <Input {...rest} />
        case "textArea":
            return <TextArea {...rest} />
        case "password":
            return <Password {...rest} />
        case "select":
            return <Select {...rest} />
        case "radio":
            return <RadioButtons {...rest} />
        case "checkbox":
            return <CheckBoxes {...rest} />
        default:
            return null
    }
}
export default FormikControls;
