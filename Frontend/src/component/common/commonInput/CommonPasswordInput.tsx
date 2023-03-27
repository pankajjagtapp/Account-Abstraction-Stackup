import { useState } from 'react'
import { Form } from 'react-bootstrap'
import paswdClossEys from "../../../assets/images/paswdClossEys.svg";
import eyeopen from "../../../assets/images/eye-open.svg";


// import './CommonInput.scss'
type inputType = {
  labelname?: string,
  inputPlaceholder: string,
  inputIcon?: JSX.Element,
  RHSimg?: JSX.Element,
  className?: string,
  onChange?: any,
  value?: any,
  type?: any,
  isInvalid?: any,
  error?: any,
  id?: any,
  autocomplete?: any,
  inputClassName?: any,
}
const CommonPasswordInput = (props: inputType) => {
  const [showEye, setshowEye] = useState(false);

  const clickedOnEye = () => {
    setshowEye(!showEye);
  };
  return (
    <div className={props.className}>
      <Form.Group className="input__box" controlId={props.id}>
        <Form.Label> {props.labelname} </Form.Label>
        <div className='input__box__inner'>
          {props.inputIcon}
          <Form.Control className={props.inputClassName} type={showEye ? "text" : "password"} placeholder={props.inputPlaceholder}  autoComplete={props.autocomplete} onChange={props.onChange} value={props.value} isInvalid={props.isInvalid} />
          

              {showEye && (
                
                <i className='imgRHS' onClick={() => clickedOnEye()}><img src={eyeopen} alt="icon" /></i>
                )}


               {!showEye && (
                
                <i className='imgRHS' onClick={() => clickedOnEye()}><img src={paswdClossEys} alt="icon" /></i>

              )}

        </div>
          {props.error}
      </Form.Group>
    </div>
  )
}

export default CommonPasswordInput;
