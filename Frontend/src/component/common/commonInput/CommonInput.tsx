import { Form } from "react-bootstrap";

type inputType = {
  labelname?: string;
  name?: string;
  typeinput: string;
  inputPlaceholder: string;
  inputIcon?: JSX.Element;
  RHSimg?: JSX.Element;
  className?: string;
  onChange?: any;
  value?: any;
  type?: any;
  isInvalid?: any;
  error?: any;
  id?: any;
  disabled?: any;
  righIcon?: any;
  loader?: any;
  onWheel?: any;
  min?: any;
  max?: any;
  required?: any;
  input_className?: string;
  onClick?: any;
};
const CommonInput = (props: inputType) => {
  return (
    <div className={props.className}>
      <Form.Group className="input__box" controlId={props.id}>
        {props.labelname ? <Form.Label> {props.labelname} </Form.Label> : ""}
        <div className="input__box__inner">
          {props.inputIcon}
          <Form.Control
            type={props.typeinput}
            placeholder={props.inputPlaceholder}
            name={props.name}
            onChange={props.onChange}
            value={props.value}
            isInvalid={props.isInvalid}
            autoComplete={"off"}
            disabled={props.disabled}
            onWheel={props.onWheel}
            min={props.min}
            max={props.max}
            required={props.required}
            className={props?.righIcon ? 'rightIconInput' : ''}
            onClick={props.onClick}
          />
          {props.righIcon}
          {props.loader ?
            <i className='fa fa-spinner fa-spin'></i>
            :
            ""
          }
        </div>
        {props.error}
      </Form.Group>
    </div>
  );
};

export default CommonInput;
