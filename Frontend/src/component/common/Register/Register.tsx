import React from "react";
import { Button, Form } from "react-bootstrap";
import CommonInput from "../commonInput/CommonInput";
import mail from "../../../assets/images/mail.svg";
import lock from "../../../assets/images/lock.svg";
import eyes from "../../../assets/images/paswdClossEys.svg";
import userIcon from "../../../assets/images/user_icon.png";
import CommonPasswordInput from "../commonInput/CommonPasswordInput";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { useFormik } from "formik";

const Register = (props: any) => {
  const [checked, setChecked] = React.useState(true);
  // const [userName, setUserName] = useState("");
  // const [userEmail, setUserEmail] = useState("");
  // const [userPassword, setUserPassword] = useState("");


  const registerSchema = Yup.object().shape({
    username: Yup.string()
      .required("*This field is required")
      .matches(
        /^[a-zA-Z]+[a-zA-Z0-9_]+$/,
        "Sorry, only letters (A-Z, a-z), numbers (0-9), and (_) are allowed."
      )
      .min(3, "Please enter atleast 3 characters")
      .max(30, "You can enter upto 30 characters only"),
    email: Yup.string()
      .email("Please enter a valid email")
      .required("*This field is required")
      .matches(
        /^[a-zA-Z0-9+.-]+@[a-zA-Z0-9.-]+$/,
        "Sorry, only letters (a-z), numbers (0-9), and periods (.) are allowed."
      ),
    password: Yup.string()
      .required("*This field is required")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&<>-])[A-Za-z\d@$!%*?&<>-]{8,}$/,
        "Password must contain at least 8 characters, one uppercase, one number and one special case character"
      )
      .max(32, "You can enter upto 30 characters only"),
    confirmPassword: Yup.string()
      .when("password", {
        is: (val: any) => (val && val.length > 0 ? true : false),
        then: Yup.string().oneOf(
          [Yup.ref("password")],
          "Password and confirm password does not match"
        ),
      })
      .required("*This field is required")
      .max(32, "You can enter upto 30 characters only"),
  });

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: registerSchema,
    onSubmit: async (values) => {
      // let data = {
      //   emailId: values?.email.toLowerCase(),
      //   userName: values.username.toLowerCase(),
      //   password: values.password,
      // };
    },
  });

  return (
    <div className="">
      <h2 className="">SIGN UP</h2>
      <div className="modal__disc">
        <p className="p2">Create New Account</p>
        <div className="signup__forn">
          <Form onSubmit={formik.handleSubmit}>
            <div className="field_box">
              <CommonInput
                labelname="Username"
                inputPlaceholder="Enter User Name"
                typeinput="text"
                inputIcon={<img src={userIcon} alt="userIcon" />}
                id="username"
                onChange={(e: any) => { formik.handleChange(e); }}
                value={formik.values.username}
                isInvalid={formik.touched.username && !!formik.errors.username}
                error={
                  formik.errors.username && formik.touched.username ? (
                    <span className="error-message">
                      {formik.errors.username}
                    </span>
                  ) : null
                }
              />
            </div>
            <div
              className="field_box">
              <CommonInput
                labelname="Email"
                inputPlaceholder="ICO@gmail.com"
                typeinput="email"
                inputIcon={<img src={mail} alt="" />}
                id="email"
                onChange={(e: any) => { formik.handleChange(e);  }}
                value={formik.values.email}
                isInvalid={formik.touched.email && !!formik.errors.email}
                error={
                  formik.errors.email && formik.touched.email ? (
                    <span className="error-message">{formik.errors.email}</span>
                  ) : null
                }
              />
            </div>
            <div
              className="field_box">
              <CommonPasswordInput
                className="password__field"
                labelname="Password"
                autocomplete="new-password"
                inputPlaceholder="Enter Your Password"
                inputIcon={<img src={lock} alt="" />}
                RHSimg={<img src={eyes} alt="" />}
                id="password"
                onChange={(e: any) => { formik.handleChange(e); }}
                value={formik.values.password}
                isInvalid={formik.touched.password && !!formik.errors.password}
                error={
                  formik.errors.password && formik.touched.password ? (
                    <span className="error-message">
                      {formik.errors.password}
                    </span>
                  ) : null
                }
              />
            </div>
            <CommonPasswordInput
              className="password__field"
              labelname="Confirm Password"
              inputPlaceholder="Enter Your Password"
              RHSimg={<img src={eyes} alt="" />}
              inputIcon={<img src={lock} alt="" />}
              id="confirmPassword"
              onChange={formik.handleChange}
              value={formik.values.confirmPassword}
              isInvalid={
                formik.touched.confirmPassword &&
                !!formik.errors.confirmPassword
              }
              error={
                formik.errors.confirmPassword &&
                  formik.touched.confirmPassword ? (
                  <span className="error-message">
                    {formik.errors.confirmPassword}
                  </span>
                ) : null
              }
            />

            <h6 className="d-flex align-items-center mt-4">
              <Form.Check
                aria-label="option 1"
                className="checkPoint"
                id="terms"
                onChange={() => setChecked(!checked)}
              />
              <Form.Label className="terms" htmlFor="terms">
                I Agree To The terms & Conditions{" "}
                {/* <Link
                  to="/servicesterms"
                  target={"_blank"}
                  onClick={props.registerhandleClose}
                >
                  Terms And Condition
                </Link>{" "}
                And{" "}
                <Link
                  to="/policy"
                  target={"_blank"}
                  onClick={props.registerhandleClose}
                >
                  {" "}
                  Privacy And Policy.
                </Link> */}
              </Form.Label>
            </h6>
            {!checked ? (
              <Button className="w-100 signBtn" type="submit">
                Sign Up
              </Button>
            ) : (
              <Button className="w-100 signBtn" type="submit" disabled>
                Sign Up
              </Button>
            )}
            <h6>
              Already have an account ?{" "}
              <Link
                to="/"
                onClick={() => {
                  props.registerhandleShow();
                  props.registerhandleClose();
                }}
              >
                Sign in instead
              </Link>
            </h6>
          </Form>
        </div>
        
      </div>
    </div >
  );
};

export default Register;
