import React from "react";
import { Button, Form } from "react-bootstrap";
import CommonInput from "../commonInput/CommonInput";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { useFormik } from "formik";
import eyes from "../../../assets/images/paswdClossEys.svg";
import userIcon from "../../../assets/images/user_icon.png";
import lock from "../../../assets/images/lock.svg";
// import { login } from "../../../redux/actions/user.action";
// import { useDispatch } from "react-redux";
import CommonPasswordInput from "../commonInput/CommonPasswordInput";

export const Login = (props: any) => {
  // const dispatch: any = useDispatch();

  const loginSchema = Yup.object().shape({
    password: Yup.string().required("*This Field is required"),
    email: Yup.string().when("isEmailValue", {
      is: true,
      then: Yup.string()
        .email("Please enter valid email")
        .required("*This Field is required")
        .matches(/^[a-zA-Z0-9+.-]+@[a-zA-Z0-9.-]+$/, "Please enter valid username/email address"),
      otherwise: Yup.string()
        .matches(/^[a-zA-Z]+[a-zA-Z0-9_]+$/, "Please enters valid username/email address")
        .required("This field is required"),
    }),
  });
  const formik = useFormik({
    initialValues: {
      isEmailValue: "",
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: async (values) => {
      if (values.isEmailValue) {
        values.email = values?.email.toLowerCase();
      } else {
        values.email = values?.email.toLowerCase();
      }
    },
  });

  const handleCheckEmailOrUsername = (e: any) => {
    let email = e.target.value.includes("@");
    if (email) {
      formik.setFieldValue("isEmailValue", true);
    } else {
      formik.setFieldValue("isEmailValue", false);
    }
  };

  return (
    <div className="">
      <h2 className="">LOGIN</h2>
      <div className="modal__disc">
        <p className="p2">With your Account</p>
        <div className="signup__forn">
          <Form onSubmit={formik.handleSubmit}>
            <CommonInput
              labelname="Email or Username"
              inputPlaceholder="Enter Email or Username"
              id="email"
              name="email"
              typeinput="text"
              inputIcon={<img src={userIcon} alt="" />}
              onChange={(e: any) => {
                formik.handleChange(e);
                handleCheckEmailOrUsername(e);
              }}
              value={formik.values.email}
              isInvalid={formik.touched.email && !!formik.errors.email}
              error={
                formik.errors.email && formik.touched.email ? (
                  <span className="error-message">{formik.errors.email}</span>
                ) : null
              }
            />
            <CommonPasswordInput
              className="password__field"
              labelname="Password"
              inputPlaceholder="Enter Your Password"
              inputIcon={<img src={lock} alt="" />}
              RHSimg={<img src={eyes} alt="" />}
              id="password"
              onChange={formik.handleChange}
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
            <h6 className="d-flex justify-content-end">
              <p>
                <Link
                  to="/"
                  onClick={() => {
                    props.handleForgetshow();
                    props.loghandleClose();
                  }}
                >
                  Forgot Password?
                </Link>
              </p>
            </h6>
            <Button className="w-100 signBtn" type="submit">
              Submit
            </Button>
            <h6>
              Don’t have an account?{" "}
              <Link
                to="/"
                onClick={() => {
                  props.handleSignUpPopshow();
                  props.loghandleClose();
                }}
              >
                Register here
              </Link>
            </h6>
          </Form>
        </div>
      </div>
    </div>
  );
};
